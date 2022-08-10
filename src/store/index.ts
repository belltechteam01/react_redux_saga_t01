import { combineReducers } from "redux";
import { all } from "redux-saga/effects";

const rootReducer = combineReducers({
  //main reducers
});

export function* rootSaga() {
  yield all([
    // main sagas
  ]);
}

export type RootReducerType = ReturnType<typeof rootReducer>;

export default rootReducer;
