import { NavLink } from "react-router-dom";

const Blog = () => {
  const data = [
    {
      id: 1,
      image: "blog1",
      text: "How to earn money online",
      date: "June 29",
    },

    {
      id: 2,
      image: "blog2",
      text: "How to make app with react native",
      date: "June 30",
    },
    {
      id: 3,
      image: "blog3",
      text: "How to be an entrepreneur",
      date: "July 1",
    },
    { id: 4, image: "blog4", text: "How to start freelancing", date: "July 5" },
  ];
  return (
    <>
      <section className=" section">
        <div className="container">
          <h2 className=" text-[48px] aboutMe heading-same mb-14">
            Recent <span className="text-[#ff9800]">Blog</span>
          </h2>

          <div className="grid grid-cols-1 xl:grid-cols-2 ">
            {data.map((element) => {
              return (
                <div className="grid-span-1 p-4" key={element.id}>
                  <div className="mb-5 blog bg-[var(--border-color-2)] py-[20px] px-[20px]">
                    <div className="overflow-hidden">
                      <img
                        src={`/public/Images/${element.image}.jpg`}
                        alt=""
                        className="w-full block"
                      />
                    </div>
                    <p className="date bg-[#ff9800] py-[8px] px-[12px] text-[17px] text-[var(--font-color)] ">
                      {element.date}
                    </p>

                    <NavLink
                      to="/blog/blogcontent"
                      className="tex_btn  tex-3 text-[var(--font-color)] mt-4 block text-[19px] sm:text-[15px] lg:text-[21px]"
                    >
                      {element.text}
                    </NavLink>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
