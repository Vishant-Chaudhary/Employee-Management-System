import { useDispatch } from "react-redux";
import type { Task } from "../model/Interface";


interface Props {
    task: Task;
    employeeId: string;
}

const NewTask: React.FC<Props> = ({ task, employeeId }) => {
    const dispatch = useDispatch();

    const handleAccept = () => {
        dispatch({
            type: "tasks/updateTaskRequest",
            payload: {
                employeeId,
                taskId: task.id,
                updates: { active: true, newTask: false },
            },
        });
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between h-full">
            <div>
                <div className="flex justify-between items-center mb-2">
                    <h3 className="bg-emerald-100 text-emerald-800 py-0.5 px-2 rounded font-semibold">{task.category}</h3>
                    <h4 className="text-sm text-gray-500">{task.date}</h4>
                </div>
                <h2 className="text-xl font-semibold text-gray-900">{task.title}</h2>
                <div className="text-gray-600 mt-2 max-h-24 overflow-y-auto pr-1 scrollbar-hide">{task.description}</div>
            </div>
            <div className="mt-4">
                <button
                    onClick={handleAccept}
                    className="bg-emerald-600 text-white py-2 px-4 rounded-md hover:bg-emerald-700 transition"
                >
                    Accept Task
                </button>
            </div>
        </div>
    );
};

export default NewTask;
