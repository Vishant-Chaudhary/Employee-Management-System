import { call, put, takeLatest } from "redux-saga/effects";
import axiosClient from "../../api/axiosClient";
import { fetchEmployeeFailure, fetchEmployeesRequest, fetchEmployeesSuccess } from "../employeeSlice";




function* fetchEmployees(): any {
    try {
        const res = yield call(axiosClient.get, "/employees");
        yield put(fetchEmployeesSuccess(res.data));
    } catch (error) {
        yield put(fetchEmployeeFailure());
    }
}

export default function* employeeSaga(): any {
    yield takeLatest(fetchEmployeesRequest.type, fetchEmployees)
}