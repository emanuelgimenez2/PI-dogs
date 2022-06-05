import React from "react";
import {Link, useNavigate} from "react-router-dom"
import "./Landing.css"


const Landing =()=>{
  var history = useNavigate();


  return (
    <div className="Container-Landing">
      <div className="divHome">
      
        <button onClick={() => history("/home")}>Ingresar</button>
    
    </div>
    </div>
  )
}

export default Landing