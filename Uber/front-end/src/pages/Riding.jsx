import { Link } from 'react-router-dom';

export default function Riding() {
    return (
        <>
            <div className="h-screen relative">
                <Link 
                    to="/user/home" 
                    className="bg-white absolute flex w-11 h-11 right-4 top-4 justify-center items-center rounded-full"
                >
                    <i className="ri-home-5-line text-[18px] text-black"></i>
                </Link>

                <img
                    className="h-1/2 object-cover w-full"
                    src="https://www.medianama.com/wp-content/uploads/2018/06/Screenshot_20180619-112715.png.png"
                    alt=""
                />

                <div className="px-4">
                    <div className="flex mt-8 mb-8 justify-between">
                        <img
                            src="/car.png"
                            alt=""
                            className="h-14"
                        />

                        <div className="text-right">
                            <p className="text-[16px] font-semibold">Armaan Ali</p>
                            <h3 className="text-[19px]">PBX1 Number</h3>
                            <p className="text-[#7d7c7c] text-[14px] font-medium">Mahindra Scorpio</p>
                        </div>
                    </div>

                    <div className="flex items-center pb-3 mt-5">
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

                    <div>
                        <button
                            className="inline-block border-0 text-center w-full text-white py-3 text-[16px] font-medium cursor-pointer rounded bg-[#0ac76b] mt-5"
                        >
                            Make a Payment
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
