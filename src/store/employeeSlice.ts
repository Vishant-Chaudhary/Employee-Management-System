import { createSlice } from "@reduxjs/toolkit";
import type { EmployeeState } from "../components/model/Interface";

const initialState: EmployeeState = {
    data: [],
    loading: false,
};


const employeeSlice = createSlice({
    name: "employees",
    initialState,
    reducers: {
        fetchEmployeesRequest: (state) => {
            state.loading = true;
        },
        fetchEmployeesSuccess: (state, action) => {
            state.loading = false;
            state.data = action.payload;
        },
        fetchEmployeeFailure: (state) => {
            state.loading = false;
        },
        addTaskSuccess: (state, action) => {
            const { employeeId, newTask } = action.payload;
            const employee = state.data.find((e) => e.id === employeeId);
            if (employee) {
                employee.tasks.push(newTask);
                employee.taskCount.newTask += 1;
            }
        },
        updateEmployeeRequest: () => { },
        updateEmployeeSuccess: (state, action) => {
            const index = state.data.findIndex((e) => e.id === action.payload.id);
            if (index !== -1) state.data[index] = action.payload;
        },
    },
});

export const {
    fetchEmployeesRequest,
    fetchEmployeesSuccess,
    fetchEmployeeFailure,
    updateEmployeeRequest,
    updateEmployeeSuccess,
    addTaskSuccess,
} = employeeSlice.actions;

export default employeeSlice.reducer;