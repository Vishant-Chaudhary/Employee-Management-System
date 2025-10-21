import AcceptTask from "./AcceptTask"
import CompletedTask from "./CompletedTask"
import FailedTask from "./FailedTask"
import NewTask from "./NewTask"


const TaskList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        <NewTask />
        <AcceptTask />
        <CompletedTask />
        <FailedTask />
    </div>
  )
}

export default TaskList