import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import search_villas from "./search_module";
import searchVillasSaga from "./search_module/sagas";

const rootReducer = combineReducers({
    search_villas,
});

export function* rootSaga() {
    yield all([searchVillasSaga()]);
}

export type RootReducerType = ReturnType<typeof rootReducer>;

export default rootReducer;
