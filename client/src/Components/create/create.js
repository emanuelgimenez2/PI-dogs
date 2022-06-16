/* eslint-disable react-hooks/exhaustive-deps */
// import React, { Link } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getTemperaments, postDog } from "../../actions";
import { Validate } from "../../util/validate";
import "./create.css";

export default function Create() {
  var history = useNavigate();
  const dispatch = useDispatch();
  const temperamentsDogs = useSelector((state) => state.temperaments);
  const [input, setInput] = useState({
    name: "",
    minimHeight: "",
    maximHeight: "",

    minimWeight: "",
    maximWeight: "",
    maxLifeSpan: "",
    minLifeSpan: "",
    image: "",
    temperament: [],
  });

  const dataReadyForSend = {
    name: input.name,
    height: [input.minimHeight, input.maximHeight],
    weight: [input.minimWeight, input.maximWeight],
    life_span: `${input.minLifeSpan}-${input.maxLifeSpan}`,
    image: input.image,
    temperament: input.temperament,
  };
  useEffect(() => {
    dispatch(getTemperaments());
  }, []);

  temperamentsDogs.sort(function (a, b) {
    if (a > b) {
      return 1;
    }
    if (b > a) {
      return -1;
    }
    return 0;
  });

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  const handleClick = () => {
    const validationData = Validate(input);

    Object.keys(validationData).length === 0 &&
      dispatch(postDog(dataReadyForSend));
  };

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
                name="name"
                value={input.raza}
                onChange={(e) => handleChange(e)}
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
                value={input.minimHeight}
                onChange={(e) => handleChange(e)}
                placeholder="Minimal height"
              />
            </div>
            <div className="maxHeight">
              <label>Tamaño Maximo</label>
              <input
                className="inputs"
                type="number"
                min="1"
                max="99"
                name="maximHeight"
                value={input.maximHeight}
                onChange={(e) => handleChange(e)}
                placeholder="Maximal height"
              />
            </div>

            <div className="minWeight">
              <label>Peso Minimo</label>
              <input
                className="inputs"
                type="number"
                min="1"
                max="99"
                name="minimWeight"
                value={input.minimWeight}
                onChange={(e) => handleChange(e)}
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
                value={input.maximWeight}
                onChange={(e) => handleChange(e)}
                placeholder="Maximal weight"
              />
            </div>

            <div className="minLifeSpan">
              <label>Años Minimo</label>
              <input
                className="inputs"
                type="number"
                min="1"
                max="21"
                name="minLifeSpan"
                value={input.minLifeSpan}
                onChange={(e) => handleChange(e)}
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
                value={input.maxLifeSpan}
                onChange={(e) => handleChange(e)}
                placeholder="Breed's life span"
              />
            </div>
              <div className="maxLifeSpan">
              <label>Temperamento</label>
              <input
                className="inputs"
                type="text"
                name="temperament"
                value={input.temperament}
                onChange={(e) => handleChange(e)}
                placeholder="Ingrese su temperamento"
              />
            </div>

            {/* <div>
              <select onChange={(e) => handleChange(e)} className="listTemps">
                <option hidden>Elija el temperamentos</option>
                {temperamentsDogs.map((temperament) => (
                  <option key={temperament} value={temperament}>
                    {temperament}
                  </option>
                ))}
              </select>
            </div> */}

            
          </div>
          <div>
            <button className="buttonsubmit-from" onClick={handleClick}>
              Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
