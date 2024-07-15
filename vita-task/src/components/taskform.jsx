import { useContext, useState } from "react";
import { TaskContext } from "../context/taskcontext";

function TaskForm(/* {createTask} */) {
  const { createTask } = useContext(TaskContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    /*   console.log(title, description) */
    /* const newtask={
  title
}

createTask(newtask)
 */
    createTask({ title, description });
  };

  return (
    <div className="max-w-md mx-auto">
      <form className="bg-zinc-800 p-10 mb-4" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold text-white mb-3">Crea tu Tarea</h1>
        <input
          className="bg-slate-300  px-3 w-full mb-2"
          placeholder="Escribe tu tarea"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          className="bg-slate-300  px-3 w-full mb-2"
          placeholder="Escribe tu descripcion"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white float-right hover:bg-indigo-700">
          Guardar
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
