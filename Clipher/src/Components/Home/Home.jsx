import { useState } from "react";
import ServiceCard from "../Service/service card";
import PortfolioCard from "./portfolio card";
import Talent from "./talent";
import ProfessionalCard from "./professionalCard";
import AwardBox from "./awardBox";
import BlogCard from "./blogCard";

const Home = () => {
  const [isPlay, setIsPlay] = useState(false);

  return (
    <>
      <section className="bg-[var(--primary-color)]  py-[50px] pb-[80px]  ">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            <div className="col-span-1 px-[15px]">
              <div className="intro mb-24 md:mb-0 text-center md:text-left">
                <h2 className=" text-[var(--secondary-color)] text-[42px] md:text-[44px]">
                  I’M
                </h2>
                <h1 className="text-white  text-[42px] sm:text-[55px] md:text-[75px] font-[700]">
                  Robert Fox
                </h1>
                <p className="tex md:pr-5 mt-4 md:mt-0">
                  Dedicated to assisting you in reaching your digital
                  objectives, our team of experts specializes in services
                  ranging from website design and development to SEO, PPC
                  advertising.
                </p>

                <div className="flex  justify-center md:justify-start gap-16 mt-8 ">
                  <div>
                    <h3 className="text-white text-[36px] md:text-[47px] mb-1 md:mb-3">
                      200+
                    </h3>
                    <span className="text-white text-[16.5px]">
                      Team member
                    </span>
                  </div>

                  <div>
                    <h3 className="text-white text-[36px] md:text-[47px] mb-1 md:mb-3">
                      20+
                    </h3>
                    <span className="text-white text-[16.5px]">
                      Winning award
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-1 px-[15px]">
              <div className="relative">
                <div className="max-w-[555px] ">
                  <div className="triangle-main">
                    <img
                      src="/assets/triangle-line.dde28f2d4b9bb14b46a9.png"
                      alt=""
                    />
                  </div>

                  <div className="main">
                    <div className="man relative"></div>

                    <img
                      src="/assets/man.png"
                      alt=""
                      className="absolute z-50 max-w-[78%]"
                    />
                  </div>
                </div>

                <div className="right-link text-right absolute top-0 right-[0px] hidden md:block">
                  <ul>
                    <li className="mb-9">
                      <a
                        href="#"
                        className="text-white text-[55px] opacity-10 font-extrabold"
                      >
                        GRAPHIC <br /> DESIGNER
                      </a>
                    </li>
                    <li className="mb-9">
                      <a
                        href="#"
                        className="text-white text-[55px] opacity-10 font-extrabold"
                      >
                        WEB <br /> DESIGNER
                      </a>
                    </li>
                    <li className="mb-9">
                      <a
                        href="#"
                        className="text-white text-[55px] opacity-10 font-extrabold"
                      >
                        PHOTOGRAPHER
                      </a>
                    </li>
                    <li className="mb-9">
                      <a
                        href="#"
                        className="text-white text-[55px] opacity-10 font-extrabold"
                      >
                        UNLOCK <br /> ALGORITHM
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" py-[120px]">
        <div className="container mx-auto">
          <div className=" grid-cols-1 lg:grid-cols-2 grid items-center">
            <div className="grid-span-1 px-[15px] text-center lg:text-left">
              <div className="about-image-main relative mb-36 lg:mb-0">
                <img
                  src="./assets/about-3.jpg"
                  alt=""
                  className="rounded-tr-[114px] w-full md:w-[389px] rounded-tl-[114px] "
                />
                <img
                  src="./assets/about-4.jpg"
                  className="hidden md:inline-block lg:hidden xl:inline-block ml-[20px]"
                  alt=""
                />
                <div className="staticImg-main absolute right-[60px] top-[15px]">
                  <img
                    src="./assets/about-5.jpg"
                    className="rounded-tr-[100px] hidden md:inline-block lg:hidden xl:inline-block  rounded-tl-[100px] static-image"
                    alt=""
                  />
                </div>
                <div className="absolute left-[-15px] md:left-9 lg:left-[-15px] top-[-10px]">
                  <img
                    src="./assets/three-lines.png"
                    alt=""
                    className=" thoughts"
                  />
                </div>
                <div className="rotate-default hidden md:inline-block lg:hidden xl:inline-block  absolute top-[-30px] right-[-25px] -z-10">
                  <img src="./assets/download.png" className="line" alt="" />
                </div>

                <div className="exp_circle">
                  <div className="exp_inner">
                    <h2 className="text-[34px] md:text-[45px] text-[var(--primary-color)]">
                      15
                    </h2>
                    <p className="text-[var(--primary-color)] text-[15px] md:text-[17px] font-[700] mt-2  ">
                      Years Of Experience
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid-span-1  xl:pl-[30px] pr-[15px]">
              <div className="about-content-main text-center lg:text-left">
                <h4 className="mb-3 md:mb-[18px] sm:text-[16px] text-[15px] md:text-[16px]">
                  ABOUT US
                </h4>
                <h2 className="mb-[25px] text-[32px] sm:text-[38px] md:text-[42px] lg:text-[38px] xl:text-[42px] text-[var(--primary-color)]">
                  Elevate your <span className="transparent-text">brand</span>{" "}
                  with a the stunning portfolio
                </h2>

                <p className="text-[#2a2c30] mb-[45px]">
                  In embracing frontier science, our objective is to contribute
                  to advancements that directly benefit humanity, aligning our
                  talents with a purpose-driven of commitment to create
                  tangible, positive outcomes.
                </p>
                <a href="#" className="veiwBtn inline-block">
                  VEIW MORE
                  <i className=" text-[13px] md:text-[14px] ml-3 fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceCard />

      <section className="vedio-section">
        <div className="container mx-auto">
          <div className="grid grid-cols-1">
            <div className="col-span-1 px-[15px]">
              <div className="vedio-main text-center relative">
                <button
                  onClick={() => setIsPlay(false)}
                  className={` ${
                    isPlay ? "opacity-100" : "opacity-0"
                  } removeBtn cursor-pointer mx-auto text-[20px] h-12 w-12 md:text-[24px] md:h-14 md:w-14 rounded-full flex justify-center items-center mb-5  text-white bg-[var(--primary-color)] border-none outline-none `}
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>
                <div className="relative">
                  <img
                    src="./assets/vedio-bg.jpg"
                    alt=""
                    className="h-[380px] md:h-auto w-full"
                  />
                  <button
                    onClick={() => setIsPlay(true)}
                    className={` ${!isPlay ? "block" : "hidden"}`}
                  >
                    <i id="playBtn" className="fa-sharp fa-solid fa-play"></i>
                  </button>

                  <iframe
                    src="https://www.youtube.com/embed/L61p2uyiMSo?si=dft0ez-IHsI-49FD"
                    title="YouTube video player"
                    className={`w-full absolute top-0 left-0 h-[380px] md:h-[342px] xl:h-[578px] lg:h-[460px] ${
                      isPlay ? "block" : "hidden"
                    }`}
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[120px] portfolio-section">
        <div className="container mx-auto">
          <h4 className="text-[15px] sm:text-[16px] md:text-[17px] mb-2 text-[var(--primary-color)] text-center ">
            OUR BENIFITS
          </h4>
          <h2 className="xl:w-[42%] lg:w-[70%] mb-16 sm:text-[36px] text-[var(--primary-color)] mx-auto text-center text-[30px] md:text-[41.5px]">
            Where creativity <span className="transparent-text"> meets </span>
            success through thee portfolios
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
            <PortfolioCard
              icon={"fa-solid fa-window-restore"}
              heading={"UI / UX Design"}
            />
            <PortfolioCard
              icon={"fa-solid fa-cash-register"}
              heading={"E-commerce Solutions"}
            />
            <PortfolioCard
              icon={"fa-solid fa-tachograph-digital"}
              heading={"SEO and Digital Advertising"}
            />

            <PortfolioCard
              icon={"fa-brands fa-connectdevelop"}
              heading={"Web Development Wizardry"}
            />
          </div>
        </div>
      </section>

      <section className="bg-[var(--primary-color)] py-[110px] talent-portfolio relative">
        <div className="container mx-auto">
          <div className="md:flex justify-between items-end mb-28 md:mb-16 text-center md:text-left">
            <div>
              <h3 className="text-[var(--secondary-color)] text-[15px]   md:text-[17px]">
                LATEST PORTFOLIO
              </h3>
              <h2 className="text-white text-[28px] sm:text-[36px] md:text-[38px] lg:text-[42px] mt-2">
                Showcase your talent
                <span className=" transparent-text-2"> with</span> <br />
                our Latest portfolio
              </h2>
            </div>
            <div>
              <a href="#" id="seeBtn" className="mt-6 md:mt-0">
                SEE MORE
                <i className="text-[14px] ml-3 fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 ">
            <Talent
              className="portfolio-brdr"
              img="project-5.jpg"
              link="portfolio benefit my caree"
              id="01"
            />
            <Talent
              className="portfolio-brdr "
              img="project-6.jpg"
              link="Branding and Identity Mastery"
              id="02"
            />
            <Talent
              img="project-7.jpg"
              link="Unveiling the power of portfolios"
              id="03"
            />
          </div>
        </div>
        <div className="right-shape hidden lg:block">
          <img src="./assets/shape.png" alt="" />
        </div>
      </section>

      <section className="py-[110px] review-section relative">
        <div className="container mx-auto">
          <h3 className="text-[15px] text-center lg:text-left sm:text-[16px] md:text-[17px] mb-2 text-[#1c3f39] sub-heading ">
            CLIENTS REVIEWS
          </h3>
          <h2 className="mb-10 md:mb-14 lg:mb-10 text-center lg:text-left text-[32px] sm:text-[36px] md:text-[40px] text-[#1c3f39] lg:w-[40%]">
            your talent with our Latest portfolio
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            <div className="grid-span-1 px-[15px] md:mr-[-110px] z-40 relative">
              <div className="reviews ">
                <ul className="flex gap-2 text-[15px] sm:text-[16px]">
                  <li>
                    <i className="fa-regular fa-star"></i>
                  </li>
                  <li>
                    <i className="fa-regular fa-star"></i>
                  </li>
                  <li>
                    <i className="fa-regular fa-star"></i>
                  </li>
                  <li>
                    <i className="fa-regular fa-star"></i>
                  </li>
                  <li>
                    <i className="fa-regular fa-star"></i>
                  </li>
                </ul>

                <p className="text-[16.5px] sm:text-[18.5px] md:text-[18px] lg:text-[23.5px] reveiw-text mt-7">
                  Portfolio is a collection of works that showcases an
                  individual's or tje man organization's skills experience and
                  achievements. It is a powerful tool for presenting one's
                  capabilities and impressing
                </p>

                <div className="flex items-center gap-5 mt-8  ">
                  <img
                    className="rounded-full"
                    src="./assets/download.jpeg"
                    alt=""
                  />
                  <div>
                    <h4 className="text-[18px] md:text-[21px] text-[var(--primary-color)]">
                      Darlene Robertson
                    </h4>
                    <span className="text-[16px] mt-2 block">
                      Software Engineer
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="gird-span-1 px-[15px] mt-8 md:mt-0 hidden md:block">
              <div className="r-main">
                <img src="/assets/right-img.jpg" className="w-full" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="right-shape-2 hidden md:block">
          <img src="./assets/shape-2.png" alt="" />
        </div>
      </section>

      <div className="text-slide text-center">
        <div className="scroll-text">
          <span className="transparent-text-3 ">Web Development Wizardry</span>
          <span className="transparent-text-3 ">UI/UX Design Innovation </span>
          <span>LOGO AND BRAND IDENTITY </span>
          <span>Web Development Wizardry</span>
        </div>
      </div>

      <section className="py-[110px]">
        <div className="container mx-auto">
          <h3 className="sub-heading text-center text-[var(--primary-color)] text-[15px] md:text-[17px] sm:text-[16px]">
            LATEST PORTFOLIO
          </h3>

          <h2 className="text-[32px] sm:text-[36px] md:text-[40px] mb-20 mt-3 lg:w-[40%] text-center text-[var(--primary-color)] mx-auto">
            Stand out <span className="transparent-text"> from the</span> crowd
            professional portfolio
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <ProfessionalCard
              img="team-1.jpg"
              name="Leslie Alexander"
              post="Founder"
            />
            <ProfessionalCard
              img="team-2.jpg"
              name="Bessie Cooper"
              post="Ceo & Founder"
            />
            <ProfessionalCard
              img="team-3.jpg"
              name="Devis Cooper"
              post="Ceo & Digital"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4">
            <div className="col-span-1">
              <div className="count-main md:brdr text-center md:text-left">
                <p className="text-[16px] md:text-[17px] ">Winning award</p>
                <h2 className="transparent-text text-[42px] md:text-[56px] lg:text-[62px] mt-2">
                  200+
                </h2>
              </div>
            </div>
            <div className="col-span-1">
              <div className="count-main md:brdr text-center md:text-left">
                <p className="text-[16px] md:text-[17px] ">Total Project</p>
                <h2 className="transparent-text text-[42px] md:text-[56px] lg:text-[62px] mt-2">
                  650+
                </h2>
              </div>
            </div>
            <div className="col-span-1">
              <div className="count-main md:brdr text-center md:text-left">
                <p className="text-[16px] md:text-[17px]">Happy Clients</p>
                <h2 className="transparent-text text-[42px] md:text-[56px] lg:text-[62px] mt-2">
                  120+
                </h2>
              </div>
            </div>
            <div className="col-span-1">
              <div className="count-main text-center md:text-left">
                <p className="text-[16px] md:text-[17px] ">Clients Review</p>
                <h2 className="transparent-text text-[42px] md:text-[56px] lg:text-[62px] mt-2">
                  210+
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-[110px]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1">
            <div className="col-span-1">
              <div className="aboutEvent-main text-center relative mb-[-200px]">
                <h3 className="sub-heading text-[15px] sm:text-[16px] text-[var(--secondary-color)]">
                  ABOUT THE EVENT
                </h3>
                <h2 className="text-white mt-3 text-[27px] sm:text-[38px]  md:text-[41px] lg:w-[55%] xl:w-[45%] mx-auto">
                  Captivating
                  <span className="transparent-text-2"> portfolios </span>
                  that lasting impression
                </h2>
                <a href="#" className="mt-9" id="seeBtn">
                  VIEW NOW
                  <i className="text-[14px] ml-3 fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#dce8e4] pt-[327px] pb-[110px]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="col-span-1 px-[15px]">
              <div className="ms:pr-[110px] text-center lg:text-left mb-16 lg:mb-0">
                <h3 className="text-[var(--primary-color)] sub-heading mb-2 text-[15px] md:text-[17px] sm:text-[16px]">
                  WELCOME OUR COMPANY
                </h3>

                <h2 className="text-[31px] mt-3 md:mt-0 md:text-[40px] sm:text-[35px] text-[var(--primary-color)]">
                  Crafting portfolios that to goood success
                </h2>

                <p className="tex-5 text-[15px]  sm:text-[16.5px] mt-4">
                  Nulla vitae ex nunc. Morbi quis purus convallis, fermentum
                  metus volutpat, sodales purus. Nunc quis mauris et eros
                  vulputNulla vitae ex nunc. Morbi quis purus convallis,
                  fermentum metus
                </p>
                <a href="#" className="greenBtn mt-8" id="seeBtn">
                  VIEW NOW
                  <i className="text-[14px] ml-3 fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>

            <div className="cols-span-1 px-[15px]">
              <div className="boxex">
                <AwardBox
                  awardType="Unleashing creativity through portfolios"
                  awardTime="Awards   2016"
                />
                <AwardBox
                  awardType="Unleashing Defending your world"
                  awardTime="Awards   2020"
                />
                <AwardBox
                  awardType="Safety you can trust"
                  awardTime="Awards   2016"
                />
                <AwardBox
                  awardType="Keeping you OK every step of the way"
                  awardTime="Awards   2022"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[110px] relative">
        <div className="container mx-auto">
          <h3 className="sub-heading text-[15px] sm:text-[16px] md:text-[17px] text-[var(--primary-color)] text-center">
            OUR LATEST BLOG
          </h3>

          <h2 className="md:text-[41px] sm:text-[35px] text-[32px] mb-20 text-[var(--primary-color)] lg:w-[50%] mt-3 text-center mx-auto">
            Showcase your talent
            <span className="transparent-text"> with </span>
            our Latest portfolio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <BlogCard
              name="John Duo"
              timing="October 19, 2024"
              image="blog-3"
            />
            <BlogCard
              name="Robert Lee"
              timing="October 25, 2024"
              image="blog-4"
            />
            <BlogCard
              name="Robert Lee"
              timing="October 25, 2024"
              image="blog-5"
            />
          </div>
        </div>
        <div className="left-shape">
          <img src="/assets/left-shape.png" alt="" />
        </div>
      </section>
    </>
  );
};

export default Home;
