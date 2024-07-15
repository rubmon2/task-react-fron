import { useContext } from "react";
import { TaskContext } from "../context/taskcontext";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  const valor = useContext(TaskContext);
  console.log(valor);

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className="text-gray-500 text-sm">{task.description}</p>
      <button
        className="bg-red-500 px-2 py-1 rounded-none hover:bg-red-800 float-right"
        onClick={() => deleteTask(task.id)}
      >
        Eliminar tarea
      </button>
    </div>
  );
}

export default TaskCard;
