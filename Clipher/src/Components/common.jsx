import { useEffect, useState } from "react";

const Common = () => {
  const [visiblity, setVisiblity] = useState(false);

  const moveToTop = () => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  const hideAndShow = () => {
    if (
      document.body.scrollTop > 70 ||
      document.documentElement.scrollTop > 70
    ) {
      setVisiblity(true);
    } else {
      setVisiblity(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", hideAndShow);
  }, []);

  return (
    <>
      <button
        onClick={moveToTop}
        className={`bg-[#f1f45d] topBtn cursor-pointer text-[var(--primary-color)] h-[50px] w-12 text-[19px] border-none rounded-[4px]   bottom-5 right-6 outline-none fixed ${
          visiblity ? "block" : "hidden"
        }`}
      >
        <i className="fa-solid fa-arrow-up"></i>
      </button>
    </>
  );
};

export default Common;
