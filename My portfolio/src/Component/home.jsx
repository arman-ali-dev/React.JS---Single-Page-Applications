export default function Home() {
  return (
    <>
      <section className="home-section">
        <div className="container mx-auto">
          <div class="text-center mt-6">
            <p class=" mb-5  typing text-center relative inline-block font-bold">
              👋, my name is{"  "}
              <span className="text-[var(--secondary-color)]">Arman</span> and i
              am a{" "}
              <span className="text-[var(--secondary-color)]">
                Software Developer
              </span>
            </p>

            <div class="hero-content  mx-auto relative ">
              <div class="mainChild relative">
                <h2 class="inline-block  heading">
                  <span class="block" id="headingChild1">
                    Software
                  </span>
                  <span class="stick"></span>
                  <span id="headingChild2">Developer</span>
                </h2>
                <span class="o-box"></span>
              </div>
            </div>

            <div className="text-slide text-center">
              <div className="scroll-text">
                <span className="transparent-text-3 ">Web Development</span>{" "}
                <span className=" ">UI/UX Design Innovation </span>{" "}
                <span>App Development</span>{" "}
                <span className="transparent-text-3w">Web Development</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
