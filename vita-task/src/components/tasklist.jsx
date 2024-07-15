import TaskCard from "./taskCard";
import { useContext } from "react";
import { TaskContext } from "../context/taskcontext";

function TaskList() {
const { tasks }= useContext(TaskContext)

  if (tasks.length === 0) {
    return (
      <h1 className=" text-white text-center text-4xl font-bold uppercase">
        {" "}
        No hay tareas
      </h1>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task}/>
      ))}
    </div>
  );
}

export default TaskList;
