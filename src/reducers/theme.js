import {createReducer} from '@refsheet/reducers/index'

export const SET_THEME_NAME = "SET_THEME_NAME";
export const SET_THEME_SETTINGS = "SET_THEME_SETTINGS";

const handlers = {
  [SET_THEME_NAME]: (state, action) => {
    return {
      ...state,
      name: action.name,
    }
  },
  [SET_THEME_SETTINGS]: (state, action) => {
    const newState = {
      ...state,
      ...action.settings,
    }

    console.log({newState})
    return newState
  },
}

export default createReducer({}, handlers)
