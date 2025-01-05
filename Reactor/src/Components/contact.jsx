const Contact = () => {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="mb-[25px]">
            <h2 className=" text-[48px] aboutMe heading-same mb-20">
              Contact <span className="text-[#ff9800]">Me</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2">
            <div className="grid-span-1 px-4">
              <div className="contact_content  mb-20 xl:mb-0">
                <h3 className="text-[var(--font-color)] text-[29px] mb-20 xl:mb-28">
                  Contact Info
                </h3>
                <div className="flex items-center gap-20">
                  <div>
                    <i className="text-[#ff9800] fa-solid fa-phone text-[25px]"></i>
                  </div>

                  <div className="b relative">
                    <p className="tex-3 text-[var(--font-color)] text-[17.5px]">
                      Email Me
                    </p>
                    <p className="tex-3 text-[var(--paragraph-color)] text-[14px]">
                      demo@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-20 mt-24">
                  <div>
                    <i className="text-[#ff9800] fa-solid fa-envelope text-[25px]"></i>
                  </div>

                  <div className="b relative">
                    <p className="tex-3 text-[var(--font-color)] text-[17.5px]">
                      Call Me
                    </p>
                    <p className="tex-3 text-[var(--paragraph-color)] text-[14px]">
                      077 1031 XXXX
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-20 mt-24">
                  <div>
                    <i className="text-[#ff9800] ml-[6px] fa-solid fa-location-dot text-[25px]"></i>
                  </div>

                  <div className="b relative">
                    <p className="tex-3 text-[var(--font-color)] text-[17.5px]">
                      Location
                    </p>
                    <p className="tex-3 text-[var(--paragraph-color)] text-[14px]">
                      11 Jedburgh Road,Lethanhill, United Kingdom.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid-span-1 px-4">
              <div className="contact_form">
                <h3 className="text-[var(--font-color)] text-[29px] mb-12">
                  Get In Touch
                </h3>

                <form className="relative">
                  <label htmlFor="name" id="forName">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="bg-transparent border-none outline-none w-full text-[var(--font-color)] p-[10px] text-[17px] rounded-[4px]"
                  />

                  <label htmlFor="email" id="forEmail">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-10  bg-transparent border-none outline-none w-full text-[var(--font-color)] p-[10px] text-[17px] rounded-[4px]"
                  />

                  <label htmlFor="subject" id="forSubject">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="mt-10 bg-transparent border-none outline-none w-full text-[var(--font-color)] p-[10px] text-[17px] rounded-[4px]"
                  />

                  <label htmlFor="message" id="forMessage">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="mt-10 h-[125px] resize-none bg-transparent border-none outline-none w-full text-[var(--font-color)] p-[10px] text-[17px] rounded-[4px]"
                  ></textarea>
                  <button
                    id="downloadCvBtn"
                    className="bg-[#ff9800]  text-[var(--font-color)] text-[16px] mt-8 py-[10px] px-[22px] cursor-pointer inline-block border-none outline-none rounded-[30px]"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
