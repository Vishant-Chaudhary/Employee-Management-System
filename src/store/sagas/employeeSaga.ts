import { call, put, takeLatest } from "redux-saga/effects";
import axiosClient from "../../api/axiosClient";
import { fetchEmployeesFailure, fetchEmployeesRequest, fetchEmployeesSuccess } from "../employeeSlice";


function getTaskCount(tasks: any[]) {
    return {
        newTask: tasks.filter(t => t && t.newTask).length,
        active: tasks.filter(t => t && t.active).length,
        completed: tasks.filter(t => t && t.completed).length,
        failed: tasks.filter(t => t && t.failed).length,
    };
}


function* fetchEmployeesSaga(): any {
    try {
        console.log("Saga triggered");
        const res = yield call(axiosClient.get, "/employees");
        console.log("Employees API response:", res);

        const processed = res.data.map((emp: any) => ({
            ...emp,
            taskCount: getTaskCount(emp.tasks || []),
        }));
        console.log("Processed data:", processed);
        yield put(fetchEmployeesSuccess(processed));
        console.log("Fetch success dispatched");
    } catch (error) {
        console.error("Employee saga error caught:", error);
        yield put(fetchEmployeesFailure("Failed to fetch employees"));
    }
}

export default function* employeeSaga() {
    yield takeLatest(fetchEmployeesRequest.type, fetchEmployeesSaga);
}