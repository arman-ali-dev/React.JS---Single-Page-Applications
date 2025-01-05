const Plan = ({ planType, price }) => {
  return (
    <>
      <div className="grid-span-1 mb-10 ms:mb-0 px-[15px]">
        <div className="service_box text-center plan_box bg-[var(--sidebar-color)] py-[25px] px-[22px]">
          <img src="/public/Images/diamond.svg" alt="" height="65" />
          <h4 className="text-[var(--font-color)] text-[25.5px] mt-4">
            {planType}
          </h4>
          <span className="text-[var(--heading-color)] block mt-2 text-[20px]">
            {price}
          </span>

          <ul className="text-[var(--paragraph-color)] text-[17px]">
            <li className="mt-4">Mobile App Desgin</li>
            <li className="mt-3">Responsive design</li>
            <li className="mt-3">Database Development</li>
            <li className="mt-3">Web Design</li>
            <li className="mt-3">24/7 Support</li>
          </ul>

          <button
            className="mt-4 bg-[#ff9800] px-[23px] cursor-auto py-[11px] text-[var(--font-color)] inline-block rounded-full text-[17px] border-none outline-none"
            id="startBtn"
          >
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default Plan;
