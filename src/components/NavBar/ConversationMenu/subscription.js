import {subscribe} from 'services/ApplicationService'
import {loader} from 'graphql.macro'

const getConversations = loader('./getConversations.graphql');
const subscribeToConversations = loader('./subscribeToConversations.graphql');

const mapDataToProps = data => ({
  conversations: data.getConversations,
})

const updateQuery = (prev, data) => {
  const {newConversation} = data

  return {
    ...prev,
    getConversations: [...prev.getConversations, newConversation],
  }
}

export default subscribe({
  query: getConversations,
  subscription: subscribeToConversations,
  mapDataToProps,
  updateQuery,
})
