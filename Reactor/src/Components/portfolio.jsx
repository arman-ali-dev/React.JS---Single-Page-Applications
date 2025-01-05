import { useState } from "react";

const Portfolio = () => {
  let originalData = [
    { id: 1, image: "img1", text: "App Development" },
    { id: 2, image: "img2", text: "Ecommerce Website" },
    { id: 3, image: "img-3", text: "Website Design" },
    { id: 4, image: "img4", text: "Website Design" },
    { id: 5, image: "img5", text: "App Development" },
    { id: 6, image: "img6", text: "Ecommerce Website" },
  ];

  let [data, setData] = useState(originalData);

  const handleData = (str) => {
    if (str == "") {
      setData(originalData);
    } else {
      let filteredData = originalData.filter((element) => element.text == str);
      setData(filteredData);
    }
  };
  return (
    <>
      <section className=" section">
        <div className="container ">
          <div className="sm:mb-[25px]">
            <h2 className=" text-[48px] aboutMe heading-same mb-5 sm:mb-20">
              Portfolios
            </h2>

            <ul className="sm:flex justify-center flex-wrap gap-3 hidden ">
              <li>
                <button
                  value=""
                  onClick={() => {
                    handleData("");
                  }}
                  className="border-none typeBtn outline-none cursor-pointer text-[var(--font-color)]  inline-block py-[10px] px-[36px] text-[17px] bg-[#ff9800]"
                >
                  All
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    handleData("App Development");
                  }}
                  className="border-none typeBtn outline-none cursor-pointer text-[var(--font-color)] inline-block py-[10px] px-[36px] text-[17px] bg-[#ff9800]"
                >
                  Mobile App
                </button>
              </li>
              <li>
                <button
                  value="Ecommerce Website"
                  onClick={() => {
                    handleData("Ecommerce Website");
                  }}
                  className="border-none typeBtn outline-none cursor-pointer text-[var(--font-color)] inline-block py-[10px] px-[36px] text-[17px] bg-[#ff9800]"
                >
                  Ecommerce
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    handleData("Website Design");
                  }}
                  className="border-none typeBtn outline-none cursor-pointer text-[var(--font-color)] inline-block py-[10px] px-[36px] text-[17px] bg-[#ff9800]"
                >
                  Website
                </button>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
            {data.map((element) => (
              <div className="grid-span-1 px-3" key={element.id}>
                <div className="portfolio-content my-6">
                  <div className="portfolio-image relative">
                    <img
                      src={`/public/Images/${element.image}.jpg`}
                      alt=""
                      className="w-full block"
                    />

                    <div className="flex absolute  top-[38%] left-[30%]  xl:top-[40%] xl:left-[32%]">
                      <a href="#" className="text-[var(--font-color)] icon">
                        <i className="fa-brands fa-github"></i>
                      </a>

                      <a href="#" className="text-[var(--font-color)] icon">
                        <i className="fa-brands fa-pinterest"></i>
                      </a>
                    </div>
                  </div>

                  <h3 className="text-[21px] text-center sm:text-left md:text-[23px] mt-3 text-[var(--font-color)]">
                    {element.text}
                  </h3>
                  <p className="tex-3 text-center sm:text-left text-[var(--paragraph-color)] mt-1 text-[16px] md:text-[17px]">
                    Take Your Business Online
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
