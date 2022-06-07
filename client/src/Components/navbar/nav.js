import React from "react";
import { useNavigate } from "react-router-dom";
import Search from "../search/search";
import "./nav.scss";
export default function Nav() {
  var history = useNavigate();
  
  return (
    <div>
      <nav className="navbar">
        <div className="title-nav">
          <h1>Aqui encontraras los perritos que quieras, busca el tuyo!</h1>
        </div>
        <div className="form-nav">
          <button className="button-nav"onClick={() => history("/home/create")}>Crear Perro</button>
        </div>
        <div className="search-nav">
          <Search />
        </div>
      </nav>
    </div>
  );
}
