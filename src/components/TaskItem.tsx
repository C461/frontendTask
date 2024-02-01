import { useTask } from "../context/UseTask";
import { Task } from "../interfaces/task.interface";

interface Props {
  task: Task;
}

function TaskItem({ task }: Props) {
  const { deleteTask, updateTask } = useTask();

  return (
    <div
      key={task._id}
      className="bg-gray-900 p-2 my-2 flex justify-between hover:bg-gray-800 hover:cursor-pointer"
    >
      <div>
        <h1>{task.title}</h1>
        <p>{task.description}</p>
      </div>
      <div className="flex gap-x-2">
        <button onClick={() => {
          updateTask(task._id, {
            done: !task.done
          })
        }} className=" bg-green-500 p-1 rounded-sm">
          Update
        </button>
        <button
          className="bg-red-500 p-1 rounded-sm"
          onClick={async () => {
            if (!window.confirm("Are you sure you want to delete this task?"))
              return;
            await deleteTask(task._id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;