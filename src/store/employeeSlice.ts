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
} = employeeSlice.actions;

export default employeeSlice.reducer;