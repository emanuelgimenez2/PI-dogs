// import React, { Link } from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { postDog, getDogTemperament } from "../../actions";
import "./create.css";

// import "./dogCreation.css";

export default function Create() {
  var history = useNavigate();
  const dispatch = useDispatch()
    const temperament = useSelector((state) => state.temperaments)
    const [errors, setErrors] = useState({})

    useEffect(() => {
      dispatch(getDogTemperament())
  }, [dispatch]);

  const [input, setInput] = useState({
    name: "",
    minimHeight: "", 
    maximHeight: "",
    minimWeight: "",
    maximWeight: "",
    maxLifeSpan: "",
    minLifeSpan: "",
    image: "",
    temperament: []
})
  function handleChange(e){
    console.log(e.target.value)
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    }

  const handleClick = () => {
    history("/home");
    useDispatch(postDog(input))
            Navigate("/home");
            alerta("Perro creado")
            setInput({
                name: "",
                minimHeight: "", 
                maximHeight: "",
                minimWeight: "",
                maximWeight: "",
                maxLifeSpan: "",
                minLifeSpan: "",
                image: "",
                temperament: []
        })
        }
  

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
              value= {input.name = input.name.substring(0, 1).toUpperCase() + input.name.substring(1)} 
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

        {/* <div className="temperamentsItems">
          <button className="buttonRemove">Delete
            
          </button>
        </div> */}
        <div>
          <button className="buttonsubmit-from"    type="submit">
            Guardar
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}
