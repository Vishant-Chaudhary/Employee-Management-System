import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { userState } from "../components/model/Interface";

const initialState: userState = {
    user: null,
    role: null,
    loading: false,
    error: null,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginRequest: (state, _action: PayloadAction<{ email: string; password: string }>) => {
            state.loading = true;
            state.error = null;
        },
        loginSuccess: (state, action) => {
            state.loading = false;
            state.user = action.payload.user;
            state.role = action.payload.role;
            state.error = null;
            localStorage.setItem("userData", JSON.stringify(action.payload));
        },
        loginFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        logout: (state) => {
            state.user = null;
            state.role = null;
            localStorage.removeItem("userData");
        },
    },
});

export const { loginRequest, loginSuccess, loginFailure, logout } = userSlice.actions;
export default userSlice.reducer;