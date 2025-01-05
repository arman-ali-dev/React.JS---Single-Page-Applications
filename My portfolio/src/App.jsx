import Sidebar from "./Component/sidebar";
import Home from "./Component/home";
import Common from "./Component/Common";

function App() {
  return (
    <>
      <div className="flex justify-between">
        <Sidebar />
        <Home />
      </div>
      <Common />
    </>
  );
}

export default App;
