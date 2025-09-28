const InputContainer = () => {
  return (
    <div className="mt-10 flex w-full justify-center">
      <div className="relative w-[90%] max-w-xl">
        <div className="absolute inset-y-0 left-4 flex items-center">
          <div className="h-6 w-6 cursor-pointer rounded-full border border-[#e4e5f1ff] bg-white"></div>
        </div>
        <input
          type="text"
          placeholder="Criar uma nova tarefa..."
          className="w-full rounded-md bg-white py-5 pl-14 caret-purple-600 focus:ring-3 focus:ring-purple-600 focus:outline-none"
        />
      </div>
    </div>
  );
};

export default InputContainer;
