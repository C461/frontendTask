import TaskItem from "./TaskItem";
import { useTask } from "../context/UseTask";

function TaskList() {
  const { tasks } = useTask();

  return (
    <div>
      {tasks.map((task) => (
        <TaskItem task={task} key={task._id} />
      ))}
    </div>
  );
}

export default TaskList;