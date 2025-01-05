import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const About = () => {
  const testimonials = ["client1.jpg", "client2.jpg", "client3.jpg"];
  return (
    <>
      <section className="about section ">
        <div className="container">
          <h2 className="text-[48px] aboutMe heading-same mb-14">
            About <span className="text-[#ff9800]">Me</span>
          </h2>
          <div className="grid grid-cols-1 xl:grid-cols-2">
            <div className="col-span-1 px-[15px]">
              <div className="image-column text-center mg:text-left mb-10 xl:mb-0">
                <img
                  src="/public/Images/logo.jpg"
                  alt=""
                  className="w-[100%] sm:w-[496px] sm:h-[452px]"
                />
              </div>
            </div>

            <div className="col-span-1 pl-[15px]">
              <div className="about-content px-[15px]">
                <p className="text-[22px] font-semibold text-[#ff9800] ">
                  Who am i?
                </p>
                <h2 className="text-[var(--font-color)] mt-4">
                  I Am <span className=" text-[#ff9800] ">Aaron Smith</span>
                </h2>

                <p className="tex-2 text-[var(--paragraph-color)] text-[14px] sm:text-[15px] mt-3">
                  I am full stack web developer. I have Experience in Developing
                  Websites, Web Applications, Mobile Games (Android & IOS), and
                  Flutter Mobile Applications.
                </p>

                <div className="flex justify-between">
                  <ul className="mt-4">
                    <li className=" text-[var(--font-color)] text-[16px] sm:text-[17px]">
                      Full Name:
                    </li>

                    <li className="mt-3 text-[var(--font-color)] text-[16px] sm:text-[17px]">
                      Age:
                    </li>

                    <li className="mt-3  text-[var(--font-color)] text-[16px] sm:text-[17px]">
                      Nationality:
                    </li>

                    <li className="mt-3  text-[var(--font-color)] text-[16px] sm:text-[17px]">
                      Languages:
                    </li>
                    <li className="mt-3  text-[var(--font-color)] text-[16px] sm:text-[17px]">
                      Address:
                    </li>
                    <li className="mt-3  text-[var(--font-color)]  text-[16px] sm:text-[17px]">
                      Freelance:
                    </li>
                  </ul>

                  <ul className="mt-4">
                    <li className=" text-[var(--paragraph-color)] text-[16px] sm:text-[17px]">
                      Antron Smith
                    </li>

                    <li className="mt-3 text-[var(--paragraph-color)] text-[16px] sm:text-[17px]">
                      25 Years
                    </li>

                    <li className="mt-3 text-[var(--paragraph-color)]  text-[16px] sm:text-[17px]">
                      United Kingdom
                    </li>

                    <li className="mt-3 text-[var(--paragraph-color)]  text-[16px] sm:text-[17px]">
                      English , French
                    </li>
                    <li className="mt-3 text-[var(--paragraph-color)]  text-[16px] sm:text-[17px]">
                      11 Jedburgh Road,Lethanhill
                    </li>
                    <li className="mt-3 text-[var(--paragraph-color)]  text-[16px] sm:text-[17px]">
                      Available
                    </li>
                  </ul>
                </div>
                <a
                  href="#"
                  id="downloadCvBtn"
                  className="bg-[#ff9800]  text-[var(--font-color)] text-[17px] rounded-[30px] inline-block mt-5 py-[12px] px-[25px]"
                >
                  Download Cv
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials section">
        <div className="container">
          <h2 className="  testi-heading  heading-same mb-16">Testimonials</h2>

          <Swiper
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Navigation]}
            navigation={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },

              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
            }}
          >
            {testimonials.map((element, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="testi-main text-center">
                    <div className="testi py-[30px] px-[30px] sm:pt-[45px] sm:pb-[30px]  sm:px-[50px] bg-[var(--border-color)]">
                      <p className="tex-3 text-[14px]  sm:text-[16px] md:text-[17px]  text-[var(--paragraph-color)]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Officia, est quae? Rem natus sunt vitae esse eum
                        possimus nulla quam
                      </p>
                      <img
                        src={`/public/Images/${element}`}
                        alt=""
                        width="60"
                        className="rounded-full mt-6"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default About;
