import {
  CLEAR_CHARACTERS,
  CLEAR_CHARACTER_BY_ID,
  GET_CHARACTERS,
  GET_CHARACTER_BY_ID,
  LOADING,
  SET_ERROR,
} from "./actions/types";
import find from "lodash/find";
import { filter } from "lodash";

const initialState: ICharacterReducer = {
  results: [],
  character: undefined,
  loading: false,
  error: undefined,
};

const getCharacters = (state: ICharacterReducer, payload: any) => {
  state = { ...state, results: [...state.results, payload] };

  return state;
};

const getCharacterById = (state: ICharacterReducer, payload: any) => {
  const isCharacter = !find(state.results, (item) => item.id === payload.id);
  const newCharacter = [...state.results, payload];
  state = {
    ...state,
    results: isCharacter ? newCharacter : state.results,
    character: payload,
    error: undefined,
  };

  return state;
};

const clearCharacters = (state: ICharacterReducer) => {
  state = initialState;
  return state;
};

const clearCharacterById = (state: ICharacterReducer, payload: any) => {
  const res = filter(state.results, (item) => item.id !== payload);
  state = { ...state, results: res, character: undefined };

  return state;
};

const errorHandler = (state: ICharacterReducer, payload: any) => {
  state = {
    ...initialState,
    results: state.results,
    error: payload,
  };
  return state;
};

const loadingHandler = (state: ICharacterReducer, payload: any) => {
  state = { ...state, loading: payload };
  return state;
};

const characterReducer = (state: any = initialState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case GET_CHARACTERS: {
      return getCharacters(state, payload);
    }
    case GET_CHARACTER_BY_ID: {
      return getCharacterById(state, payload);
    }
    case CLEAR_CHARACTERS: {
      return clearCharacters(state);
    }
    case CLEAR_CHARACTER_BY_ID: {
      return clearCharacterById(state, payload);
    }
    case SET_ERROR: {
      return errorHandler(state, payload);
    }
    case LOADING: {
      return loadingHandler(state, payload);
    }
    default: {
      return state;
    }
  }
};

export default characterReducer;
