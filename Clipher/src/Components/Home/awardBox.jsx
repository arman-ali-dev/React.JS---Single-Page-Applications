const AwardBox = ({ awardType, awardTime }) => {
  return (
    <>
      <a className="awardBox relative cursor-pointer">
        <div className="z-50 relative flex justify-between items-center">
          <div>
            <h4 className="text-[var(--primary-color)] text-[16px] sm:text-[17px] md:text-[18px] text-x">
              {awardType}
            </h4>
            <span className="text-[15px] md:text-[16px] mt-3 md:mt-4 block tet">
              {awardTime}
            </span>
          </div>
          <div>
            <i className="text-[22px] md:text-[25px] ic text-[var(--primary-color)] fa-solid fa-arrow-right"></i>
          </div>
        </div>
      </a>
    </>
  );
};

export default AwardBox;
