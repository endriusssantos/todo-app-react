const InputContainer = () => {
  return (
    <div className="mx-auto mt-10 w-[90%] max-w-xl">
      <input
        type="text"
        placeholder="Criar uma nova tarefa..."
        className="w-full rounded-md bg-white px-8 py-5 caret-purple-600 focus:ring-3 focus:ring-purple-600 focus:outline-none"
      />
    </div>
  );
};

export default InputContainer;
