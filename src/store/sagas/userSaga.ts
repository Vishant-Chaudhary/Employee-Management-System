import { all, call, put, takeLatest } from "redux-saga/effects";
import axiosClient from "../../api/axiosClient";
import { loginFailure, loginRequest, loginSuccess } from "../userSlice";


function* handleLogin(action: any): any {
    try {
        const { email, password } = action.payload;

        const [adminRes, empRes] = yield all([
            call(axiosClient.get, "/admin"),
            call(axiosClient.get, "/employees"),
        ]);

        const admin = adminRes.data.find((a: any) => a.email === email && a.password === password);
        if (admin) {
            yield put(loginSuccess({ user: admin, role: "admin" }));
            return;
        }

        const employee = empRes.data.find((e: any) => e.email === email && e.password === password);
        if (employee) {
            yield put(loginSuccess({ user: employee, role: "employee" }));
            return;
        }

        yield put(loginFailure("Invalid credentials"));
    } catch (error) {
        yield put(loginFailure("Login failed"));
    }
}

export default function* userSaga() {
    yield takeLatest(loginRequest.type, handleLogin);
}