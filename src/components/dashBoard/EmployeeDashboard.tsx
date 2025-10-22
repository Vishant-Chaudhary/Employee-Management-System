import Header from "../others/Header"
import TaskList from "../taskList/TaskList"
import TaskListNumbers from "../taskList/TaskListNumbers"


const EmployeeDashboard = () => {
  return (
    <div className="bg-emerald-50 min-h-screen">
      <Header />
      <div className="px-8 py-4">
        <TaskListNumbers />
        <TaskList />
      </div>
    </div>
  )
}

export default EmployeeDashboard