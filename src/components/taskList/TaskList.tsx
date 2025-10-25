import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import NewTask from "./NewTask";
import AcceptTask from "./AcceptTask";
import CompletedTask from "./CompletedTask";
import FailedTask from "./FailedTask";

const TaskList = () => {
  const { user } = useSelector((state: RootState) => state.user);
  const { data } = useSelector((state: RootState) => state.employees);

  const employee = data.find(e => e.id === user?.id);
  if (!employee || !Array.isArray(employee.tasks)) {
    return (
      <p className="text-center text-emerald-700 font-medium mt-6">
        No tasks found for {user?.name || "employee"}.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
      {employee.tasks.filter(t => t && t.newTask).map(t => (
        <NewTask key={t.id} task={t} employeeId={employee.id} />
      ))}
      {employee.tasks.filter(t => t && t.active).map(t => (
        <AcceptTask key={t.id} task={t} employeeId={employee.id} />
      ))}
      {employee.tasks.filter(t => t && t.completed).map(t => (
        <CompletedTask key={t.id} task={t} />
      ))}
      {employee.tasks.filter(t => t && t.failed).map(t => (
        <FailedTask key={t.id} task={t} employeeId={employee.id} />
      ))}
    </div>
  );
};

export default TaskList;
