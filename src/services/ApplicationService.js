import ApolloClient from 'apollo-client'
import {ApolloLink} from 'apollo-link'
import {HttpLink} from 'apollo-link-http'
import {setContext} from 'apollo-link-context'
import {
  InMemoryCache,
  IntrospectionFragmentMatcher,
} from 'apollo-cache-inmemory'
import fetch from 'node-fetch'
import {createConsumer} from '@rails/actioncable'
import ActionCableLink from 'graphql-ruby-client/subscriptions/ActionCableLink'
import introspectionQueryResultData from '../config/fragmentTypes.json'
import Cookies from 'js-cookie'

const cable = createConsumer()

export const csrf = function () {
  const token = Cookies.get('CSRF_TOKEN')

  if (!token) {
    console.warn('CSRF Meta tag not found!')
    return {}
  }

  return {
    'X-CSRF-Token': token,
  }
}

const HOST =
  'https://kube.refsheet.net' ||
  (window && window.location && window.location.origin) ||
  'http://localhost:5000'

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData,
})

const httpLink = new HttpLink({
  uri: `${HOST}/graphql`,
  credentials: 'include',
  fetch,
})

const authLink = setContext((_, {headers}) => {
  return {
    headers: {
      ...headers,
      ...csrf(),
      Accept: 'application/json',
    },
  }
})

const hasSubscriptionOperation = ({query: {definitions}}) => {
  return definitions.some(
    ({kind, operation}) =>
      kind === 'OperationDefinition' && operation === 'subscription'
  )
}

const link = ApolloLink.split(
  hasSubscriptionOperation,
  new ActionCableLink({cable}),
  httpLink
)

const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'network-only',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'network-only',
    errorPolicy: 'all',
  },
  mutate: {
    errorPolicy: 'all',
  },
}

const cache = new InMemoryCache({
  fragmentMatcher,
})

export const client = new ApolloClient({
  link: authLink.concat(link),
  cache: cache,
  defaultOptions,
})

export {default as subscribe} from './buildSubscriptionRender'
export {HOST as host}

export default client
