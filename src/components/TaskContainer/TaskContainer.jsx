import Task from "../Task/Task";

const TaskContainer = () => {
  return (
    <div className="mx-auto mt-10 w-[90%] max-w-xl rounded-md bg-white px-8 pt-2 pb-7 shadow-lg">
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <div className="flex justify-between pt-5 text-gray-500">
        <h3>5 Tarefas Restantes</h3>
        <button>Limpar Completas</button>
      </div>
    </div>
  );
};

export default TaskContainer;
