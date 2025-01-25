export default function LookingForDriverPanel({ setShowLookingForDriverPanel}) {
    return (
        <>
            <div>
                <div className="text-center -mt-5 w-full">
                    <button
                        onClick={() => setShowLookingForDriverPanel(false)}
                        className="bg-transparent border-0 outline-none text-lg"
                    >
                        <i
                            className="text-[17px] fa-solid fa-chevron-down text-[#c0bdbd]"
                            style={{ transform: "scaleX(1.5)", display: "inline-block" }}
                        ></i>
                    </button>
                </div>

                <div>
                    <h2 className="mt-4">Looking for a Driver</h2>
                    <img
                        src="/car.png"
                        alt=""
                        className="h-16 mx-auto text-center flex justify-center mt-6"
                    />
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
    );
}
