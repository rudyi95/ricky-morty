import axios from "axios";

const BASE_CONNECTION = axios.create({
  baseURL: "https://rickandmortyapi.com/api/",
});

const characterApi = {
  getById: async (id: number) => {
    const res = await BASE_CONNECTION.get<ICharacter>(`character/${id}`);
    return res;
  },
};

export default characterApi;
