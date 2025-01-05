const GraduationAndExp = ({ text, palace }) => {
  return (
    <>
      <div className="content relative">
        <h3 className="text-[var(--font-color)] text-[22px] "> {text}</h3>
        <span className="text-[var(--heading-color)] text-[15.5px] mt-2 block">
          {palace}
        </span>

        <p className="tex-3 mt-1 text-[var(--paragraph-color)] text-[14.7px] md:text-[14px] lg:text-[14.7px]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit,
          quisquam!
        </p>
      </div>
    </>
  );
};

export default GraduationAndExp;
