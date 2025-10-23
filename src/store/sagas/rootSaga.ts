import { all, fork } from "redux-saga/effects";
import userSaga from "./userSaga";
import employeeSaga from "./employeeSaga";
import taskSaga from "./taskSaga";


export default function* rootSaga() {
    yield all([fork(userSaga), fork(employeeSaga), fork(taskSaga)]);
}