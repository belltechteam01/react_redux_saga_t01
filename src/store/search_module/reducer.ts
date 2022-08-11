import { IVillaType } from "./types";
import {
    GetSearchDataActionsType,
    LOADING_DATA_START,
    LOADING_DATA_SUCCESS,
    LOADING_DATA_ERROR,
} from "./actions";

import { AxiosError } from "axios";

type State = {
    loading: boolean;
    data: IVillaType[] | null;
    error: AxiosError | null;
};

const initialState: State = {
    loading: false,
    data: null,
    error: null,
};

function search_villas(
    state: State = initialState,
    action: GetSearchDataActionsType
): State {
    switch (action.type) {
        case LOADING_DATA_START:
            return {
                ...state,
                loading: true,
            };
        case LOADING_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        case LOADING_DATA_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}

export default search_villas;
