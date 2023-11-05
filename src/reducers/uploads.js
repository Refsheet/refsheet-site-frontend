import {createReducer} from '@refsheet/reducers/index'

function willOpenModal() {
  // Prevent clobbering the lightbox:
  return !document.getElementById('lightbox-v2')
}

export const ENQUEUE_UPLOADS = "ENQUEUE_UPLOADS";
export const CLEAR_UPLOAD = "CLEAR_UPLOAD";
export const CLEAR_ALL_UPLOADS = "CLEAR_ALL_UPLOADS";
export const MODIFY_UPLOAD = "MODIFY_UPLOAD";
export const OPEN_UPLOAD_MODAL = "OPEN_UPLOAD_MODAL";
export const CLOSE_UPLOAD_MODAL = "CLOSE_UPLOAD_MODAL";
export const SET_UPLOAD_TARGET = "SET_UPLOAD_TARGET";
export const DISABLE_DROPZONE = "DISABLE_DROPZONE";
export const ENABLE_DROPZONE = "ENABLE_DROPZONE";

const handlers = {
  [ENQUEUE_UPLOADS]: (state, action) => ({
    ...state,
    files: [...state.files, ...action.files],
    selectedIndex: 0,
    modalOpen: willOpenModal(),
  }),

  [CLEAR_UPLOAD]: (state, action) => {
    let selectedIndex = state.selectedIndex

    const files = state.files.filter(f => f.id !== action.fileId)

    if (files.length <= selectedIndex) selectedIndex = files.length - 1

    return {
      ...state,
      files: files,
      selectedIndex,
    }
  },

  [CLEAR_ALL_UPLOADS]: (state, action) => {
    return {
      ...state,
      files: [],
      selectedIndex: null,
    }
  },

  [MODIFY_UPLOAD]: (state, {file}) => {
    let files = state.files
    let fileIndex = state.files.findIndex(i => i.id === file.id)

    if (fileIndex !== -1) {
      const fields = (({nsfw, title, hidden}) => ({nsfw, title, hidden}))(
        file
      )
      files[fileIndex] = Object.assign(files[fileIndex], fields)
    }

    return {
      ...state,
      files: files,
    }
  },

  [OPEN_UPLOAD_MODAL]: (state, action) => {
    let selectedIndex = state.files.findIndex(
      file => file.id === state.uploadId
    )

    return {
      ...state,
      modalOpen: true,
      selectedIndex,
      characterId: action.characterId || state.characterId,
      uploadCallback: action.uploadCallback || state.uploadCallback,
    }
  },

  [CLOSE_UPLOAD_MODAL]: (state, action) => {
    return {
      ...state,
      modalOpen: false,
      selectedIndex: null,
    }
  },

  [SET_UPLOAD_TARGET]: (state, action) => {
    return {
      ...state,
      characterId: action.characterId,
      uploadCallback: action.uploadCallback,
    }
  },

  [DISABLE_DROPZONE]: state => {
    return {
      ...state,
      dropzoneDisabled: true,
    }
  },

  [ENABLE_DROPZONE]: state => {
    return {
      ...state,
      dropzoneDisabled: false,
    }
  },
}

export default createReducer({}, handlers)
