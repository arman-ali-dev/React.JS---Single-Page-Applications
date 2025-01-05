import GraduationAndExp from "./Reume Components/graduationAndExp";
import Skill from "./Reume Components/skill";

const Resume = () => {
  return (
    <>
      <section className=" section">
        <div className="container">
          <h2 className=" text-[48px] aboutMe heading-same mb-14">Resume</h2>

          <div className="grid grid-cols-1 xl:grid-cols-2">
            <div className="grid-span-1 mb-12 xl:mb-0 px-4">
              <h4 className="text-[var(--font-color)] text-[30px]">
                <i className="text-[#ff9800] text-[23px] align-super mr-1 fa-solid fa-graduation-cap"></i>
                Education
              </h4>
              <div className="resume-main mt-8">
                <GraduationAndExp
                  text={"Computer Science"}
                  palace={"Cambridge Uiversity / 2004-2007"}
                />
                <GraduationAndExp
                  text={"Bachleor Degree"}
                  palace={"Kingdom University / 2008-2010"}
                />
                <GraduationAndExp
                  text={"Master Degree"}
                  palace={"Hardvard Uiversity / 2012-2015"}
                />
              </div>
            </div>

            <div className="grid-span-1">
              <div className="px-4">
                <h4 className="text-[var(--font-color)] text-[30px]">
                  <i className="text-[#ff9800] text-[23px] align-super mr-1 fa-brands fa-expeditedssl"></i>
                  Experience
                </h4>
                <div className="resume-main mt-8">
                  <GraduationAndExp
                    text={"App Developer"}
                    palace={"Microsoft / 2015-2017"}
                  />
                  <GraduationAndExp
                    text={"Software Engineer"}
                    palace={"Google / 2017-2018"}
                  />
                  <GraduationAndExp
                    text={"Backend Developer"}
                    palace={"Adobe / 2019-Present"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="skill section">
        <div className="container">
          <h2 className="text-[#F1F1F1] text-[48px] aboutMe heading-same mb-20">
            My <span className="text-[#ff9800]">Skills</span>
          </h2>

          <div className="grid grid-cols-1 xl:grid-cols-2">
            <div className="grid-span-1 mb-10 xl:mb-0 pr-4">
              <div className="skills-main px-4">
                <Skill skill={"HTML5"} percantage={"90%"} />
                <Skill skill={"JAVASCRIPT"} percantage={"75%"} />
                <Skill skill={"REACT JS"} percantage={"85%"} />
                <Skill skill={"MONGO DB"} percantage={"70%"} />
                <Skill skill={"REACT NATIVE"} percantage={"85%"} />
              </div>
            </div>

            <div className="grid-span-1">
              <div className="skills-main px-4">
                <Skill skill={"CSS3"} percantage={"80%"} />
                <Skill skill={"BOOTSTRAP"} percantage={"65%"} />
                <Skill skill={"NODE JS"} percantage={"75%"} />
                <Skill skill={"EXPRESS JS"} percantage={"75%"} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
