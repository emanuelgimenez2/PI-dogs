import React, { Link } from "react";

// import "./dogCreation.css";

export default function Create() {
  return (
    <div className="create-form">
      <div className="titleRefreshHome">
        <button type="submit" className="buttonRefresh">
          <img className="iconRefresh" src={""} alt=""></img>
        </button>

        <div className="homeButton">
          <Link to="/home" className="linkHome">
            <img src={""} alt=""  className="iconHome" />
            Home
          </Link>
        </div>

        <h1 className="tituleCrear">Crea tu raza</h1>
      </div>

      <div className="card-containers">
        <div className="containers">
          <div className="breed">
            <label>Nombre raza</label>
            <input
              className="inputs"
              type="text"
              name="name"
              placeholder="name"
            />
          </div>

          <div className="minHeight">
            <label>Tamaño Minimo</label>
            <input
              className="inputs"
              type="number"
              min="1"
              max="99"
              name="minimHeight"
              placeholder="Minimal height"
            />
          </div>

          <div className="maxHeight">
            <label>Tamaño maximo</label>
            <input
              className="inputs"
              type="number"
              min="1"
              max="99"
              name="maximHeight"
              placeholder="Maximal height"
            />
          </div>

          <div className="minWeight">
            <label>peso Minimo</label>
            <input
              className="inputs"
              type="number"
              min="1"
              max="99"
              name="minimWeight"
              placeholder="Minimal weight"
            />
          </div>

          <div className="maxWeight">
            <label>Peso maximo</label>
            <input
              className="inputs"
              type="number"
              min="1"
              max="99"
              name="maximWeight"
              placeholder="Maximal weight"
            />
          </div>

          <div className="minLifeSpan">
            <label>años Minimo</label>
            <input
              className="inputs"
              type="number"
              min="1"
              max="21"
              name="minLifeSpan"
              placeholder="Breed's life span"
            />
          </div>

          <div className="maxLifeSpan">
            <label>Años Maxima</label>
            <input
              className="inputs"
              type="number"
              min="1"
              max="21"
              name="maxLifeSpan"
              placeholder="Breed's life span"
            />
          </div>

          <div className="picture">
            <label>Imagen</label>
            <input
              className="inputs"
              type="text"
              name="image"
              placeholder="Picture URL..."
            />
          </div>
        </div>

        <div className="temperamentsItems">
          <button className="buttonRemove">
            <img
              src={""}
              height="15px"
              weight="15px"
              alt="delete"
              className="imgRemoveTemperament"
            />
          </button>
        </div>
        <div>
          <button className="createDogButton" type="submit">
            Create Dog
          </button>
        </div>
      </div>
    </div>
  );
}
