import { call, put, takeLatest } from "redux-saga/effects";
import axiosClient from "../../api/axiosClient";
import { addTaskSuccess } from "../employeeSlice";


function* handleAddTask(action: any): any {
    try {
        const { employeeId, newTask } = action.payload;
        const res = yield call(axiosClient.get, `/employees/${employeeId}`);
        const employee = res.data;

        const updatedEmployee = {
            ...employee,
            tasks: [...employee.tasks, newTask],
            taskCount: {
                ...employee.taskCount,
                newTask: employee.taskCount.newTask + 1,
            },
        };

        yield call(axiosClient.patch, `/employees/${employeeId}`, updatedEmployee);

        yield put(addTaskSuccess({ employeeId, newTask }));
    } catch (err) {
        console.error("Add task failed", err);
    }
}

export default function* taskSaga() {
    yield takeLatest("tasks/addTaskRequest", handleAddTask);
}
