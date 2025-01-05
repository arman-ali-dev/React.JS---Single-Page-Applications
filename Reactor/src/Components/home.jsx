const Home = () => {
  return (
    <>
      <section className="home  section h-[100vh] lg:ml-auto flex justify-center items-center text-center">
        <div className="container">
          <div>
            <div className="content">
              <h2 className="text-[#F1F1F1] text-[36px] sm:text-[47px] lg:text-[50px] mb-4">
                Hi, I am <span className="text-[#ff9800]">Antron Smith</span>
              </h2>
              <p className="intro text-[14px] w-[95%] sm:w-[71%] mx-auto sm:text-[15px] lg:text-[17px] text-[var(--paragraph-color)]">
                I am full stack web developer. I have Experience in Developing
                Websites, Web Applications, Mobile Games (Android & IOS), and
                Flutter Mobile Applications. We are providing clean code.
              </p>
            </div>

            <div className="social-media mt-4">
              <ul className="flex justify-center gap-6">
                <li>
                  <a
                    href="#"
                    className=" text-[21px] h-[48px] w-[48px] rounded-full flex justify-center items-center"
                  >
                    <i className="fa-brands fa-square-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" text-[21px] h-[48px] w-[48px] rounded-full flex justify-center items-center"
                  >
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" text-[21px] h-[48px] w-[48px] rounded-full flex justify-center items-center"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" text-[21px] h-[48px] w-[48px] rounded-full flex justify-center items-center"
                  >
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" text-[21px] h-[48px] w-[48px] rounded-full flex justify-center items-center"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
