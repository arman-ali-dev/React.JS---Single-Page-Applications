const OurServices = ({ icon, text }) => {
  return (
    <>
      <div className="grid-span-1 my-[12px]  px-[15px]">
        <div className="service_box bg-[var(--sidebar-color)] py-[25px] px-[22px]">
          <i className={icon}></i>

          <h3 className="relative text-[var(--font-color)] mt-5 text-[21px]">
            {text}
          </h3>

          <p className="tex-3 text-[var(--paragraph-color)] mt-8 text-[15px] sm:text-[16px] lg:text-[14px] xl:text-[17px] mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </p>
        </div>
      </div>
    </>
  );
};

export default OurServices;
