import {subscribe} from '@refsheet/services/ApplicationService'
//graphql.macro
const getConversations = require('./getConversations.graphql');
const subscribeToConversations = require('./subscribeToConversations.graphql');

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
