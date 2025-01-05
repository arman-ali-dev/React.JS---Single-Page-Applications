import Header from "./Components/Header";
import Home from "./Components/Home/Home";
import Common from "./Components/common";
import Footer from "./Components/footer";
import About from "./Components/About/about";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/about" Component={About}></Route>
      </Routes>
      <Common />
      <Footer />
    </>
  );
}

export default App;
