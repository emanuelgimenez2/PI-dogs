import React from "react";
import { useNavigate } from "react-router-dom";
import Search from "../search/search";
import "./nav.css";
export default function Nav() {
  var history = useNavigate();

  return (
    <div>
      <nav className="navbar-nav">
        <div className="title-nav">
          Dogs
        </div>
        <div className="form-nav">
          <button
            className="button-nav"
            onClick={() => history("/home/create")}
          >
            Crear Perro
          </button>
        </div>
        <div className="search-nav">
          <Search />
        </div>
      </nav>
    </div>
  );
}
