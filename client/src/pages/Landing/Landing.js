/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getDogs } from "../../actions";
import "./Landing.css";

const Landing = () => {
  var history = useNavigate();

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getDogs());
  }, []);

  return (
    <div className="Container-Landing">
      <div className="title-landing">
        <h1>
          Hola, esta es una App donde encontraras Perros, te invito a ingresar y
          buscar el tuyo!
        </h1>
      </div>
      <div className="divHome">
        <button onClick={() => history("/home")} className="button-landing">
          Ingresar
        </button>
      </div>
    </div>
  );
};

export default Landing;
