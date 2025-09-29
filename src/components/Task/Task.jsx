import iconCross from "../../assets/icon-cross.svg";
import iconCheck from "../../assets/icon-check.svg";
import { useTheme } from "../../contexts/ThemeContext";

const Task = ({ task, onToggle, onDelete }) => {
  const { theme } = useTheme();

  return (
    <div
      className={`relative flex items-center gap-5 border-b ${theme === "light" ? "border-gray-300" : "border-[#5c5f7fff]"} py-3`}
    >
      <div
        className={`flex h-6 w-6 rounded-full ${theme === "light" ? "bg-[#c9cacf]" : "bg-[#5c5f7fff]"} p-[1px] hover:bg-gradient-to-b hover:from-[#57ddffff] hover:to-[#c058f3ff]`}
      >
        <button
          onClick={() => onToggle(task.id)}
          className={`flex h-full w-full cursor-pointer items-center justify-center rounded-full ${
            task.completed
              ? "bg-gradient-to-b from-[#57ddffff] to-[#c058f3ff]"
              : theme === "light"
                ? "bg-white"
                : "bg-[#25273cff]"
          }`}
        >
          {task.completed && (
            <img src={iconCheck} alt="Tarefa Concluída" className="h-3 w-3" />
          )}
        </button>
      </div>

      <h2
        className={`${
          task.completed
            ? "text-gray-400 line-through"
            : theme === "light"
              ? "text-[#484b6aff]"
              : "text-[#cacde8ff]"
        }`}
      >
        {task.text}
      </h2>
      <button
        onClick={() => onDelete(task.id)}
        className="absolute right-0 cursor-pointer"
      >
        <img src={iconCross} alt="Apagar Tarefa" />
      </button>
    </div>
  );
};

export default Task;
