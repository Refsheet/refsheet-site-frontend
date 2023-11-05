import {ApolloClient, ApolloLink, HttpLink} from '@apollo/client'
import {setContext} from '@apollo/client/link/context'
import {InMemoryCache,} from '@apollo/client/cache'
import ActionCableLink from 'graphql-ruby-client/subscriptions/ActionCableLink'
import introspectionQueryResultData from '@refsheet/config/possibleTypes.json'
import Cookies from 'js-cookie'

// https://github.com/rails/rails/pull/39543#issuecomment-639804635
// Package maintainers have the right to maintain their package however they please, but @rails/actioncable
// is not a small package and community feedback as well as currently accepted best practices should be taken
// into account here. Just because it's a no-op on a server doesn't mean you should assume it won't be run there.

let cable = null;

if (typeof window !== 'undefined') {
  const {createConsumer} = require('@rails/actioncable');
  cable = createConsumer();
}

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
  possibleTypes: introspectionQueryResultData,
})

export const client = new ApolloClient({
  link: authLink.concat(link),
  cache: cache,
  defaultOptions,
})

export {default as subscribe} from './buildSubscriptionRender'
export {HOST as host}

export default client
