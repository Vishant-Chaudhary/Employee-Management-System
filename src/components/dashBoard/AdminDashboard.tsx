
import Header from "../others/Header"
import CreateTask from "../others/CreateTask"
import AllTask from "../others/AllTask"
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../store/store";
import { useEffect } from "react";
import { fetchEmployeesRequest } from "../../store/employeeSlice";



const AdminDashboard = () => {

    const dispatch = useDispatch<AppDispatch>();
    const { data, loading } = useSelector((state: RootState) => state.employees);


    useEffect(() => {
        dispatch(fetchEmployeesRequest());
    }, [dispatch]);


    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <main className="max-w-7xl mx-auto px-6 py-8 space-y-8">
                <CreateTask />
                {loading ? (
                    <p className="text-center text-emerald-600">Loading employees...</p>
                ) : (
                    <AllTask employees={data} />
                )}
            </main>
        </div>
    )
}

export default AdminDashboard