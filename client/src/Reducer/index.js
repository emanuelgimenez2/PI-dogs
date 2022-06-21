import { getDogs } from "../actions";
import {
  GET_DOGS,
  GET_TEMPERAMENTS,
  FILTER_BY_TEMPERAMENTS,
  GET_DOG_DETAIL,
  FILTER_CREATED,
  ORDER_BY_NAME,
  ORDER_BY_WEIGHT,
  GET_DOG_BY_NAME,
  POST_DOG,
  POST_DOG_SUCESS,
} from "./constant";

function SortArrayAZ(x, y) {
  if (x.name < y.name) {
    return -1;
  }
  if (x.name > y.name) {
    return 1;
  }
  return 0;
}

function SortArrayZA(x, y) {
  if (x.name > y.name) {
    return -1;
  }
  if (x.name < y.name) {
    return 1;
  }
  return 0;
}

const initialState = {
  dogs: [],
  detail: [],
  temperaments: [],
  dogsByName: [],
  dogsByWeigth: [],
  dogsByCreated: [],
  dogsByTemperament: [],
  post:false
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DOGS:
      return {
        ...state,
        dogs: action.payload,
      };

    case GET_TEMPERAMENTS:
      return {
        ...state,
        temperaments: action.payload,
      };
      case POST_DOG_SUCESS :

      return{
        ...state,
        post:true,
      }

    case FILTER_BY_TEMPERAMENTS:
      const alldogs = state.dogs;
      const temperamentsFiltered = alldogs.filter((el) =>
        el.temperament?.includes(action.payload)
      );

      return {
        ...state,
        dogs: temperamentsFiltered,
        dogsByTemperament: temperamentsFiltered,
      };

    case FILTER_CREATED:
      const createdFilter =
        action.payload === "Db"
          ? state.dogs.filter((dog) => dog.createdAtDb === null)
          : state.dogs.filter((dog) => typeof dog.id === "number");

      return {
        ...state,
        dogs: createdFilter,
        dogsByCreated: createdFilter,
      };

    case ORDER_BY_NAME:
      const orderByName =
        action.payload === "asc"
          ? state.dogs.sort(SortArrayAZ)
          : state.dogs.sort(SortArrayZA);

      return {
        ...state,
        dogs: orderByName,
        dogsByName: orderByName,
      };

    case ORDER_BY_WEIGHT:
      const sortedArray =
        action.payload === "-peso"
          ? state.dogs.sort(function (a, b) {
              if (parseInt(a.weight[0]) > parseInt(b.weight[0])) {
                return 1;
              }
              if (parseInt(a.weight[0]) < parseInt(b.weight[0])) {
                return -1;
              }
              return 0;
            })
          : state.dogs.sort(function (a, b) {
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
        dogsByWeigth: sortedArray,
      };

    case GET_DOG_BY_NAME:
      return {
        ...state,
        dogs: action.payload,
      };

    case POST_DOG:
      return {
        ...state,
      };

    case GET_DOG_DETAIL:
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
