import React from "react";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

import "./card.scss";

export default function Card({ image, name, temperament, weight, height, id }) {
  var history = useNavigate();

  return (
    <div className="container-card">
      <div
        className="detail-card"
        onClick={() => {history(`/home/${id}`);
        }}
      >
        <div className="title-card">
          <h2 className="nameHome">{name}</h2>
        </div>
        <div className="image-card">
          <img
            src={image}
            alt="Imagen del Perro"
            whidth="150px"
            height="150px"
            className="image"
          ></img>
        </div>
        <div className="body-card">
          <h3 className="weightHome">Peso: {`${weight[0]}kg  `}</h3>
          <h3 className="temp">Temperamento: </h3>

          {temperament.map((item, index) => {
            
            return <h3 key={index}>{item}</h3>;
          })}
        </div>
      </div>
    </div>
  );
}
