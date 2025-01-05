const Sidebar = () => {
  return (
    <>
      <div className="sidebar h-screen text-center relative">
        <div className="container mx-auto">
          <div className="owner-main">
            <img
              src="public/demo.jpeg"
              alt=""
              id="owner"
              className="rounded-full"
            />

            <div className="logo">
              <img src="public/white new logo.png" alt="" width="150" />
            </div>
          </div>

          <ul className="mt-10">
            <li>
              <a href="#" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Resume</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>

          <div className="absolute w-full bottom-0 reserve-text">
            <p>@2024 Arman Portfolio</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
