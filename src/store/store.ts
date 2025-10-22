import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./employeeSlice"
import userReducer from "./userSlice"
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/rootSaga";


const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        user: userReducer,
        employees: employeeReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;