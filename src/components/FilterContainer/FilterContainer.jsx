import { useTheme } from "../../contexts/ThemeContext";

const FilterContainer = ({ setFilter, filter }) => {
  const baseClass = "cursor-pointer hover:text-[#3a7bfdff]";
  const activeClass = "text-[#3a7bfdff] border-b-2 border-[#3a7bfdff]";

  const { theme } = useTheme();

  return (
    <div
      className={`mx-auto mt-5 flex w-[90%] max-w-xl justify-evenly rounded-md ${theme === "light" ? "bg-white" : "bg-[#25273cff]"} py-4 font-semibold text-gray-500 shadow-lg`}
    >
      <button
        onClick={() => setFilter("all")}
        className={`${baseClass} ${filter === "all" ? activeClass : ""}`}
      >
        Todas
      </button>
      <button
        onClick={() => setFilter("active")}
        className={`${baseClass} ${filter === "active" ? activeClass : ""}`}
      >
        Ativas
      </button>
      <button
        onClick={() => setFilter("completed")}
        className={`${baseClass} ${filter === "completed" ? activeClass : ""}`}
      >
        Completas
      </button>
    </div>
  );
};

export default FilterContainer;
