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
      <div className="fixed top-[45%] right-0 z-50">
        <button
          onClick={() => {
            clicked ? setClicked(false) : setClicked(true);
          }}
          className="cursor-pointer  text-white ml-[48px] relative z-50 mb-[-10px] bg-[var(--primary-color)]  text-[20px] py-[8px] px-[16px] border-none outline-none"
        >
          <i className="sppining-icon fa-solid fa-gear"></i>
        </button>
        <div
          className={`bg-[var(--primary-color)] mt-2 z-50 absolute light-and-dark-mode 
           py-[10px] px-[12px] flex items-center gap-2 ${
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
