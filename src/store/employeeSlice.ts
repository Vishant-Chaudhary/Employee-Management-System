import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Employee, EmployeeState, Task } from "../components/model/Interface";

const initialState: EmployeeState = {
    data: [],
    loading: false,
};


export const employeeSlice = createSlice({
    name: "employees",
    initialState,
    reducers: {
        fetchEmployeesRequest(state) {
            state.loading = true;
        },
        fetchEmployeesSuccess(state, action: PayloadAction<Employee[]>) {
            state.data = action.payload;
            state.loading = false;
        },
        fetchEmployeesFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
        addTaskSuccess(state, action: PayloadAction<{ employeeId: string; task: Task }>) {
            const emp = state.data.find(e => e.id === action.payload.employeeId);
            if (emp) emp.tasks.push(action.payload.task);
        },
        updateTaskSuccess(state, action: PayloadAction<{ employeeId: string; taskId: string; updates: Partial<Task> }>) {
            const emp = state.data.find(e => e.id === action.payload.employeeId);
            if (!emp) return;
            const taskIndex = emp.tasks.findIndex(t => t.id === action.payload.taskId);
            if (taskIndex === -1) return;
            emp.tasks[taskIndex] = { ...emp.tasks[taskIndex], ...action.payload.updates };
        },
    },
});

export const {
    fetchEmployeesRequest,
    fetchEmployeesSuccess,
    fetchEmployeesFailure,
    addTaskSuccess,
    updateTaskSuccess,
} = employeeSlice.actions;

export default employeeSlice.reducer;