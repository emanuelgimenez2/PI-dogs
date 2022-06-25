import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/home/home.js";
import Detail from "./Components/detail/detail";

import Create from "./Components/create/create.js";
import LandingPage1 from "./pages/landingPage1";




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage1/>} />
        <Route path="/home" element={<Home />}></Route>
        <Route path="/home/:id" element={<Detail />}></Route>
        <Route exact path="/home/create" element={<Create />}></Route>
      </Routes>
    </div>
  );
}

export default App;
