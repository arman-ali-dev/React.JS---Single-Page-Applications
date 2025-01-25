import { Link, useNavigate } from "react-router-dom";

export const UserSignup = () => {
  const navigate = useNavigate();

  const userSignUpHandler = (e) => {
    e.preventDefault();
    navigate("/user/home");
  };
  return (
    <>
      <div className="p-7 flex flex-col justify-between h-screen">
        <div>
          <img className="w-16" src="/Uber-Logo-.png" alt="" />
          <form onSubmit={userSignUpHandler} className="mt-8">
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

            <div className="mt-5 text-center">
              <button className="inline-block border-0 font-medium text-center w-full text-white py-3 text-[16px] cursor-pointer rounded bg-black mt-5">
                Sign Up
              </button>
              <Link
                to="/user/login"
                className="text-center text-[14px] text-blue-900 mt-4 underline inline-block"
              >
                i have already an account
              </Link>
            </div>
          </form>
        </div>

        <div className="mb-3">
          <p className="leading-3 text-[10px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Exercitationem quod officiis, hic aperiam quidem eum quis autem.
            Impedit, est illum!
          </p>
        </div>
      </div>
    </>
  );
};
