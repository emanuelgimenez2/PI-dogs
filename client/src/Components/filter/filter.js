import React from "react";
import "./filter.css"

export default function Filter() {
  return (
    <div className="container-filter">
      <select defaultValue={"DEFAULT"}>
        {/* Menu desplegable con opciones */}
        {/* Filtro Ascendente-Descendente */}
        <option value="DEFAULT" disabled>
          Ordenar por Nombre
        </option>
        <option value="asc">A - Z</option>
        {/* Ascendente */}
        <option value="desc">Z - A</option>
        {/* Descendente */}

        {/* Que necesito para mandar las cosas por 'payload'? Un value en <option>
                    que me permite acceder y preguntarme... Dentro del <select> tengo <option>
                    esas 'option' tienen un "value" que permiten que al hacer click desde el front
                    haga toda la logica y que la action lo entienda, si ese value es 'asc' hace
                     tal cosa, si el value el 'desc' hace tal otra*/}
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
