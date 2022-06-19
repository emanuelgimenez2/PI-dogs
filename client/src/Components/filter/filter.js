import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./filter.css";
import {
  filterCreated,
  filterDogsByTemperament,
  getDogs,
  getTemperaments,
  orderByName,
  orderByWeight,
} from "../../actions";

export default function Filter() {
  const dispatch = useDispatch();
  const temperamentsHome = useSelector((state) => state.temperaments);



  const incialData = useSelector((state) => state.dogs);
  const [order, setOrder] = useState([]);

  // Cambiar estado del Numero de Pagina

  //*******************datos******************* */
    useEffect(() => {
    dispatch(getDogs());
    dispatch(getTemperaments());
  }, [dispatch]);
/*
  //*******************Filtros******************* */
  /**const [order, setOrder] = useState("");

  function handleClick(e) {
    e.preventDefault();
    dispatch(getDogs());
  }

  function handleSelect(e) {
    e.preventDefault();
    dispatch(filterDogsByTemperament(e.target.value));
  }
*/
  function handleFilterCreated(e) {
    console.log( e,"===================handleFilterCreated===============")
    e.preventDefault();
    dispatch(filterCreated(e.target.value));
  }

  function handleOrderByName(e) {
    console.log( e,"===================handleOrderByName===============")
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    // setCurrentPage(1);
    setOrder(`Ordened ${e.target.value}`);
  }
  /*
  function handleOrderByWeight(e) {
    e.preventDefault();
    dispatch(orderByWeight(e.target.value));
    setCurrentPage(1);
    setOrder(`Ordened ${e.target.value}`); */

  return (
    <div className="card-filter">
      <div className="filters">
        {" "}
        <select
          defaultValue={"DEFAULT"}
          onChange={(e) =>  handleOrderByName(e)}
          className="select-filter"

        >
          <option value="DEFAULT" disabled>
            Order By Name
          </option>
          <option value="asc">A - Z</option>

          <option value="desc">Z - A</option>
        </select>
        <select
          defaultValue={"DEFAULT"}
          onChange={""}
          className="select-filter"
        >
          <option value="DEFAULT" disabled>
            Order By Weight
          </option>
          <option value="+weight">Lightest</option>

          <option value="-weight">Heaviest</option>
        </select>
        <select
          defaultValue={"DEFAULT"}
          onChange={""}
          className="select-filter"
        >
          <option value="DEFAULT" disabled>
            Filter By Temperament
          </option>
          {temperamentsHome.map((temp, key) => (
            <option value={temp.name} key={key}>
              {temp.name}
            </option>
          ))}
        </select>
        <select
          defaultValue={"DEFAULT"}
          onChange={(e) =>  handleFilterCreated(e)}
          className="select-filter"
        >
          <option value="DEFAULT" disabled>
            Filter Created
          </option>
          <option value="All">All</option>
          <option value="Created">Created</option>
        </select>
      </div>
    </div>
  );
}
