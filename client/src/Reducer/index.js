import {
  GET_DOGS,
  GET_TEMPERAMENTS,
  FILTER_BY_TEMPERAMENTS,
  FILTER_CREATED,
  ORDER_BY_NAME,
  ORDER_BY_WEIGHT,
  GET_DOG_BY_NAME,
  POST_DOG,
  
}from "./constant"

const initialState = {
  dogs: [],
  alldogs: [],
  detail: [],
  temperaments: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_DOGS":
      return {
        ...state,
        dogs: action.payload,
        alldogs: action.payload,
      };

    case "GET_TEMPERAMENTS":
      return {
        ...state,
        temperaments: action.payload,
      };

    case "FILTER_BY_TEMPERAMENTS":
      // console.log("Entre al Reducer ", action.payload);
      const alldogs = state.alldogs;
      const temperamentsFiltered = alldogs.filter((el) =>
        el.temperament?.includes(action.payload)
      );

      // console.log("temperamentsFiltered", temperamentsFiltered);

      return {
        ...state,
        dogs: temperamentsFiltered,
      };

    case "FILTER_CREATED":
      const createdFilter =
        action.payload === "Created"
          ? state.alldogs.filter((el) => el.createdInDb)
          : state.alldogs.filter((el) => !el.createdInDb);

      return {
        ...state,
        dogs: createdFilter, // Si el payload es 'All' devolveme
        //todo(alldogs)
        // Si no es 'All' devolve los creados
      };

    case "ORDER_BY_NAME":
      const sortedArr =
        action.payload === "asc"
          ? /* Ascendente */
            state.dogs.sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (a.name < b.name) {
                return -1;
              }
              return 0;
            })
          : /* Descendente */
            state.dogs.sort(function (a, b) {
              if (a.name > b.name) {
                return -1;
              }
              if (a.name < b.name) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        dogs: sortedArr,
      };

    case "ORDER_BY_WEIGHT":
      const sortedArray =
        action.payload === "+weight"
          ? /* + Pesados*/
            state.dogs.sort(function (a, b) {
              if (parseInt(a.weight[0]) > parseInt(b.weight[0])) {
                return 1;
              }
              if (parseInt(a.weight[0]) < parseInt(b.weight[0])) {
                return -1;
              }
              return 0;
            })
          : /* - Pesados */
            state.dogs.sort(function (a, b) {
              if (parseInt(a.weight[0]) > parseInt(b.weight[0])) {
                return -1;
              }
              if (parseInt(a.weight[0]) < parseInt(b.weight[0])) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        dogs: sortedArray,
      };

    case "GET_DOG_BY_NAME":
      return {
        ...state,
        dogs: action.payload,
      };

    case "POST_DOG":
      return {
        ...state,
      };

    case "GET_DOG_DETAIL":
      return {
        ...state,
        detail: action.payload,
      };

    default: {
      return state;
    }
  }
}
export default rootReducer;
