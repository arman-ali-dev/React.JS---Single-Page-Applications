export default function VehiclePanel({ setShowVehiclePanel, setShowConfirmRidePanel }) {
    return (
        <>
            <div>
                  <div className="text-center -mt-5 w-full">
                <button
                    onClick={() => setShowVehiclePanel(false)}
                    className="bg-transparent border-0 outline-none text-lg"
                >
                    <i
                        className="text-[17px] fa-solid fa-chevron-down text-[#c0bdbd]"
                        style={{ transform: "scaleX(1.5)", display: "inline-block" }}
                    ></i>
                </button>
            </div>

            <h2 className="mt-4">Choose a Vehicle</h2>

            <div
                onClick={() => setShowConfirmRidePanel(true)}
                className="flex px-2 py-4 items-center vehicle mt-7 rounded-md justify-between"
            >
                <img src="../../public/car.png" className="h-10 mr-2" alt="" />
                <div>
                    <h4>
                        UberGo <span><i className="fa-solid fa-user"></i>4</span>
                    </h4>
                    <p className="font-medium text-sm">2 Mins away</p>
                    <p className="text-gray-500 text-[12px]">Affordable, compact rides</p>
                </div>
                <h2 className="text-[20px]">₹193.20</h2>
            </div>

            <div
                onClick={() => setShowConfirmRidePanel(true)}
                className="flex px-2 py-4 items-center vehicle mt-5 rounded-md justify-between"
            >
                <img src="/auto.png" className="h-12 mr-2" alt="" />
                <div>
                    <h4>
                        UberGo <span><i className="fa-solid fa-user"></i>2</span>
                    </h4>
                    <p className="font-medium text-sm">3 Mins away</p>
                    <p className="text-gray-500 text-[12px]">Affordable, auto rides</p>
                </div>
                <h2 className="text-[20px]">₹118.86</h2>
            </div>

            <div
                onClick={() => setShowConfirmRidePanel(true)}
                className="flex px-2 py-4 items-center vehicle mt-5 rounded-md justify-between"
            >
                <img src="/moto.png" className="h-16" alt="" />
                <div>
                    <h4>
                        Moto <span><i className="fa-solid fa-user"></i>1</span>
                    </h4>
                    <p className="font-medium text-sm">3 Mins away</p>
                    <p className="text-gray-500 text-[12px]">Affordable, motorcycle rides</p>
                </div>
                <h2 className="text-[20px]">₹65</h2>
            </div>
          </div>
        </>
    );
}
