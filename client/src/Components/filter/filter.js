/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./filter.css";
import { getDogs, getTemperaments } from "../../actions";
import {
  FILTER_BY_TEMPERAMENTS,
  FILTER_CREATED,
  ORDER_BY_NAME,
  ORDER_BY_WEIGHT,
} from "../../actions/actions";

export default function Filter() {
  const temperamentsData = useSelector((state) => state.temperaments);
  const dispatch = useDispatch();
  const [order, setOrder] = useState(false);
  const [weight, setWeight] = useState(false);
  const [temperament, setTemperament] = useState(false);
  
  const [created, setCreated] = useState(false);

  //*******************Filtros******************* */

  async function handleOrderByName() {
    await dispatch(getDogs());
    await dispatch({ type: ORDER_BY_NAME, payload: order });
  }

  async function handleOrderByWeight() {
    await dispatch(getDogs());
    await dispatch({ type: ORDER_BY_WEIGHT, payload: weight });
  }
  async function handleTemperament() {
    await dispatch(getDogs());
    await dispatch({ type: FILTER_BY_TEMPERAMENTS, payload: temperament });
  }
  async function handleCreated() {
    await dispatch(getDogs());
    await dispatch({ type: FILTER_CREATED, payload: created });
  }
  useEffect(() => {
    dispatch(getTemperaments());
  }, []);

  useEffect(() => {
   order && handleOrderByName();
  }, [order]);
  useEffect(() => {
   weight && handleOrderByWeight();
  }, [weight]);

  useEffect(() => {
    temperament && handleTemperament();
  }, [temperament]);

  useEffect(() => {
    created && handleCreated();
  }, [created]);


  return (
    <div className="card-filter">
      <div className="filters">
        <select
          onChange={(e) => setOrder(e.target.value)}
          className="select-filter"
        >
          <option>Ordenar Alfabeticamente</option>
          <option value="asc">A - Z</option>

          <option value="desc">Z - A</option>
        </select>

        <select
          className="select-filter"
          onChange={(e) => setWeight(e.target.value)}
        >
          <option>Ordenar por peso</option>
          <option value="+peso">Mayor Peso</option>

          <option value="-peso">Menor Peso</option>
        </select>
        <select
          onChange={(e) => setTemperament(e.target.value)}
          className="select-filter"
        >
          <option>Temperamentos</option>
          {temperamentsData.map((temp, i) => (
            <option value={temp} key={i}>
              {temp}
            </option>
          ))}
        </select>

        <select
          defaultValue={"DEFAULT"}
          onChange={(e) => setCreated(e.target.value)}
          className="select-filter"
        >
          <option value="DEFAULT" disabled>
            Creados/API
          </option>
          <option value="Api">API</option>
          <option value="Db">Creados</option>
        </select>
      </div>
    </div>
  );
}
