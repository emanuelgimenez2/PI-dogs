import React from "react";
import { useSelector } from "react-redux";
import "./filter.css";

export default function Filter() {
  const initialData = useSelector((state) => state.dogs);

  return (
    <div className="container-filter">
      <select defaultValue={"DEFAULT"}>
        {/* Filtro Ascendente-Descendente */}
        <option value="DEFAULT" disabled>
          Ordenar por Nombre
        </option>
        <option value="asc">A - Z</option>
        {/* Ascendente */}
        <option value="desc">Z - A</option>
        {/* Descendente */}
      </select>

      <select defaultValue={"DEFAULT"}>
        <option value="DEFAULT" disabled>
          Order By Weight
        </option>
        <option value="+weight">Lightest</option>
        {/* Mayor Peso */}
        <option value="-weight">Heaviest</option>
        {/* Menor Peso */}
      </select>

      <select defaultValue={"DEFAULT"}>
        <option value="DEFAULT" disabled>
          Filter By Temperament
        </option>
      </select>
    </div>
  );
}
