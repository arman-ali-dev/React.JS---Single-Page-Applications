import { useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMenu = () => {
    setIsVisible(false);
  };

  return (
    <>
      <div className=" sidebar lg:h-screen text-center bg-[var(--sidebar-color)] z-[99999] fixed w-screen lg:w-[30%] xl:w-[21%]">
        <div>
          <div className="px-[48px] menu py-7 flex lg:hidden  bg-[var(--sidebar-color)]">
            {isVisible == true ? (
              <button
                onClick={() => setIsVisible(false)}
                className="text-[var(--font-color)] text-[30px] cursor-pointer bg-transparent border-none outline-none"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            ) : (
              <button
                onClick={() => setIsVisible(true)}
                className="text-[var(--font-color)] text-[30px] cursor-pointer bg-transparent border-none outline-none"
              >
                <i className="fa-solid fa-bars"></i>
              </button>
            )}
          </div>
          <div
            className={`${
              isVisible ? "left-0" : "left-[-1100px]"
            } lg:block absolute lg:relative  duration-700 bg-[var(--sidebar-color)] w-screen lg:left-[0] lg:w-[100%] `}
          >
            <div className="owner-main  py-[41px] px-[30px]">
              <img
                src="/public/Images/logo.jpg"
                alt=""
                width="130"
                className="rounded-full owner"
              />
            </div>

            <div className="flex items-center justify-center h-[66vh]">
              <ul>
                <li>
                  <NavLink
                    onClick={handleMenu}
                    activeclassname="active"
                    to="/"
                    className="text-[var(--font-color)] text-[17px] font-semibold py-[10px] block"
                  >
                    HOME
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={handleMenu}
                    activeclassname="active"
                    to="/about"
                    className="text-[var(--font-color)]  text-[17px] font-semibold py-[10px] block"
                  >
                    ABOUT
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={handleMenu}
                    activeclassname="active"
                    to="/service"
                    className="text-[var(--font-color)] text-[17px] font-semibold py-[10px] block"
                  >
                    SERVICES
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={handleMenu}
                    activeclassname="active"
                    to="/resume"
                    className="text-[var(--font-color)] text-[17px] font-semibold py-[10px] block"
                  >
                    RESUME
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={handleMenu}
                    activeclassname="active"
                    to="/portfolio"
                    className="text-[var(--font-color)]  text-[17px] font-semibold py-[10px] block"
                  >
                    PORTFOLIO
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={handleMenu}
                    activeclassname="active"
                    to="/blog"
                    className="text-[var(--font-color)]  text-[17px] font-semibold py-[10px] block"
                  >
                    BLOG
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={handleMenu}
                    activeclassname="active"
                    to="/contact"
                    className="text-[var(--font-color)] text-[17px] font-semibold py-[11px] block"
                  >
                    CONTACT
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="tex-main pt-[8px]">
              <p className="tex text-[var(--paragraph-color)] text-[15.5px]">
                @2021 Reactor Portfolio
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
