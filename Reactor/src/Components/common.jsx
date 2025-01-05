import { useState, useEffect } from "react";

const Common = () => {
  const [clicked, setClicked] = useState(false);
  const [clickedMode, setClickedMode] = useState(false);
  const [theme, setTheme] = useState("dark-mode");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <>
      <div className="fixed top-[47%] right-0 z-50">
        <button
          onClick={() => {
            clicked ? setClicked(false) : setClicked(true);
          }}
          className="cursor-pointer  text-[var(--font-color)] ml-[48px] relative z-50 mb-[-10px] bg-[#ff9800]  text-[20px] py-[8px] px-[12px] border-none outline-none"
        >
          <i className="sppining-icon fa-solid fa-gear"></i>
        </button>
        <div
          className={`bg-[#ff9800] absolute light-and-dark-mode ${
            theme === "light-mode" ? "opacity-100" : "opacity-80"
          } py-[8px] px-[12px] flex items-center gap-2 ${
            clicked ? "show" : "hide"
          }`}
        >
          <img
            src="/public/Images/dark-mode.png"
            alt=""
            width="25"
            id="modeIcon"
          />
          <input type="checkbox" id="mode" />

          <label
            htmlFor="mode"
            id="circle"
            onClick={() => {
              clickedMode ? setClickedMode(false) : setClickedMode(true);
              if (theme == "dark-mode") {
                setTheme("light-mode");
              } else {
                setTheme("dark-mode");
              }
            }}
          ></label>
        </div>
      </div>
    </>
  );
};

export default Common;
