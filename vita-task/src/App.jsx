import TaskForm from "./components/taskform";
import Tasklist from "./components/tasklist";

function app() {
  return (
    <main className="bg-zinc-900 h-screen">
      <div>
        <TaskForm /* createTask={createTask} */ />
        <Tasklist /* tasks={tasks} deleteTask={deleteTask} */ />
      </div>
    </main>
  );
}

export default app;
