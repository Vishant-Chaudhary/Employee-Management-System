import { useDispatch, useSelector } from "react-redux";
import Header from "../others/Header";
import TaskList from "../taskList/TaskList";
import TaskListNumbers from "../taskList/TaskListNumbers";
import type { RootState } from "../../store/store";
import { useEffect } from "react";
import { fetchEmployeesRequest } from "../../store/employeeSlice";

const EmployeeDashboard = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state: RootState) => state.employees);
  const { user } = useSelector((state: RootState) => state.user);


  useEffect(() => {
    if (!data.length) {
      dispatch(fetchEmployeesRequest());
    }
  }, [dispatch, data.length]);

  if (loading) {
    return <p className="text-center text-emerald-600 mt-10">Loading employee data...</p>;
  }

  if (!user) {
    return <p className="text-center text-red-600 mt-10">User not found. Please log in again.</p>;
  }
  return (
    <div className="bg-emerald-50 min-h-screen">
      <Header />
      <div className="px-8 py-4">
        <TaskListNumbers />
        <TaskList />
      </div>
    </div>
  );
};

export default EmployeeDashboard;
