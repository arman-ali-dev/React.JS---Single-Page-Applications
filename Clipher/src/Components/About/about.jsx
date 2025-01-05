import { NavLink } from "react-router-dom";
import ServiceCard from "../Service/service card";

const About = () => {
  return (
    <>
      <section className="about-section">
        <div className="container mx-auto">
          <div className="grid grid-cols-1">
            <div className="col-span-1">
              <div className="page-title text-center">
                <h2 className="text-white text-[40px] mb-4">About</h2>
                <div>
                  <NavLink to="/" className="page-link ">
                    Home
                  </NavLink>
                  <span className="text-white mx-3 text-[18px]">/</span>
                  <NavLink to="" className="page-link ">
                    About
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[110px]">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 items-center">
            <div className="col-span-1 px-[15px]">
              <div className="pr-[100px]">
                <div className="flex justify-between relative">
                  <div className=" gum ml-[50px]">
                    <img src="/assets/ghumralu.png" alt="" />
                  </div>
                  <div className="about-1 relative">
                    <img
                      src="/assets/about-1.jpg"
                      alt=""
                      className="rounded-tl-[145px]  rounded-bl-[150px] rounded-br-[146px] max-h-[296px] max-w-[245px]"
                    />
                  </div>
                  <div className="about-left-top relative"></div>
                  <div className="unique-shape-icon ">
                    <i className="fa-solid fa-globe text-[35px]"></i>
                  </div>
                </div>

                <div className="about-bottom flex items-end">
                  <div className="mt-[-140px] relative z-50">
                    <img src="/assets/about-2.jpg" alt="" />
                  </div>

                  <div className="bg-[var(--secondary-color)]  p-[25px] rounded-md ml-[20px] flex justify-center gap-4 items-center">
                    <i className="fa-solid fa-award text-[36px] text-[var(--primary-color)]"></i>

                    <div>
                      <h3 className="mb-1 text-[32px] text-[var(--primary-color)] inline-block">
                        250+
                      </h3>
                      <p className="text-[16px] text-[var(--primary-color)] ">
                        Project Complete
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-1 px-[15px] pl-[20px]">
              <div>
                <h3 className="sub-heading text-[17px] text-[var(--primary-color)]">
                  ABOUT US
                </h3>
                <h2 className="text-[43px] mt-4 text-[var(--primary-color)]">
                  Elevate your brand with a stunning portfolio
                </h2>

                <p className="tex-5 text-[#2a2c30] mt-6 text-[16.5px]">
                  In embracing frontier science, our objective is to contribute
                  to advancements that directly benefit humanity, aligning our
                  talents with a purpose-driven commitment to create tangible,
                  positive outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="text-slide text-slide-2 text-center mb-[30px] mt-[100px]">
        <div className="scroll-text">
          <span className="transparent-text ">Web Development Wizardry</span>{" "}
          <span className="transparent-text ">UI/UX Design Innovation </span>
          <span>LOGO AND BRAND IDENTITY </span>
          <span>Web Development Wizardry</span>
        </div>
      </div>

      <ServiceCard />

      <section className="py-[110px] bg-[var(--primary-color)]">
        <div className="container mx-auto">
          <div className="flex justify-between items-end mb-24">
            <div>
              <h3 className="text-[17px] sub-heading text-[var(--secondary-color)]">
                LATEST SERVICE
              </h3>
              <h2 className="text-white text-[42px] w-[70%] mt-3">
                Showcasing excellence through portfolios
              </h2>
            </div>

            <div>
              <a href="#" className="changeBtn" id="seeBtn">
                SEE MORE <i className="text-[14px] fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="items-center grid grid-cols-3">
            <div className="col-span-1">
              <div>
                <img
                  src="/assets/service-2.jpg"
                  alt=""
                  className="w-[435px] h-[396px]"
                />
              </div>
            </div>

            <div className="col-span-2 pl-[110px] ">
              <div className="serviceList">
                <ul>
                  <li>
                    <a
                      href="#"
                      className="flex justify-between items-center text-white font-bold"
                    >
                      <div>
                        <span className="text-[18px] mr-8 align-text-bottom">
                          01
                        </span>{" "}
                        <span className="text-[29px]">
                          Creative Design Solution
                        </span>
                      </div>
                      <i className="text-[20px] fa-solid fa-arrow-right"></i>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="flex justify-between items-center text-white font-bold"
                    >
                      <div>
                        <span className="text-[18px] mr-8 align-text-bottom">
                          02
                        </span>{" "}
                        <span className="text-[29px]">
                          Photography and Videography
                        </span>
                      </div>
                      <i className="text-[20px] fa-solid fa-arrow-right"></i>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="flex justify-between items-center text-white font-bold"
                    >
                      <div>
                        <span className="text-[18px] mr-8 align-text-bottom">
                          03
                        </span>{" "}
                        <span className="text-[29px]">
                          Photography and Videography
                        </span>
                      </div>
                      <i className="text-[20px] fa-solid fa-arrow-right"></i>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="flex justify-between items-center text-white font-bold"
                    >
                      <div>
                        <span className="text-[18px] mr-8 align-text-bottom">
                          04
                        </span>{" "}
                        <span className="text-[29px]">
                          UI/UX Design Innovation
                        </span>
                      </div>
                      <i className="text-[20px] fa-solid fa-arrow-right"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[60px]">
        <div className="container mx-auto">
          <div className="grid grid-cols-2">
            <div className="col-span-1 px-[15px]">
              <div>
                <h3 className="sub-heading text-[17px] text-[var(--primary-color)]">
                  CLIENTS REVIEWS
                </h3>
                <h2 className="text-[42px] w-[80%] mt-2 text-[var(--primary-color)]">
                  your talent with our Latest portfolio
                </h2>
              </div>
            </div>
            <div className="col-span-1 px-[15px]">
              <div className="bg-[var(--secondary-color)] py-[40px]  px-[60px]">
                <div className="flex justify-between relative comma">
                  <div className="flex items-center gap-5 ">
                    <img
                      src="/assets/download.jpeg"
                      alt=""
                      className="rounded-full"
                      width="80"
                    />
                    <div>
                      <h3 className="text-[21px] mb-2 text-[var(--primary-color)]">
                        Darlene Robertson
                      </h3>
                      <p>Software Engineer</p>
                    </div>
                  </div>
                </div>

                <p className="mt-7 tex-4 text-[#2a2c30] text-[16.4px]">
                  Over the course of several years, I've been involved in
                  recruiting individuals within this field, and I must say, the
                  degree of professionalism exhibited by this team is
                  unparalleled. Collaborating with them truly instills
                  confidence in their ability to successfully.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
