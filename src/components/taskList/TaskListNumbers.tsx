import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";

const TaskListNumbers = () => {
  const { user } = useSelector((state: RootState) => state.user);
  const { data } = useSelector((state: RootState) => state.employees);
  const employee = data.find(e => e.id === user?.id);

  if (!employee || !Array.isArray(employee.tasks)) {
    return (
      <p className="text-center text-emerald-700 font-medium py-10">
        No task data available for {user?.name || "Employee"} yet.
      </p>
    );
  }

  type TaskStatus = "newTask" | "active" | "completed" | "failed";

  const countTasks = (type: TaskStatus) => employee?.tasks.filter(t => t && t[type]).length || 0;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
      <div className="p-6 rounded-lg shadow-md bg-emerald-100 text-gray-800">
        <h2 className="text-3xl font-bold">{countTasks("newTask")}</h2>
        <h3 className="text-lg mt-2">New Task</h3>
      </div>
      <div className="p-6 rounded-lg shadow-md bg-blue-100 text-gray-800">
        <h2 className="text-3xl font-bold">{countTasks("completed")}</h2>
        <h3 className="text-lg mt-2">Completed Task</h3>
      </div>
      <div className="p-6 rounded-lg shadow-md bg-yellow-100 text-gray-800">
        <h2 className="text-3xl font-bold">{countTasks("active")}</h2>
        <h3 className="text-lg mt-2">Accepted Task</h3>
      </div>
      <div className="p-6 rounded-lg shadow-md bg-red-100 text-gray-800">
        <h2 className="text-3xl font-bold">{countTasks("failed")}</h2>
        <h3 className="text-lg mt-2">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;
