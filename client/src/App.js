import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/home/home.js";
import Detail from "./Components/detail/detail";
import Landing from "./pages/Landing/Landing.js";
import Create from "./Components/create/create";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />}></Route>
        <Route path="/home/:id" element={<Detail />}></Route>
        <Route exact path="/home/create" element={<Create />}></Route>
      </Routes>
    </div>
  );
}

export default App;
