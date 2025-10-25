import type { Task } from "../model/Interface";

interface Props {
  task: Task;
}

const CompletedTask: React.FC<Props> = ({ task }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex flex-col justify-between h-full">
      <div>
        <div className="flex justify-between items-center mb-2">
          <h3 className="bg-emerald-100 text-emerald-800 py-0.5 px-2 rounded font-semibold">
            {task.category}
          </h3>
          <h4 className="text-sm text-gray-500">{task.date}</h4>
        </div>

        <h2 className="text-xl font-semibold text-gray-900">{task.title}</h2>

        <div className="text-gray-600 mt-2 max-h-24 overflow-y-auto pr-1 scrollbar-hide">
          {task.description}
        </div>
      </div>

      <div className="mt-4 flex justify-between items-center">
        <h1 className="text-emerald-600 font-semibold text-2xl">Completed</h1>
      </div>
    </div>
  );
};

export default CompletedTask;
