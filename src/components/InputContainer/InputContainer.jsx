import { useState } from "react";

const InputContainer = ({ addTask }) => {
  const [value, setValue] = useState("");

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
        className="w-full rounded-md bg-white px-8 py-5 caret-purple-600 focus:ring-3 focus:ring-purple-600 focus:outline-none"
      />
    </div>
  );
};

export default InputContainer;
