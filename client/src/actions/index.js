import axios from "axios";

import {
  GET_DOGS,
  GET_TEMPERAMENTS,
  FILTER_BY_TEMPERAMENTS,
  GET_DOG_DETAIL,
  FILTER_CREATED,
  ORDER_BY_NAME,
  ORDER_BY_WEIGHT,
  GET_DOG_BY_NAME,
  POST_DOG_SUCESS,
} from "../Reducer/constant";

export function getDogs() {
  return async function (dispatch) {
    // Le pasamos la ruta del back para que me traiga todos los dogs.

    var json = await axios.get("http://localhost:3001/dogs");

    return dispatch({
      type: GET_DOGS,
      payload: json.data,
    });
  };
}

export function getTemperaments() {
  return async function (dispatch) {
    // Le pasamos la ruta del back para que me traiga todos los dogs.
    var json = await axios.get("http://localhost:3001/temperament");
    return dispatch({
      type: GET_TEMPERAMENTS,
      payload: json.data,
    });
  };
}

export function postDog(payload) {
  return async function (dispatch) {
    // Le pasamos la ruta del back para que me traiga todos los dogs.
    axios.post("http://localhost:3001/dog", payload)
      .then(function (response) {
        const data = JSON.parse(response.status);
        if (data === 200) {
          dispatch({type: POST_DOG_SUCESS});
          alert("Raza creada correctamente")
        
        }else{
            alert("Error");
          }
     
      })
      .catch(function (error) {
        console.log(error);
      });
  };
}

// Filtrar por temperament.
// El payload va a ser el estado que me va a llegar.
export function filterDogsByTemperament(payload) {
  // console.log("Entre a la Action", payload);
  return {
    type: FILTER_BY_TEMPERAMENTS,
    payload,
  };
}

export function filterCreated(payload) {
  return {
    type: FILTER_CREATED,
    payload,
  };
}

export function orderByName(payload) {
  return {
    type: ORDER_BY_NAME,
    payload,
  };
}

export function orderByWeight(payload) {
  return {
    type: ORDER_BY_WEIGHT,
    payload,
  };
}

export function getDogDetail(id) {
  return async function (dispatch) {
    try {
      var json = await axios.get(`http://localhost:3001/dogs/${id}`);
      return dispatch({
        type: GET_DOG_DETAIL,
        payload: json.data,
      });
    } catch (error) {
      alert("error al buscar perro por ID");
    }
  };
}

export function getDogName(name) {
  // Por payload me va a llegar lo que el usuario ponga en la barra de busqueda
  // (req.query->api->routes->index->router.get('/dogs'))
  // Le pego la ruta y le digo ejecutamela con lo que te estoy pasando como "name"
  return async function (dispatch) {
    try {
      var json = await axios.get("http://localhost:3001/dogs?name=" + name);
      return dispatch({
        type: GET_DOG_BY_NAME,
        payload: json.data, // La respuesta de la promesa guardada en "json"
      });
    } catch (error) {
      alert("error: " + error);
    }
  };
}
