import { ISearch } from "./../../utils/commonType";
import { AxiosError } from "axios";
import { IVillaType } from "./types";
export const LOADING_DATA_START = "search/LOADING_DATA" as const;
export const LOADING_DATA_SUCCESS = "search/LOADING_DATA_SUCCESS" as const;
export const LOADING_DATA_ERROR = "search/LOADING_DATA_ERROR" as const;

export const loadingDataStart = (params: ISearch) => ({
    type: LOADING_DATA_START,
    payload: params,
});
export const loadingDataSuccess = (data: IVillaType[]) => ({
    type: LOADING_DATA_SUCCESS,
    payload: data,
});
export const loadingDataError = (error: AxiosError) => ({
    type: LOADING_DATA_ERROR,
    payload: error,
});

export type GetSearchDataActionsType =
    | ReturnType<typeof loadingDataStart>
    | ReturnType<typeof loadingDataSuccess>
    | ReturnType<typeof loadingDataError>;
