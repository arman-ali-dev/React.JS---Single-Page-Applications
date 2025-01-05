export default function BlogCard({ name, timing, image }) {
  return (
    <>
      <div className="col-span-1 px-[10px]">
        <div className="blog-card rounded-[5px] mb-14 lg:mb-0">
          <div className="overflow-hidden">
            <img
              src={`/assets/${image}.jpg`}
              alt=""
              className="w-full block blog-img"
            />
          </div>

          <div className="mt-6 pl-[25px]  pr-[20px]">
            <div className="inline-block">
              <i className="text-[14px]  mb-1 fa-regular fa-user  align-inherit"></i>
              <span
                className=" inline-block mt-1 ml-1
                  text-[15px]"
              >
                {name}
              </span>
            </div>

            <div className="inline-block ml-7">
              <i className="text-[14px] mb-1 fa-regular fa-calendar-days align-inherit"></i>
              <span
                className=" inline-block mt-1 ml-1
                  text-[15px]"
              >
                {timing}
              </span>
            </div>

            <div>
              <h3 className=" text-[21.5px] lg:text-[20.5px] xl:text-[21.5px] mt-3">
                <a href="#" className="text-[var(--primary-color)]">
                  Startups and established can businesses
                </a>
              </h3>

              <p className="tex-5 text-[15px] lg:text-[14px] xl:text-[15px] mt-4">
                Nulla vitae ex nunc.quis purus convallis, fermentum me volutpat,
                sodales purus. Nunc quis mauris
              </p>
              <a href="#" className="veiwBtn inline-block mt-5">
                READ MORE
                <i className=" ml-2  text-[14px] ic text-[var(--primary-color)] fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
