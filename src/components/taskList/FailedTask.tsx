import { useDispatch } from "react-redux";
import type { Task } from "../model/Interface";




interface Props {
  task: Task;
  employeeId: string;
}

const FailedTask: React.FC<Props> = ({ task, employeeId }) => {
  const dispatch = useDispatch();


  const handleRetry = () => {
    dispatch({
      type: "tasks/updateTaskRequest",
      payload: {
        employeeId,
        taskId: task.id,
        updates: { failed: false, active: true, newTask: false, completed: false },
      },
    });
  };

  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
        <div className="flex justify-between items-center mb-2">
          <h3 className="bg-emerald-100 text-emerald-800 py-0.5 px-2 rounded font-semibold">{task.category}</h3>
          <h4 className="text-sm text-gray-500">{task.date}</h4>
        </div>
        <h2 className="text-xl font-semibold text-gray-900">{task.title}</h2>
        <div id="description" className="text-gray-600 mt-2 max-h-24 overflow-y-auto pr-1 scrollbar-hide ">{task.description}</div>
        <div className="mt-4">
          <h1 className="text-red-600 font-semibold text-2xl">Failed</h1>
          <button onClick={handleRetry} className="mt-3 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition">Retry Task</button>
        </div>
      </div>
    </>
  );
};

export default FailedTask;
