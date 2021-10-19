import axios from "axios";

const BASE_CONNECTION = axios.create({
  baseURL: "https://rickandmortyapi.com/api/",
});

const characterApi = {
  getCharacterById: (id: number) => BASE_CONNECTION.get(`character/${id}`),
};

export default characterApi;
