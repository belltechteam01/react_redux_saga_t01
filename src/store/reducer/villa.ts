import {
    VILLA_PAGE_LOADED,
    VILLA_PAGE_UNLOADED,
    CREATE_VILLA,
    UPDATE_VILLA,
    READ_VILLA,
    DELETE_VILLA,
} from '../../constants/actionTypes';

import { IState, IAction } from './types';

function villa(state: IState, action: IAction): IState 
{
    let ret: IState = {
        loading: false,
        data: {},
        error_code: 0
    };

    switch (action.type) {
        case VILLA_PAGE_LOADED:
            ret = {
                ...state,
                data: action.payload.data,
            };
            break;
        case VILLA_PAGE_UNLOADED:
            break;
        case CREATE_VILLA:
            break;
        case UPDATE_VILLA:
            break;
        case READ_VILLA:
            break;
        case DELETE_VILLA:
            break;
    }

    return ret;
};

export default villa;
  