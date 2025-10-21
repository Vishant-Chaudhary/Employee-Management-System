const AllTask = () => {
    const data = [
        { name: "Vishant", new: 1, active: 1, completed: 1, failed: 0 },
        { name: "Riya", new: 2, active: 1, completed: 3, failed: 1 },
        { name: "Arjun", new: 1, active: 2, completed: 0, failed: 1 },
        { name: "Sneha", new: 3, active: 2, completed: 2, failed: 0 },
    ];

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

                {data.map((emp, i) => (
                    <div
                        key={i}
                        className="grid grid-cols-5 py-2 px-4 border-b border-gray-200 hover:bg-emerald-50 transition"
                    >
                        <h5 className="font-medium text-gray-800">{emp.name}</h5>
                        <h5 className="text-blue-600 font-medium">{emp.new}</h5>
                        <h5 className="text-amber-600 font-medium">{emp.active}</h5>
                        <h5 className="text-emerald-600 font-semibold">{emp.completed}</h5>
                        <h5 className="text-red-500 font-semibold">{emp.failed}</h5>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AllTask;
