import { useState } from "react";
import { useTheme } from "../../contexts/ThemeContext";

const InputContainer = ({ addTask }) => {
  const [value, setValue] = useState("");
  const { theme } = useTheme();

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTask(value);
      setValue("");
    }
  };

  return (
    <div className="mx-auto mt-10 w-[90%] max-w-xl">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Criar uma nova tarefa..."
        className={`w-full rounded-md ${theme === "light" ? "bg-white" : "bg-[#25273cff]"} ${theme === "light" ? "text-[#25273cff]" : "text-[#c8cadd]"} px-8 py-5 caret-purple-600 focus:ring-3 focus:ring-purple-600 focus:outline-none`}
      />
    </div>
  );
};

export default InputContainer;
