import { Route, Routes } from "react-router-dom";
import Home from "./Components/home";
import Sidebar from "./Components/Sidebar";
import Common from "./Components/common";
import About from "./Components/about";
import Service from "./Components/service";
import Resume from "./Components/resume";
import Portfolio from "./Components/portfolio";
import Blog from "./Components/blog";
import BlogContent from "./Components/Blog Components/blogContent";
import Contact from "./Components/contact";
import { useEffect, useState } from "react";

function App() {
  return (
    <>
      <Common />
      <Sidebar />
      <Routes>
        <Route Component={Home} path="/"></Route>
        <Route Component={About} path="/about"></Route>
        <Route Component={Service} path="/service"></Route>
        <Route Component={Resume} path="/resume"></Route>
        <Route Component={Portfolio} path="/portfolio"></Route>
        <Route Component={Blog} path="/blog"></Route>
        <Route Component={BlogContent} path="/blog/blogcontent"></Route>
        <Route Component={Contact} path="/contact"></Route>
      </Routes>
    </>
  );
}

export default App;
