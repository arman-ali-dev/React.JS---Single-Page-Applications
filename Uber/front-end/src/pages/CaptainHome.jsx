import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import CaptainDetailsPanel from "../components/CaptainDetailsPanel";
import RidePopUp from "../components/RidePopUp";
import ConfirmRidePopUp from "../components/ConfirmRidePopUp";

const CaptainHome = () => {
  const navigate = useNavigate();

  const [showRidePopUp, setShowRidePopUp] = useState(true);
  const [showConfirmRidePopUp, setConfirmShowRidePopUp] = useState(false);

  return (
    <>
      <div className="h-screen relative">
        <div className="h-[60%]">
          <div className="flex justify-between w-screen absolute p-4 items-center">
            <img className="w-16" src="/Uber-Logo-.png" alt="Uber Logo" />

            <Link
              to="/user/home"
              className="bg-white flex w-11 h-11 justify-center items-center rounded-full"
            >
              <i className="fa-solid fa-right-from-bracket text-[18px] text-black"></i>
            </Link>
          </div>

          <img
            className="h-full object-cover w-full"
            src="https://www.medianama.com/wp-content/uploads/2018/06/Screenshot_20180619-112715.png.png"
            alt="Captain Home Background"
          />
        </div>

        <div className="h-[40%] w-full px-5 pt-7">
          <CaptainDetailsPanel />
        </div>

        <div
          className={`${
            showRidePopUp ? "h-[80%] py-6 px-4 overflow-auto" : "h-0"
          } panel w-full z-50 overflow-hidden absolute bottom-0`}
        >
          <RidePopUp
            setShowRidePopUp={setShowRidePopUp}
            setConfirmShowRidePopUp={setConfirmShowRidePopUp}
          />
        </div>

        <div
          className={`${
            showConfirmRidePopUp ? "h-[100%] py-6 px-4 overflow-auto" : "h-0"
          } panel w-full z-50 overflow-hidden absolute bottom-0`}
        >
          <ConfirmRidePopUp setConfirmShowRidePopUp={setConfirmShowRidePopUp} />
        </div>
      </div>
    </>
  );
};

export default CaptainHome;
