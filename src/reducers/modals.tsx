import {createReducer} from './index'

import defaultState from '@refsheet/components/App/defaultState.json'
import {Action} from "redux";

export type TModalName = 'support' | 'newCharacter' | 'report';

export interface IOpenModalAction extends Action {
    type: 'OPEN_MODAL',
    modal: TModalName,
    open: boolean,
    args?: any,
}

export const OPEN_MODAL = 'OPEN_MODAL';

const handlers = {
    [OPEN_MODAL]: (state, action: IOpenModalAction) => {
        return {
            ...state,
            [action.modal]: {
                ...state[action.modal],
                open: action.open,
                args: action.args,
            },
        }
    },
}

export default createReducer(defaultState.modals, handlers)
