import React, { Link } from "react";

export default function Detail() {
  return (
    <div className="walpaperDetalle">
      <div className="card-contenedor">
        <div className="card-content">
          <Link to="/home">
            <img src={""} alt="" className="imgBackDetail" />
            
          </Link>
          <h1 className="name">perro</h1>
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
        <Link to="/home">
          <button className="volver">Volver a Pantalla anterior </button>
        </Link>
      </div>
    </div>
  );
}
