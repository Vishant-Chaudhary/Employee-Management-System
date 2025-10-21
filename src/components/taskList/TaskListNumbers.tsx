

const TaskListNumbers = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
      <div className="p-6 rounded-lg shadow-md bg-emerald-100 text-gray-800">
        <h2 className="text-3xl font-bold">1</h2>
        <h3 className="text-lg mt-2">New Task</h3>
      </div>

      <div className="p-6 rounded-lg shadow-md bg-blue-100 text-gray-800">
        <h2 className="text-3xl font-bold">2</h2>
        <h3 className="text-lg mt-2">Completed Task</h3>
      </div>

      <div className="p-6 rounded-lg shadow-md bg-yellow-100 text-gray-800">
        <h2 className="text-3xl font-bold">3</h2>
        <h3 className="text-lg mt-2">Accepted Task</h3>
      </div>

      <div className="p-6 rounded-lg shadow-md bg-red-100 text-gray-800">
        <h2 className="text-3xl font-bold">0</h2>
        <h3 className="text-lg mt-2">Failed Task</h3>
      </div>
    </div>
  )
}

export default TaskListNumbers