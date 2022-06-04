import React, { Fragment, Link } from "react";
import "./detail.scss"
import { useNavigate } from "react-router-dom";

export default function Detail() {
  var history = useNavigate();
  return (
    <Fragment>

    <div className="container-detail">
      <div className="card-detail">
        <div className="content-detail">
          
          <h1 className="name-detail">perro</h1>
          <div className="wightHeight">
            <h3 className="wightHeightLifeSpan">Peso: </h3>
            <h3 className="wightHeightLifeSpan">Tamaño: </h3>
          </div>
          <h3 className="wightHeightLifeSpan">Esperanza de vida: años</h3>
          <h3 className="wightHeightLifeSpan">Origen:</h3>
          <h2 className="temperamentDetalle">Temperamentos: </h2>
          <div className="divImgDetail">
            <img src={""} alt="" className="pictureDetalle" />
          </div>
        </div>
      </div>

      <div>
        <button onClick={()=>{history("/home")}}>Volver</button>
      </div>
    </div>
    </Fragment>
  );
}
