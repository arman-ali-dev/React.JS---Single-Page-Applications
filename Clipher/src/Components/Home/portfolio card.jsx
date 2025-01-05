const PortfolioCard = ({ icon, heading }) => {
  return (
    <>
      <div className="col-span-1 px-[15px]">
        <div className="portfolio-card">
          <div className="icon relative">
            <i className={icon}></i>
          </div>
          <a
            href="#"
            className="font-bold text-[19px] md:text-[20.5px] text-[#1c3f39]"
          >
            {heading}
          </a>
          <p className="text-[#1c3f39] text-[16.5 px] font-[500] mt-6">
            Portfolio is a collection of works that showcases an individual's
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
    </>
  );
};

export default PortfolioCard;
