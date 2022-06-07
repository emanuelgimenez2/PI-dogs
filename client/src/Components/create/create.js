import React, { Link } from "react";
import { useNavigate } from "react-router-dom";
import "./create.css";

// import "./dogCreation.css";

export default function Create() {
  var history = useNavigate();

  return (
    <div className="container-form">
      <div className="create-form">
        <div>
          <h2>Formulario de creacion </h2>
        </div>
        <div className="buttonhome-form">
          <button onClick={() => history("/home")} className="button-form">
            Home
          </button>
        </div>
        <h3 className="tituleCrear">Crea tu raza</h3>
     
      <div className="card-containers">
        <div className="containers">
          <div className="breed">
            <label>Nombre raza</label>
            <input
              className="inputs"
              type="text"
              // name="name"
              // placeholder="name"
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
          <button className="buttonRemove">Delete
            
          </button>
        </div>
        <div>
          <button className="createDogButton" type="submit">
            Create Dog
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}
