import {createReducer} from '@refsheet/reducers/index'

export const OPEN_LIGHTBOX = "OPEN_LIGHTBOX";
export const CLOSE_LIGHTBOX = "CLOSE_LIGHTBOX";

const handlers = {
  [OPEN_LIGHTBOX]: (state, action) => {
    let gallery = []

    if (action.gallery) {
      gallery = action.gallery
    }

    return {
      ...state,
      mediaId: action.mediaId,
      gallery,
    }
  },
  [CLOSE_LIGHTBOX]: state => ({...state, mediaId: null}),
}

export default createReducer({}, handlers)
