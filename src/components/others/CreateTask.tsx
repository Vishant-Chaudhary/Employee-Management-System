import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { useState } from "react";





const CreateTask = () => {

    const dispatch = useDispatch();
    const { data: employees } = useSelector((state: RootState) => state.employees);

    const [formData, setFormData] = useState({
        title: "",
        date: "",
        assignedTo: "",
        category: "",
        description: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const employee = employees.find(
            (emp) => emp.name.toLowerCase() === formData.assignedTo.toLowerCase()
        );
        if (!employee) {
            alert("Employee not found");
            return;
        }


        const newTask = {
            title: formData.title,
            description: formData.description,
            date: formData.date,
            category: formData.category,
            active: false,
            newTask: true,
            completed: false,
            failed: false,
        };

        dispatch({
            type: "tasks/addTaskRequest",
            payload: { employeeId: employee.id, newTask },
        });

        setFormData({ title: "", date: "", assignedTo: "", category: "", description: "" });
    };


    return (
        <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-emerald-700 mb-4">Create New Task</h2>
            <form
                onSubmit={handleSubmit}
             className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Task Title</label>
                        <input
                            name="title" 
                            value={formData.title} 
                            onChange={handleChange}
                            type="text"
                            placeholder="Enter task title"
                            className="w-full border border-gray-300 placeholder-gray-400 text-gray-800 rounded-md px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                        <input
                            name="date"
                            value={formData.date} 
                            onChange={handleChange}
                            type="date"
                            className="w-full border border-gray-300  placeholder-gray-400 text-gray-800 rounded-md px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Assign To</label>
                        <input
                            name="assignedTo" 
                            value={formData.assignedTo} 
                            onChange={handleChange}
                            type="text"
                            placeholder="Employee name"
                            className="w-full border border-gray-300  placeholder-gray-400 text-gray-800 rounded-md px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                        <input
                            name="category" 
                            value={formData.category} 
                            onChange={handleChange}
                            type="text"
                            placeholder="design, dev, etc"
                            className="w-full border border-gray-300  placeholder-gray-400 text-gray-800 rounded-md px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                        />
                    </div>
                </div>

                <div className="flex flex-col">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Task details..."
                        className="w-full border border-gray-300  placeholder-gray-400 text-gray-800 rounded-md px-3 py-2 h-40 resize-none focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    ></textarea>

                    <button
                        type="submit"
                        className="mt-4 bg-emerald-600 text-white font-semibold py-2 rounded-md hover:bg-emerald-700 transition"
                    >
                        Create Task
                    </button>
                </div>
            </form>
        </section>
    );
};

export default CreateTask;