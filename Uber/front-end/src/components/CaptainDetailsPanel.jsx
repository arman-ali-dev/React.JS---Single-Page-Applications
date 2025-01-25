export default function CaptainDetailsPanel() {
  return (
    <>
      <div className="flex justify-between items-end">
        <div className="flex items-center gap-3">
          <img
            className="h-16 rounded-full"
            src="https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg"
            alt=""
          />
          <h2 className="font-semibold text-[20px]">Armaan Ali</h2>
        </div>

        <div>
          <h2 className="font-semibold text-[23px]">₹650.32</h2>
          <p className="text-[#969696] text-[15px] font-medium mt-1">Earned</p>
        </div>
      </div>

      <div className="flex bg-[#f0eeee] px-2 py-5 justify-between rounded-lg mt-8 text-center">
        <div>
          <i className="ri-speed-up-line text-gray-900 text-[39px] mt-[5px]"></i>
          <h3 className="text-gray-900 text-[18px] font-semibold mt-[5px]">
            10.2
          </h3>
          <p className="text-[#888686] text-[15px] mt-[5px]">Hours Online</p>
        </div>

        <div>
          <i className="ri-speed-up-line text-gray-900 text-[39px] mt-[5px]"></i>
          <h3 className="text-gray-900 text-[18px] mt-[5px] font-semibold">
            10.2
          </h3>
          <p className="text-[#888686] text-[15px] mt-[5px]">Hours Online</p>
        </div>

        <div>
          <i className="ri-speed-up-line text-gray-900 text-[39px] mt-[5px]"></i>
          <h3 className="text-gray-900 text-[18px] mt-[5px] font-semibold">
            10.2
          </h3>
          <p className="text-[#888686] text-[15px] mt-[5px]">Hours Online</p>
        </div>
      </div>
    </>
  );
}
