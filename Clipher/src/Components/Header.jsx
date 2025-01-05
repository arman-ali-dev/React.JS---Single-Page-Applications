import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isClicked, setClicked] = useState(false);

  useEffect(() => {
    if (isClicked) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isClicked]);

  return (
    <>
      <header className="bg-[#1c3f39] relative">
        <div className="container mx-auto">
          <nav className="flex justify-between items-center px-[20px] md:px-0">
            <NavLink to="/" className="py-[25px] inline-block">
              <img
                src="assets/logo.png"
                alt=""
                className="w-[135px] md:w-auto"
              />
            </NavLink>
            <ul
              className={` md:pt-0 md:left-auto md:top-auto  md:relative absolute pt-[60px] md:pl-0 pl-[20px] ${
                isClicked ? "left-0" : "left-[-800px]"
              } h-screen md:h-auto w-[100%]  z-[999999999] duration-700 right-0 top-24 bg-[var(--secondary-color)] md:w-auto md:bg-transparent`}
            >
              <li className="block md:inline-block">
                <NavLink
                  to="/"
                  className="text-[var(--primary-color)] font-bold md:text-white duration-300 px-4 text-[17px] lg:text-[16px] xl:text-[17px]"
                >
                  Home
                </NavLink>
              </li>
              <li className="block md:inline-block mt-8 md:mt-0">
                <NavLink
                  to="/about"
                  className="text-[var(--primary-color)] font-bold md:text-white duration-300 px-4 text-[17px] lg:text-[16px] xl:text-[17px]"
                >
                  About
                </NavLink>
              </li>
              <li className="block md:inline-block mt-8 md:mt-0">
                <NavLink
                  to=""
                  className="text-[var(--primary-color)] font-bold md:text-white duration-300 px-4 text-[17px] lg:text-[16px] xl:text-[17px]"
                >
                  Services
                </NavLink>
              </li>
              <li className="block md:inline-block mt-8 md:mt-0">
                <NavLink
                  to=""
                  className="text-[var(--primary-color)] font-bold md:text-white duration-300 px-4 text-[17px] lg:text-[16px] xl:text-[17px]"
                >
                  Portfolio
                </NavLink>
              </li>
              <li className="block md:inline-block mt-8 md:mt-0">
                <NavLink
                  to=""
                  className="text-[var(--primary-color)] font-bold md:text-white duration-300 px-4 text-[17px] lg:text-[16px] xl:text-[17px]"
                >
                  Blog
                </NavLink>
              </li>
              <li className="block md:inline-block mt-8 md:mt-0">
                <NavLink
                  to=""
                  className="text-[var(--primary-color)] font-bold md:text-white duration-300 px-4 text-[17px] lg:text-[16px] xl:text-[17px]"
                >
                  Contact
                </NavLink>
              </li>
            </ul>

            <a
              href="#"
              id="readBtn"
              className="duration-300 hidden lg:block rounded-[5px] uppercase bg-[#f1f45d] px-[30px] py-[18px] lg:px-[25px] xl:px-[30px] lg:py-[15px] xl:py-[18px] text-[#1c3f39] text-[14px]"
            >
              Read More <i className="text-[14px] fa-solid fa-arrow-right"></i>
            </a>

            <div className="block md:hidden">
              <button
                onClick={() => setClicked(!isClicked)}
                className="bg-[var(--secondary-color)] text-[var(--primary-color)] text-[20px] border-[var(--primary-color)] rounded-[4px] h-[40px] w-[40px] cursor-pointer"
              >
                {isClicked ? (
                  <i className="text-[21px] fa-solid fa-xmark"></i>
                ) : (
                  <i className="fa-solid fa-bars"></i>
                )}
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
