import React from "react";
import "./landingPage.css"
import { useNavigate } from "react-router-dom";

export default function LandingPage1() {
    var history = useNavigate();
  return (
    <div className="banner">
      <div className="container-banner">
        <div className="title-banner">
        <div  className="title-banner">Welcome to the Dog App</div>
        <div className="subtit">Here you will find many breeds of dogs, cheer up and look for yours</div>
        </div>
        <div>

          <button type="button" onClick={() => history("/home")}>
            <span></span>INGRESAR
          </button>
        </div>
      </div>
    </div>
  );
}
