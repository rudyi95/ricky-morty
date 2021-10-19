import api from "../../api";
import {
  CLEAR_CHARACTERS,
  CLEAR_CHARACTER_BY_ID,
  GET_CHARACTERS,
  GET_CHARACTER_BY_ID,
  LOADING,
  SET_ERROR,
} from "./types";

export const getCharacters = () => (dispatch: any) => {
  caches.open("data").then((cache) => {
    cache.keys().then((keys) => {
      keys.forEach((request) => {
        cache
          .match(request.url)
          .then((res: any) => res.body)
          .then((stream) => {
            return new Response(stream, {
              headers: { "Content-Type": "text/html" },
            }).text();
          })
          .then((res) => {
            dispatch({
              type: GET_CHARACTERS,
              payload: JSON.parse(res),
            });
          });
      });
    });
  });
};

export const getCharacterById = (id: number) => (dispatch: any) => {
  dispatch({
    type: LOADING,
    payload: true,
  });
  caches.open("data").then((cache) => {
    cache
      .match(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res?.body)
      .then((stream) => {
        return new Response(stream, {
          headers: { "Content-Type": "text/html" },
        }).text();
      })
      .then((res) => {
        dispatch({
          type: GET_CHARACTER_BY_ID,
          payload: JSON.parse(res),
        });
      })
      .then(() => {
        dispatch({
          type: LOADING,
          payload: false,
        });
      })
      .catch(() => {
        api
          .getCharacterById(id)
          .then((res) => {
            caches
              .open("data")
              .then((cache) =>
                cache.add(`https://rickandmortyapi.com/api/character/${id}`)
              );
            dispatch({
              type: GET_CHARACTER_BY_ID,
              payload: res.data,
            });
          })
          .then(() => {
            dispatch({
              type: LOADING,
              payload: false,
            });
          })
          .catch((err) => {
            dispatch({
              type: SET_ERROR,
              payload: id > 671 ? "Character not found" : err,
            });
            dispatch({
              type: LOADING,
              payload: false,
            });
          });
      });
  });
};

export const clearCharacters = () => (dispatch: any) => {
  caches.open("data").then((cache) => {
    cache
      .keys()
      .then((keys) => {
        keys.forEach((request) => {
          cache.delete(request.url);
        });
      })
      .then(
        dispatch({
          type: CLEAR_CHARACTERS,
        })
      );
  });
};

export const clearById = (id: number) => (dispatch: any) => {
  caches
    .open("data")
    .then((cache) => {
      cache
        .match(`https://rickandmortyapi.com/api/character/${id}`)
        .then((res: any) => cache.delete(res.url));
    })
    .then(
      dispatch({
        type: CLEAR_CHARACTER_BY_ID,
        payload: id,
      })
    );
};
