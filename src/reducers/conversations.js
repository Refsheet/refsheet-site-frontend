import {createReducer} from '@refsheet/reducers/index'
import defaultState from '@refsheet/components/App/defaultState.json'

export const OPEN_CONVERSATION = "OPEN_CONVERSATION";
export const CLOSE_CONVERSATION = "CLOSE_CONVERSATION";

const handlers = {
  [OPEN_CONVERSATION]: (state, action) => {
    const openConversations = state.openConversations.filter(
      i => i !== action.conversationId
    )

    return {
      ...state,
      openConversations: [...openConversations, action.conversationId],
    }
  },

  [CLOSE_CONVERSATION]: (state, action) => {
    const openConversations = state.openConversations.filter(
      i =>
        i !== action.conversationId &&
        action.conversationId &&
        action.conversationId.username &&
        i.username !== action.conversationId.username
    )

    return {
      ...state,
      openConversations,
    }
  },
}

export default createReducer(defaultState.conversations, handlers)
