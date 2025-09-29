import moonIcon from "../../assets/icon-moon.svg";

const MainContainer = ({ children }) => {
  return (
    <div className="bg-light-mobile min-h-screen bg-[#e4e5f1ff] font-[Josefin_Sans]">
      <div className="flex items-center justify-between px-10 pt-10">
        <h1 className="text-4xl font-semibold tracking-[0.6rem] text-white">
          TODO
        </h1>
        <button className="cursor-pointer">
          <img src={moonIcon} alt="Mudar Tema" className="h-8 w-8" />
        </button>
      </div>
      {children}
    </div>
  );
};

export default MainContainer;
