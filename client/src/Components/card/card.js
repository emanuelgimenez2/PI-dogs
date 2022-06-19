import React from "react";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

import "./card.scss";

export default function Card({ image, name, temperament, weight, height, id }) {
  var history = useNavigate();

  return (
    
      <div className="container-card">
        <div className="detail-card" onClick={() => {history(`/home/${id}`)}}>
     
        
        <div className="card-title">
          <h2 className="nameHome">{name}</h2>
        </div>
        <div className="image-container">
          <img
            src={image}
            alt=""
            whidth="150px"
            height="150px"
            className="image"
          ></img>
        </div>
        <div className="body">
          <h3 className="weightHome">Peso:{weight}</h3>
          <h3 className="temp">Temperamento: {temperament} </h3>
        </div>
      </div>
      </div>
    
  );
}
