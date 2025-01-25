import { Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import { UserLogin } from "./pages/UserLogin";
import { UserSignup } from "./pages/UserSignup";
import { CaptainLogin } from "./pages/CaptainLogin";
import { CaptainSignup } from "./pages/CaptainSignup";
import UserHome from "./pages/UserHome";
import CaptainHome from "./pages/CaptainHome";
import Riding from "./pages/Riding";
import CaptainRiding from "./pages/CaptainRiding";

const App = () => {
  return (
    <>
      <Routes>
        // ! User Routes
        <Route path="/" element={<Index />}></Route>
        <Route path="/user/home" element={<UserHome />}></Route>
        <Route path="/user/login" element={<UserLogin />}></Route>
        <Route path="/user/signup" element={<UserSignup />}></Route>
        <Route path="/user/riding" element={<Riding />}></Route>
        // ! Captain Routes
        <Route path="/captain/home" element={<CaptainHome />}></Route>
        <Route path="/captain/login" element={<CaptainLogin />}></Route>
        <Route path="/captain/signup" element={<CaptainSignup />}></Route>
        <Route path="/captain/riding" element={<CaptainRiding />}></Route>
      </Routes>
    </>
  );
};

export default App;
