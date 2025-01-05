const ProfessionalCard = ({ img, name, post }) => {
  return (
    <>
      <div className="grid-span-1 px-[15px]">
        <div className="proffessional-main relative text-center mb-12 lg:mb-0">
          <div className="overflow-hidden">
            <img
              src={`/assets/${img}`}
              alt=""
              className="duration-500 w-full"
            />
          </div>
          <h3 className="text-[var(--primary-color)] text-[21px] mt-4">
            {name}
          </h3>
          <span className="text-[var(--primary-color)]  mt-3 block font-[500]">
            {post}
          </span>
        </div>
      </div>
    </>
  );
};

export default ProfessionalCard;
