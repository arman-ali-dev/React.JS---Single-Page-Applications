const Talent = ({ img, link, id, className }) => {
  return (
    <>
      <div className="col-span-1 px-[15px]">
        <div
          className={`relative z-50 text-center md:text-left md:flex flex-wrap  justify-between portfolio-main items-center ${className}`}
        >
          <div className="project-image">
            <img src={`./assets/${img}`} alt="" className="w-full block" />
          </div>
          <div className="mt-5  md:mt-0">
            <span className="sNo mr-[22px] block">{id}</span>
            <a
              href="#"
              className="mt-4 md:mt-0 max-w-[290px] inline-block text-[23px] sm:text-[31px] capitalize project-link duration-300 text-white font-bold"
            >
              {link}
            </a>
          </div>
          <div className="lg:w-[60%] mx-auto xl:mx-0  xl:w-[41%] mt-7 md:mt-12 xl:mt-0">
            <p className="text-white text-center xl:text-left tex-4 text-[15px] sm:text-[16.4px]">
              Corporate restructuring refers to the process of reorCorporate
              restructuring refers to the process of reorganizing a man
              ompanyganizing a man company
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Talent;
