export default function Footer() {
  return (
    <>
      <footer className="bg-[#fbf3f2] text-center md:text-left">
        <div className="upper-footer pt-[80px]">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 brdr-bot">
              <div className="col-span-1 px-[15px]">
                <div className="mb-10 md:mb-0">
                  <a href="#">
                    <img src="/assets/blackLogo.png" alt="" />
                  </a>

                  <p className="tex-5 text-[#5c5c5c] mt-[25px]">
                    Lorem Ipsum is simply is dumiomy is text Lorem Ipsum is
                    simply
                  </p>

                  <ul className="mt-5">
                    <li className="inline-block">
                      <a
                        href="#"
                        className="w-[47px] h-[47px] lg:h-[40px] lg:w-[40px] xl:w-[47px] xl:h-[47px] sm text-[18px]  mr-5 lg:mr-3 xl:mr-5 flex justify-center items-center rounded-full text-[var(--primary-color)]"
                      >
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                    </li>
                    <li className="inline-block">
                      <a
                        href="#"
                        className="w-[47px] h-[47px] lg:h-[40px] lg:w-[40px] xl:w-[47px] xl:h-[47px] sm text-[18px]  mr-5 lg:mr-3 xl:mr-5 flex justify-center items-center rounded-full text-[var(--primary-color)]"
                      >
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </li>
                    <li className="inline-block">
                      <a
                        href="#"
                        className="w-[47px] h-[47px] lg:h-[40px] lg:w-[40px] xl:w-[47px] xl:h-[47px] sm text-[18px]  mr-5 lg:mr-3 xl:mr-5 flex justify-center items-center rounded-full text-[var(--primary-color)]"
                      >
                        <i className="fa-brands fa-twitter"></i>
                      </a>
                    </li>
                    <li className="inline-block">
                      <a
                        href="#"
                        className="w-[47px] h-[47px] lg:h-[40px] lg:w-[40px] xl:w-[47px] xl:h-[47px] sm text-[18px]  mr-5 lg:mr-3 xl:mr-5 flex justify-center items-center rounded-full text-[var(--primary-color)]"
                      >
                        <i className="fa-brands fa-pinterest-p"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-span-1 px-[15px]">
                <div className="flex justify-center lg:justify-start xl:justify-center mb-10 md:mb-0">
                  <div>
                    <h3 className="text-[var(--primary-color)] text-[22px]">
                      Our Services
                    </h3>
                    <ul className="mt-6">
                      <li>
                        <a
                          href="#"
                          className="text-[#5c5c5c] py-[7px] inline-block text-[16px]"
                        >
                          <i className="fa-solid fa-chevron-right mr-3"></i>{" "}
                          Home
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-[#5c5c5c] py-[7px] inline-block text-[16px]"
                        >
                          <i className="fa-solid fa-chevron-right mr-3"></i>{" "}
                          Services
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-[#5c5c5c] py-[7px] inline-block text-[16px]"
                        >
                          <i className="fa-solid fa-chevron-right mr-3"> </i>
                          Portfolio
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-[#5c5c5c] py-[7px] inline-block text-[16px]"
                        >
                          <i className="fa-solid fa-chevron-right mr-3"></i>
                          Blog
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-span-1 px-[15px]">
                <div className="flex justify-center md:block lg:flex mb-10 md:mb-0 mt-16 lg:mt-0">
                  <div>
                    <h3 className="text-[var(--primary-color)] text-[22px]">
                      Address
                    </h3>
                    <ul className="mt-6">
                      <li>
                        <a
                          href="#"
                          className="text-[var(--primary-color)] py-[12px] inline-block text-[16px]"
                        >
                          <i className="fa-solid fa-phone mr-3"></i>(629)
                          555-0129
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-[var(--primary-color)] py-[12px] inline-block text-[16px]"
                        >
                          <i className="fa-solid fa-envelope mr-3"></i>
                          info@example.com
                        </a>
                      </li>
                      <li>
                        <span
                          href="#"
                          className="text-[var(--primary-color)] text-nowrap py-[12px] inline-block text-[16px]"
                        >
                          <i className="fa-solid fa-location-dot mr-3 "></i>
                          Portfolio 6391 Elgin St. Celina, 10299
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-span-1 px-[15px]">
                <div className="flex justify-center  md:justify-end lg:justify-center mt-16 lg:mt-0">
                  <div>
                    <h3 className="mb-5 text-[var(--primary-color)] text-[22px]">
                      Get Free Estimate
                    </h3>

                    <div className="relative mt-6">
                      <input
                        type="text"
                        id="enteredEmail"
                        placeholder="Your e-mail address"
                        className="text-[17px]"
                      />

                      <button id="sendBtn" className="cursor-pointer">
                        <i className="fa-brands fa-telegram text-[23px]"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lower-footer py-[25px]">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="grid-span-1">
                <div className="">
                  <span className="text-[#5c5c5c] text-[14.5px]">
                    © 2024
                    <a
                      className="text-[var(--primary-color)] text-[14px]"
                      href="#"
                    >
                      DesignCurved
                    </a>
                    , All Rights Reserved.
                  </span>
                </div>
              </div>

              <div className="grid-span-1 hidden md:block">
                <div className="text-right">
                  <ul>
                    <li className="inline-block mr-5">
                      <a href="#" className="text-[#5c5c5c] text-[14px]">
                        Terms & Condition
                      </a>
                    </li>
                    <li className="inline-block mr-5">
                      <a href="#" className="text-[#5c5c5c] text-[14px]">
                        Privacy Policy
                      </a>
                    </li>
                    <li className="inline-block mr-5">
                      <a href="#" className="text-[#5c5c5c] text-[14px]">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
