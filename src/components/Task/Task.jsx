import iconCross from "../../assets/icon-cross.svg";

const Task = () => {
  return (
    <div className="relative flex items-center gap-5 border-b border-gray-300 py-3">
      <button className="h-6 w-6 cursor-pointer rounded-full border border-[#e4e5f1ff] bg-white"></button>
      <h2>Task</h2>
      <button className="absolute right-0 cursor-pointer">
        <img src={iconCross} alt="Apagar Tarefa" />
      </button>
    </div>
  );
};

export default Task;
