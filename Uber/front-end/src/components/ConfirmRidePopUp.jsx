import { Link } from 'react-router-dom';

export default function ConfirmRidePopUp ( { setConfirmShowRidePopUp } )
{
    return (
        <>
             <div>
                <div>
                    <h2 className="mt-4">Confirm this ride to start!</h2>
                </div>

                <div className="bg-yellow-400 p-3 rounded-lg flex items-center justify-between mt-5 mb-5">
                    <div className="flex items-center gap-3">
                        <img className="h-16 w-16 object-cover rounded-full" src="http://saferidenevada.com/wp-content/uploads/2015/06/chauffeurs-hire-966695_640.jpg" alt="" />
                        <h3 className="font-semibold text-[19px]">Armaan Ali</h3>
                    </div>

                    <div>
                        <h3 className="text-[20px] font-medium">2.2 KM</h3>
                    </div>
                </div>

                <div className="mt-6">
                    <div className="flex items-center item pb-3">
                        <i className="fa-solid fa-user"></i>
                        <div className="ml-5">
                            <h3>562/11-A</h3>
                            <p className="text-[#8b8989] text-[15px]">Kankariya Talab, Bhopal</p>
                        </div>
                    </div>

                    <div className="flex items-center item pb-3 mt-5">
                        <i className="fa-solid fa-location-dot"></i>
                        <div className="ml-5">
                            <h3>562/11-A</h3>
                            <p className="text-[#8b8989] text-[15px]">Kankariya Talab, Bhopal</p>
                        </div>
                    </div>

                    <div className="flex items-center pb-3 mt-5">
                        <i className="fa-solid fa-money-bill-1"></i>
                        <div className="ml-5">
                            <h3 className="font-semibold">₹193.20</h3>
                            <p className="text-[#8b8989] text-[15px]">Cash Cash</p>
                        </div>
                    </div>

                    <div className='mt-10'>
                        <form>
                             <input
                                name="OTP"
                                className="py-4 px-6 bg-[#eeeeee] rounded border-0 outline-0 w-full text-[20px] placeholder:text-[20px]"
                                type="number"
                                placeholder="OTP"
                            />
                              <Link
                            to="/captain/riding"
                            className="inline-block border-0 text-center w-full text-white py-3 text-[16px] font-medium cursor-pointer rounded bg-[#0ac76b] mt-5">
                            Confirm
                        </Link>

                          <button
                            onClick={() => setConfirmShowRidePopUp(false)}
                            className="inline-block border-0 text-center w-full text-white py-3 text-[16px] font-medium cursor-pointer rounded bg-red-600 mt-2">
                            Cancel
                        </button>
                       </form>
                    </div>
                </div>
            </div>
        </>
    )
};