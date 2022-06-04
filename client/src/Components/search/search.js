import React from "react";

export default function Search() {
  return (
    <div className="buscador">
      <div>
        <input type="text" placeholder="Buscar Perro" className="campoBuscar" />
        <button type="submit" className="botonBuscar">Buscar</button>
      </div>
    </div>
  );
}
