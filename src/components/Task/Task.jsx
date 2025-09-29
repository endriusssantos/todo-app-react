import iconCross from "../../assets/icon-cross.svg";
import iconCheck from "../../assets/icon-check.svg";

const Task = ({ task, onToggle, onDelete }) => {
  return (
    <div className="relative flex items-center gap-5 border-b border-gray-300 py-3">
      <div
        className={`flex h-6 w-6 rounded-full bg-[#e4e5f1ff] p-[1px] hover:bg-gradient-to-b hover:from-[#57ddffff] hover:to-[#c058f3ff]`}
      >
        <button
          onClick={() => onToggle(task.id)}
          className={`flex h-full w-full cursor-pointer items-center justify-center rounded-full ${
            task.completed
              ? "bg-gradient-to-b from-[#57ddffff] to-[#c058f3ff]"
              : "bg-white"
          }`}
        >
          {task.completed && (
            <img src={iconCheck} alt="Tarefa Concluída" className="h-3 w-3" />
          )}
        </button>
      </div>

      <h2
        className={`${
          task.completed ? "text-gray-400 line-through" : "text-black"
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
