import moonIcon from "../../assets/icon-moon.svg";
import sunIcon from "../../assets/icon-sun.svg";
import { useTheme } from "../../contexts/ThemeContext";

const MainContainer = ({ children }) => {
  const { theme, toggleTheme } = useTheme();

  const bgClass =
    theme === "light"
      ? "bg-light-responsive bg-[#fafafaff]"
      : "bg-dark-responsive bg-[#161722ff]";

  return (
    <div className={`${bgClass} min-h-screen pb-5 font-[Josefin_Sans]`}>
      <div className="flex items-center justify-between px-10 pt-10">
        <h1 className={`text-4xl font-semibold tracking-[0.6rem] text-white`}>
          TODO
        </h1>
        <button className="cursor-pointer" onClick={toggleTheme}>
          <img
            src={`${theme === "light" ? moonIcon : sunIcon}`}
            alt="Mudar Tema"
            className="h-8 w-8"
          />
        </button>
      </div>
      {children}
    </div>
  );
};

export default MainContainer;
