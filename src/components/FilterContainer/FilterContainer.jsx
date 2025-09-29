const FilterContainer = () => {
  return (
    <div className="mx-auto mt-5 flex w-[90%] max-w-xl justify-evenly rounded-md bg-white py-4 font-semibold text-gray-500 shadow-lg">
      <button className="cursor-pointer hover:text-[#3a7bfdff]">Todas</button>
      <button className="cursor-pointer hover:text-[#3a7bfdff]">Ativas</button>
      <button className="cursor-pointer hover:text-[#3a7bfdff]">
        Completas
      </button>
    </div>
  );
};

export default FilterContainer;
