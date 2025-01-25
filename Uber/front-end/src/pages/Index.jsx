import { Link, useLocation, useNavigate } from "react-router-dom";

const Index = () => {
  return (
    <>
      <div>
        <div className="h-screen pt-9 bg-[url(/home-bg.jpg)] bg-center bg-cover flex flex-col justify-between  bg-red-400">
          <img className="w-16 ml-9" src="/Uber-Logo-.png" alt="" />
          <div className="bg-white pt-4 pb-7 px-4">
            <h2 className="text-[24px]  font-bold">Get Started With Uber</h2>
            <Link
              to="/captain/login"
              className="inline-block text-center w-full text-white py-3 text-[18px] font-medium cursor-pointer rounded bg-black mt-5"
            >
              Continue With Captain
            </Link>
            <Link
              to="/user/login"
              className="inline-block text-center w-full text-white py-3 text-[18px] font-medium cursor-pointer rounded bg-[#0ac76b] mt-5"
            >
              Continue With User
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
