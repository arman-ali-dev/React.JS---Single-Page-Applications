const BlogContent = () => {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="blog-content p-[40px]">
            <img
              src="/public/Images/blog4.jpg"
              alt=""
              className="w-full block h-[370px] object-cover object-center"
            />

            <p className="text-[var(--font-color)] text-[15px] tex-3 bg-[#ff9800] inline-block px-[10px] py-[5px]">
              Date: 30 June
            </p>

            <h2 className="text-[var(--font-color)] my-6  text-[22px] sm:text-[24px] md:text-[26px]">
              Lorem, ipsum dolor sit amet consectetur adipisicing.
            </h2>

            <p className="tex-3 text-[14px] sm:text-[15px]  md:text-[17px] text-[var(--paragraph-color)]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              doloremque cumque totam velit odio esse laudantium nam quae,
              dolores veritatis molestiae necessitatibus ducimus, quo magni
              aliquid autem tempora impedit. Totam asperiores quidem animi
              illum, maiores autem officiis suscipit accusamus quisquam, fugit,
              molestiae voluptatum modi nobis est optio sequi pariatur. Autem
              debitis deserunt, tempora, labore cupiditate corporis rem quae
              illo facilis omnis voluptatibus. Pariatur cumque aperiam obcaecati
              enim labore, impedit reiciendis accusantium quam ipsam libero
              culpa et quas iusto sed velit illum, dolore modi suscipit sequi
              eligendi? Ipsum earum illum iure praesentium molestiae neque
              corporis quos impedit blanditiis, perferendis nisi, rerum repellat
              itaque reiciendis? Recusandae perspiciatis distinctio explicabo
              repellat. Commodi at reprehenderit voluptate! Quis labore
              repellendus facilis officiis maxime tempora quaerat quo voluptate
              doloremque id! Deleniti natus ipsa voluptas eos a cupiditate
              molestias distinctio velit quidem veritatis dolor officia ducimus
              repudiandae similique voluptates sequi ipsam, tempore quam,
              tenetur ab iste commodi sunt dolorem! Adipisci asperiores,
              excepturi tenetur illum labore explicabo temporibus voluptatibus
              saepe nam cum perferendis impedit, officiis at fugiat voluptate
              illo dolorum molestiae inventore ipsa est recusandae quia, iste
              dolores deserunt! Quo officia impedit molestias ratione eligendi
              saepe tempora, minima molestiae, repudiandae sapiente dolorum
              alias. Deleniti expedita cum blanditiis vero! <br /> <br /> Lorem
              ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, ex,
              error veritatis facilis at, cum in fugit molestias asperiores
              sequi temporibus molestiae? Qui non eligendi totam voluptas sed,
              similique incidunt quam aliquam eaque fugiat repudiandae, dolorem
              quas praesentium a odit. Ad aliquid accusamus officia tempore! Cum
              placeat omnis ab dolor! <br /> <br /> Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quam ullam a sed quos esse earum
              impedit doloremque velit! Dignissimos eaque deserunt, odio, beatae
              ad sit laudantium veniam mollitia fugit vel a quis, sapiente ullam
              quibusdam.
            </p>

            <div className="flex text-white text-[18px] mt-8">
              Share:
              <ul className="flex ml-5 gap-5 text-[20px]">
                <li>
                  <a href="#" className="text-[#ff9800] ">
                    <i className="fa-brands fa-square-facebook text-[20px]"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#ff9800] ">
                    <i className="fa-brands fa-twitter text-[20px]"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#ff9800] ">
                    <i className="fa-brands fa-instagram text-[20px]"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#ff9800] ">
                    <i className="fa-brands fa-whatsapp text-[20px]"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogContent;
