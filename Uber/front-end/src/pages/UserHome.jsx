import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRidePanel from "../components/ConfirmRidePanel";
import LookingForDriverPanel from "../components/LookingForDriverPanel";
import WaitingForDriverPanel from "../components/WaitingForDriverPanel";

const UserHome = () => {
  const [showLocationPanel, setShowLocationPanel] = useState(false);
  const [showVehiclePanel, setShowVehiclePanel] = useState(false);
  const [showConfirmRidePanel, setShowConfirmRidePanel] = useState(false);
  const [showLookingForDriverPanel, setShowLookingForDriverPanel] =
    useState(false);
  const [showWaitingForDriverPanel, setShowWaitingForDriverPanel] =
    useState(false);

  return (
    <>
      <div className="h-screen relative  bg-white">
        <img
          className="w-16 top-4 left-4 absolute"
          src="/Uber-Logo-.png"
          alt=""
        />

        <img
          className="h-[70%] object-cover w-full"
          src="https://www.medianama.com/wp-content/uploads/2018/06/Screenshot_20180619-112715.png.png"
          alt=""
        />

        <div className="absolute bottom-0 flex flex-col justify-end h-screen">
          <div className="bg-white h-[30.1%] px-5 py-7">
            <form>
              <div className="flex justify-between items-baseline">
                <h3 className="text-[23px] mb-5">Find a trip</h3>
                {showLocationPanel && (
                  <button
                    onClick={() => setShowLocationPanel(false)}
                    className="bg-transparent border-0 outline-none text-lg"
                    disabled={showVehiclePanel}
                  >
                    <i className="fa-solid fa-chevron-down"></i>
                  </button>
                )}
              </div>
              <div className="relative">
                <span className="line bg-black h-16 absolute w-1 top-4 left-7 rounded inline-block"></span>
                <input
                  onClick={() => setShowLocationPanel(true)}
                  className="bg-[#eeeeee] border-0 outline-none px-12 py-3 rounded placeholder:text-[#969696] placeholder:text-[16px] text-[16px] w-full"
                  type="text"
                  placeholder="Add a pick-up location"
                  disabled={showVehiclePanel}
                />
                <input
                  onClick={() => setShowLocationPanel(true)}
                  className="bg-[#eeeeee] border-0 outline-none px-12 py-3 rounded placeholder:text-[#969696] mt-4 placeholder:text-[16px] text-[16px] w-full"
                  type="text"
                  placeholder="Enter your destination"
                  disabled={showVehiclePanel}
                />
              </div>
            </form>
          </div>

          <div
            className={`${
              showLocationPanel
                ? "h-[70%]  overflow-auto"
                : "h-0   overflow-hidden"
            }  block panel`}
          >
            <LocationSearchPanel
              setShowVehiclePanel={setShowVehiclePanel}
              setShowLocationPanel={setShowLocationPanel}
            />
          </div>

          <div
            className={`${
              showVehiclePanel ? "h-[65%] py-6 px-4 overflow-auto" : "h-0"
            } panel fixed w-full z-50 overflow-hidden`}
          >
            <VehiclePanel
              setShowVehiclePanel={setShowVehiclePanel}
              setShowConfirmRidePanel={setShowConfirmRidePanel}
            />
          </div>

          <div
            className={`${
              showConfirmRidePanel ? "h-[70%] py-6 px-4 overflow-auto" : "h-0"
            } panel fixed w-full z-50 overflow-hidden`}
          >
            <ConfirmRidePanel
              setShowConfirmRidePanel={setShowConfirmRidePanel}
              setShowLookingForDriverPanel={setShowLookingForDriverPanel}
              setShowVehiclePanel={setShowVehiclePanel}
            />
          </div>

          <div
            className={`${
              showLookingForDriverPanel
                ? "h-[60%] py-6 px-4 overflow-auto"
                : "h-0"
            } panel fixed w-full z-50 overflow-hidden`}
          >
            <LookingForDriverPanel
              setShowLookingForDriverPanel={setShowLookingForDriverPanel}
            />
          </div>

          <div
            className={`${
              showWaitingForDriverPanel
                ? "h-[60%] py-6 px-4 overflow-auto"
                : "h-0"
            } panel fixed w-full z-50 overflow-hidden`}
          >
            <WaitingForDriverPanel
              setShowWaitingForDriverPanel={setShowWaitingForDriverPanel}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserHome;
