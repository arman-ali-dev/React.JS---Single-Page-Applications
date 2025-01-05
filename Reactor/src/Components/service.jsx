import OurServices from "./Services Components/serviceCard";
import Plan from "./Services Components/plan";
const Service = () => {
  return (
    <>
      <section className="  section ">
        <div className="container">
          <h2 className=" text-[48px] aboutMe heading-same mb-14">
            Our <span className="text-[#ff9800]">Services</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
            <OurServices icon={"fa-solid fa-code"} text={"Design Trends"} />
            <OurServices icon={"fa-brands fa-edge"} text={"Fully Responsive"} />
            <OurServices icon={"fa-solid fa-globe"} text={"Web Development"} />

            <OurServices
              icon={"fa-brands fa-sketch"}
              text={"App Development"}
            />
            <OurServices icon={"fa-solid fa-user"} text={"Customer Support"} />
            <OurServices
              icon={"fa-solid fa-screwdriver-wrench"}
              text={"Branding"}
            />
          </div>
        </div>
      </section>

      <section className=" section">
        <div className="container">
          <h2 className="text-[48px] aboutMe heading-same mb-14">
            Choose A <span className="text-[#ff9800]">Plan</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
            <Plan planType={"Basic"} price={"$10 /Month"} />
            <Plan planType={"Standard"} price={"$20 /Month"} />
            <Plan planType={"Premium"} price={"$40 /Month"} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
