import { call, put, takeLatest } from "redux-saga/effects";
import axiosClient from "../../api/axiosClient";
import { addTaskSuccess, updateTaskSuccess } from "../employeeSlice";
import { v4 as uuidv4 } from "uuid";


function* handleAddTask(action: any): any {
    try {
        const { employeeId, task } = action.payload;
        const taskWithId = { ...task, id: uuidv4() };

        const res = yield call(axiosClient.get, `/employees/${employeeId}`);
        const employee = res.data;


        const updatedTasks = employee.tasks ? [...employee.tasks, taskWithId] : [taskWithId];


        yield call(axiosClient.patch, `/employees/${employeeId}`, { tasks: updatedTasks });

        yield put(addTaskSuccess({ employeeId, task: taskWithId }));
    } catch (err) {
        console.error(err);
    }
}


function* handleUpdateTask(action: any): any {
    try {
        const { employeeId, taskId, updates } = action.payload;
        const res = yield call(axiosClient.get, `/employees/${employeeId}`);
        const employee = res.data;

        const updatedTasks = employee.tasks.map((t: any) =>
            t.id === taskId ? { ...t, ...updates } : t
        );

        yield call(axiosClient.patch, `/employees/${employeeId}`, { tasks: updatedTasks });

        yield put(updateTaskSuccess({ employeeId, taskId, updates }));
    } catch (err) {
        console.error(err);
    }
}

export default function* taskSaga() {
    yield takeLatest("tasks/addTaskRequest", handleAddTask);
    yield takeLatest("tasks/updateTaskRequest", handleUpdateTask);
}
