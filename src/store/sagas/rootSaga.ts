import { all, fork } from "redux-saga/effects";
import userSaga from "./userSaga";
import employeeSaga from "./employeeSaga";


export default function* rootSaga() {
    yield all([fork(userSaga), fork(employeeSaga)]);
}