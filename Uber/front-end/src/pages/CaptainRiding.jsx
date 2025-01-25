import { Link } from "react-router-dom";
import FinishRide from "../components/FinishRidePanel";
import { useState } from "react";

export default function CaptainRiding ()
{
    const [ showFinishRide, setShowFinishRide ] = useState( false );
    return (
        <>
            <div className='h-screen relative'>
                <div className='h-[78%]'>
                    <div className='flex justify-between w-screen absolute p-4 items-center'>
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

                <div className="bg-yellow-400 h-[22%]  py-9  px-6">
                    <div className="flex justify-between items-baseline " >
                    <h2 className="text-[22px] align-middle font-medium text-black">4 KM away</h2>
                    <button
                        onClick={() => setShowFinishRide(true)}        
                        className="inline-block align-middle w-1/2 border-0 text-center  text-white py-3 text-[16px] font-medium cursor-pointer rounded bg-[#0ac76b] mt-5">
                        Complete Ride
                    </button>
                </div>
                </div>
            </div>


             <div
                 className={ `${ showFinishRide ? "h-[72%] py-6 px-4 overflow-auto" : "h-0" } panel fixed w-full z-50 overflow-hidden bottom-0` }>
                 <FinishRide />
                </div>
        </>
    )
}