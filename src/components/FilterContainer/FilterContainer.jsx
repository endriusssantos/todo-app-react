const FilterContainer = () => {
  return (
    <div className="mx-auto mt-5 flex w-[90%] max-w-xl justify-evenly rounded-md bg-white py-4 font-semibold text-gray-500 shadow-lg">
      <button>Todas</button>
      <button>Ativas</button>
      <button>Completas</button>
    </div>
  );
};

export default FilterContainer;
