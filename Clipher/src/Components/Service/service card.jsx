const ServiceCard = ({ icon, heading }) => {
  const serviceData = [
    { icon: "fa-solid fa-code", heading: "Website Designing" },
    { icon: "fa-regular fa-object-ungroup", heading: "UI/UX Designing" },
    { icon: "fa-solid fa-hashtag", heading: "Social Media Management Pro" },
  ];
  return (
    <>
      <section className="py-[70px]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {serviceData.map((element, index) => {
              return (
                <div className="grid-span-1 px-[15px]" key={index}>
                  <div className="card  mb-16 lg:mb-0">
                    <div className="text-[26px] text-[var(--secondary-color)] icon mb-8 bg-[var(--primary-color)] flex justify-center items-center rounded-full h-[85px] w-[85px] text-center ">
                      <i className={` text-[30px ${element.icon}`}></i>
                    </div>

                    <a
                      href="#"
                      className="font-bold text-[var(--primary-color)] text-[22px] lg:text-[18px] xl:text-[22px]"
                    >
                      {element.heading}
                    </a>

                    <p className="tex-2 text-[14.9px] mt-5 text-[#2a2c30]">
                      Purus velit aenean quis habitant eros the a bibendum
                      aenean quis habit aeros who ath bibendumPurus velit aenean
                    </p>

                    <a
                      href="#"
                      className="text-[14px] text-[var(--primary-color)] font-[600] inline-block mt-6 readLink"
                    >
                      READ MORE
                      <i className="text-[14px] ml-3 fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceCard;
