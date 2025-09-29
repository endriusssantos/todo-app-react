import { useTheme } from "../../contexts/ThemeContext";
import Task from "../Task/Task";

const TaskContainer = ({ tasks, onToggle, onDelete, filter }) => {
  const { theme } = useTheme();

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
  });

  return (
    <div
      className={`mx-auto mt-10 w-[90%] max-w-xl rounded-md ${theme === "light" ? "bg-white" : "bg-[#25273cff]"} px-8 pt-2 pb-7 shadow-lg`}
    >
      {filteredTasks.length === 0 ? (
        <p className="border-b border-gray-300 p-4 text-gray-500">
          Nenhuma Tarefa Ainda
        </p>
      ) : (
        <ul>
          {filteredTasks.map((task) => (
            <li key={task.id}>
              <Task task={task} onToggle={onToggle} onDelete={onDelete} />
            </li>
          ))}
        </ul>
      )}
      <div className="flex justify-between pt-5 text-gray-500">
        <h3>{tasks.filter((t) => !t.completed).length} Tarefas Restantes</h3>
        <button
          className="cursor-pointer hover:text-[#3a7bfdff]"
          onClick={() => onDelete("completed")}
        >
          Limpar Completas
        </button>
      </div>
    </div>
  );
};

export default TaskContainer;
