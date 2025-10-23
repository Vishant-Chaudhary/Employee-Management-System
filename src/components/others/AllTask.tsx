import type { Employee } from "../model/Interface"; 

interface AllTaskProps {
    employees: Employee[];
}

const AllTask: React.FC<AllTaskProps> = ({ employees }) => {

    return (
        <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-emerald-700 mb-4">
                All Tasks Overview
            </h2>
            <div className="overflow-x-auto">
                <div className="grid grid-cols-5 bg-emerald-600 text-white font-semibold py-2 px-4 rounded-t-md">
                    <h5>Employee Name</h5>
                    <h5>New Task</h5>
                    <h5>Active Task</h5>
                    <h5>Completed</h5>
                    <h5>Failed</h5>
                </div>

                {employees.map((emp) => (
                    <div
                        key={emp.id}
                        className="grid grid-cols-5 py-2 px-4 border-b border-gray-200 hover:bg-emerald-50 transition"
                    >
                        <h5 className="font-medium text-gray-800">{emp.name}</h5>
                        <h5 className="text-blue-600 font-medium">{emp.taskCount.newTask}</h5>
                        <h5 className="text-amber-600 font-medium">{emp.taskCount.active}</h5>
                        <h5 className="text-emerald-600 font-semibold">{emp.taskCount.completed}</h5>
                        <h5 className="text-red-500 font-semibold">{emp.taskCount.failed}</h5>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AllTask;
