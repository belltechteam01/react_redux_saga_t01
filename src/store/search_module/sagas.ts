import { ISearch } from "./../../utils/commonType";
import {
    loadingDataSuccess,
    loadingDataError,
    LOADING_DATA_START,
} from "./actions";
import { AxiosError } from "axios";
import { call, delay, put, takeLatest } from "redux-saga/effects";

import { IVillaType } from "./types";
import { getData } from "../../utils/api";

function* getVillaData(payload: ISearch) {
    try {
        const data: IVillaType[] = yield call(getData, payload);
        yield delay(1000);
        yield put(loadingDataSuccess(data));
    } catch (e) {
        yield put(loadingDataError(e as AxiosError));
    }
}

export function* searchVillasSaga() {
    yield takeLatest(LOADING_DATA_START, getVillaData);
}
