import { ChangeEvent, FormEvent, useState } from "react";
import { useTask } from "../context/UseTask";

function TaskForm() {
  const [task, setTask] = useState({
    title: "",
    description: "",
    done: false,
  });

  const { createTask } = useTask();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createTask(task);

    const form = e.target as HTMLFormElement;
    form.reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          className="border-2 border-gray-700 p-2 rounded-lg bg-zinc-800 block w-full my-2"
          placeholder="write a title"
          onChange={handleChange}
        />
        <textarea
          name="description"
          rows={3}
          className="border-2 border-gray-700 p-2 rounded-lg bg-zinc-800 block w-full my-2"
          placeholder="write a description"
          onChange={handleChange}
        ></textarea>
        <label htmlFor="" className="inline-flex items-center gap-x-2 w-full ">
          <input
            type="checkbox"
            className="h-5 w-5 bg-indigo-500"
            onChange={() => setTask({ ...task, done: !task.done })}
          />
          <span>Done</span>
        </label>
        <button className="bg-indigo-500 w-full px-3 py-2 block rounded-md">
          Save
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
