import { Link, useNavigate } from "react-router-dom";

export const CaptainSignup = () => {
  const navigate = useNavigate();

  const captainSignUpHandler = (e) => {
    e.preventDefault();

    navigate("/captain/home");
  };
  return (
    <>
      <div className="p-7">
        <img className="w-16" src="/Uber-Logo-.png" alt="" />
        <form onSubmit={captainSignUpHandler} className="mt-8">
          <div>
            <label className="text-[16px] font-medium mb-2 inline-block">
              What's your name?
            </label>
            <div className="flex gap-4">
              <input
                name="fullName.firstName"
                className="py-2 px-3 bg-[#eeeeee] rounded border-0 outline-0 w-full text-lg placeholder:text-[17px]"
                type="text"
                placeholder="First Name"
              />
              <input
                name="fullName.lastName"
                className="py-2 px-3 bg-[#eeeeee] rounded border-0 outline-0 w-full text-lg placeholder:text-[17px]"
                type="text"
                placeholder="Last Name"
              />
            </div>
          </div>

          <div className="mt-7">
            <label className="text-[16px] font-medium mb-2 inline-block">
              What's your email?
            </label>
            <input
              name="email"
              className="py-2 px-3 bg-[#eeeeee] rounded border-0 outline-0 w-full text-[16px] placeholder:text-[16px]"
              type="email"
              placeholder="email@example.com"
              required
            />
          </div>

          <div className="mt-7">
            <label className="text-[16px] font-medium mb-2 inline-block">
              What's your password?
            </label>
            <input
              name="password"
              className="py-2 px-3 bg-[#eeeeee] rounded border-0 outline-0 w-full text-[16px] placeholder:text-[16px]"
              type="password"
              placeholder="password"
            />
          </div>

          <div className="mt-7">
            <label className="text-[16px] font-medium mb-2 inline-block">
              What's your vehicle information?
            </label>
            <div className="flex gap-4">
              <input
                name="vehicle.color"
                className="py-2 px-3 bg-[#eeeeee] rounded border-0 outline-0 w-full text-[16px] placeholder:text-[16px]"
                type="text"
                placeholder="color"
              />
              <input
                name="vehicle.plate"
                className="py-2 px-3 bg-[#eeeeee] rounded border-0 outline-0 w-full text-[16px] placeholder:text-[16px]"
                type="text"
                placeholder="plate"
              />
            </div>

            <div className="flex gap-4 mt-4">
              <select
                name="vehicle.capacity"
                className="py-2 px-3 bg-[#eeeeee] rounded border-0 outline-0 w-full text-[16px]"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              <select
                name="vehicle.vehicleType"
                className="py-2 px-3 bg-[#eeeeee] rounded border-0 outline-0 w-full text-[16px]"
              >
                <option value="car">Car</option>
                <option value="auto">Auto</option>
                <option value="motorcycle">Motorcycle</option>
              </select>
            </div>
          </div>

          <div className="mt-5 text-center">
            <button className="inline-block border-0 font-medium text-center w-full text-white py-3 text-[16px] cursor-pointer rounded bg-black mt-5">
              Sign Up
            </button>
            <Link
              to="/captain/login"
              className="text-center text-[14px] text-blue-900 mt-4 underline inline-block"
            >
              I have already an account
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};
