import { ISearch } from "./../../utils/commonType";
import {
    loadingDataSuccess,
    loadingDataError,
    LOADING_DATA_START,
} from "./actions";
import { AxiosError } from "axios";
import { all, call, delay, fork, put, takeLatest } from "redux-saga/effects";

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

export function* middleGetVillaData() {
    yield takeLatest(LOADING_DATA_START, getVillaData);
}

export default function* searchVillasSaga() {
    yield all([fork(middleGetVillaData)]);
}
