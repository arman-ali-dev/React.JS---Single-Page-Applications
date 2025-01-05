const Skill = ({ skill, percantage }) => {
  return (
    <>
      <div className="skill ">
        <h3 className="text-[var(--font-color)] text-[18.5px]">{skill}</h3>
        <p className="text-[var(--paragraph-color)] text-[17.4px] mt-2 inline-block">
          {percantage}
        </p>
        <div className=" ml-5 progress-main align-middle mb-[5px] bg-[var(--border-color-2)] h-[7px] inline-block w-[85%] relative">
          <span
            className={`progress absolute bg-[#ff9800] inline-block left-0 bottom-0 w-[${percantage}] h-[7px]`}
          ></span>
        </div>
      </div>
    </>
  );
};

export default Skill;
