import axios from "axios";

const GET_DOGS = "GET_DOGS";
 const GET_TEMPERAMENTS = "GET_TEMPERAMENTS";
 const FILTER_BY_TEMPERAMENTS = "FILTER_BY_TEMPERAMENTS";
// const GET_DOGS_SUCCESS = "GET_DOGS_SUCCESS";
// const GET_DOGS_FAILURE = "GET_DOGS_FAILURE";




export function getDogs() {
  return async function (dispatch) {
    // Le pasamos la ruta del back para que me traiga todos los dogs.

    var json = await axios.get("http://localhost:3001/dogs");

    console.log('===========>',json.data);

    return dispatch({
      type: GET_DOGS,
      payload: json.data,
    });
  };
}

export function getTemperaments() {
  return async function (dispatch) {
    // Le pasamos la ruta del back para que me traiga todos los dogs.
    var json = await axios.get("/temperaments");
    return dispatch({
      type: GET_TEMPERAMENTS,
      payload: json.data,
    });
  };
}

export function postDog(payload) {
  return async function (dispatch) {
    // Le pasamos la ruta del back para que me traiga todos los dogs.
    var response = await axios.post("/dog", payload);
    console.log(response);
    return response;
  };
}

// Filtrar por temperament.
// El payload va a ser el estado que me va a llegar.
export function filterDogsByTemperament(payload) {
  console.log("Entre a la Action", payload);
  return {
    type: FILTER_BY_TEMPERAMENTS,
    payload,
  };
}

export function filterCreated(payload) {
  return {
    type: "FILTER_CREATED",
    payload,
  };
}

export function orderByName(payload) {
  return {
    type: "ORDER_BY_NAME",
    payload,
  };
}

export function orderByWeight(payload) {
  return {
    type: "ORDER_BY_WEIGHT",
    payload,
  };
}

export function getDogDetail(id) {
  return async function (dispatch) {
    try {
      var json = await axios.get(`/dogs/${id}`);
      return dispatch({
        type: "GET_DOG_DETAIL",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getDogName(name) {
  // Por payload me va a llegar lo que el usuario ponga en la barra de busqueda
  // (req.query->api->routes->index->router.get('/dogs'))
  // Le pego la ruta y le digo ejecutamela con lo que te estoy pasando como "name"
  return async function (dispatch) {
    try {
      var json = await axios.get("/dogs?name=" + name);
      return dispatch({
        type: "GET_DOG_BY_NAME",
        payload: json.data, // La respuesta de la promesa guardada en "json"
      });
    } catch (error) {
      console.log(error);
    }
  };
}
