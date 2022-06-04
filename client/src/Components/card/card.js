import React from "react";
// import { Link } from "react-router-dom";

import "./card.scss";

export default function Card({ image, name, temperament, weight, height, id }) {
  return (
    <>
      <div className="card-container">
        <div className="card-title">
          {/* <Link to={`/home/${id}`}> */}
          {/* </Link> */}
          <h2 className="nameHome">{name}</h2>
        </div>
        <div className="image-container">
          <img 
          src={image} 
          alt="" 
          whidth="150px" height="150px"
          className="image"></img>
        </div>
        <div className="body">
          <h3 className="weightHome">peso:{weight}</h3>
          <h3 className="temp">Te{temperament} </h3>
        </div>
      </div>
    </>
  );
}
