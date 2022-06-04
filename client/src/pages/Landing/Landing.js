import React from "react";
import {Link} from "react-router-dom"
import "./Landing.css"


const Landing =()=>{
  return (
    <div className="Container-Landing">
      <div className="divHome">
        <Link to="/home">
      <button onClick={()=>console.log ("jghdfhgdfhl")}>ingresar</button>
      </Link>
    </div>
    </div>
  )
}

export default Landing