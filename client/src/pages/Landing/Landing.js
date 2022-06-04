import React from "react";
import {Link, useNavigate} from "react-router-dom"
import "./Landing.css"


const Landing =()=>{
  var history = useNavigate();
  // const history = useNavigate();
//   setTimeout(() => {
//     history("/home");
//   }, 3000);

  return (
    <div className="Container-Landing">
      <div className="divHome">
        <Link to="/home">
        <button onClick={() => history("/home")}>Ingresar</button>
      </Link>
    </div>
    </div>
  )
}

export default Landing