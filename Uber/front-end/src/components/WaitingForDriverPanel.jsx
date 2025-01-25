export default function WaitingForDriverPanel ({setShowWaitingForDriverPanel})
{
    return (
        <>
            <div>
                <div className="text-center -mt-5 w-full">
                    <button
                        onClick={() => setShowWaitingForDriverPanel(false)}
                        className="bg-transparent border-0 outline-none text-lg"
                    >
                        <i
                            className="text-[17px] fa-solid fa-chevron-down text-[#c0bdbd]"
                            style={{ transform: "scaleX(1.5)", display: "inline-block" }}
                        ></i>
                    </button>
                </div>

                <div className="flex mt-8 mb-16 justify-between">
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

                </div>
            </div>
        </>
    )
}