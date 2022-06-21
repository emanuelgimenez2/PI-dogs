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
  const statusPost = useSelector((state) => state.post);
  const [name, setName] = useState("");
  const [minHeight, setMinHeight] = useState(0);
  const [maxHeight, setMaxHeight] = useState(0);
  const [minWeight, setMinWeight] = useState(0);
  const [maxWeight, setMaxWeight] = useState(0);
  const [maxLifeSpan, setMaxLifeSpan] = useState(0);
  const [minLifeSpan, setMinLifeSpan] = useState(0);
  const [temperament, setTemperament] = useState();
  const [dataDog, setDataDog] = useState([]);

  function capitalizarPrimeraLetra(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  var data = {
    name: capitalizarPrimeraLetra(name),
    height: [minHeight, maxHeight],
    weight: [minWeight, maxWeight],
    life_span: `${minLifeSpan},${maxLifeSpan}`,
    temperament: dataDog,
  };



  useEffect(() => {
    dispatch(getTemperaments());
  }, []);

  
  const sendData = async () => {
    let validatedData = Validate(data);
    console.log("===validatedata=>", validatedData);

    Object.keys(validatedData).length === 0 && (await dispatch(postDog(data)));
  };

  const addTemperament = () => {
    setDataDog([...dataDog, temperament]);
  };

  const removeTemperament = (element) => {
    let tempDataDog = dataDog.filter((e) => e !== element);

    setDataDog(tempDataDog);
  };

  
  useEffect(() => {
    if (statusPost === true) {
      setName("");
      setMinHeight(0);
      setMaxHeight(0);
      setMinWeight(0);
      setMaxWeight(0);
      setMaxLifeSpan(0);
      setMinLifeSpan(0);
      setTemperament("");
      setDataDog([]);
    }
    return null;
  }, [statusPost]);

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
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="raza"
              />
            </div>

            <div className="minHeight">
              <label>Tamaño Minimo</label>
              <input
                className="inputs"
                type="number"
                min="1"
                max="99"
                name="minHeight"
                value={minHeight}
                onChange={(e) => setMinHeight(e.target.value)}
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
                name="maxHeight"
                value={maxHeight}
                onChange={(e) => setMaxHeight(e.target.value)}
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
                name="minWeight"
                value={minWeight}
                onChange={(e) => setMinWeight(e.target.value)}
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
                name="maxWeight"
                value={maxWeight}
                onChange={(e) => setMaxWeight(e.target.value)}
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
                value={minLifeSpan}
                onChange={(e) => setMinLifeSpan(e.target.value)}
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
                value={maxLifeSpan}
                onChange={(e) => setMaxLifeSpan(e.target.value)}
                placeholder="Breed's life span"
              />
            </div>
            <div>
              <select
                onChange={(e) => setTemperament(e.target.value)}
                className="listTemps"
              >
                <option hidden>Elija el temperamentos</option>
                {temperamentsDogs.map((temperament) => (
                  <option key={temperament} value={temperament}>
                    {temperament}
                  </option>
                ))}
              </select>
            </div>
            {dataDog.map((temp, i) => (
              <div key={i}>
                <h3>{temp}</h3>
                <button onClick={() => removeTemperament(temp)}>X</button>
              </div>
            ))}
          </div>
          <div>
            <button className="buttonsubmit-from">back</button>
          </div>
          <div>
            <button
              className="buttonsubmit-from"
              onClick={() => addTemperament()}
            >
              agregar raza
            </button>
          </div>
          <div>
            <button className="buttonsubmit-from" onClick={() => sendData()}>
              Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
