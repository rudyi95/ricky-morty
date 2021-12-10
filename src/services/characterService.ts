import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";
import { charactersSlice } from "../redux/reducers/characters";
import { AppDispatch } from "../redux/store";
import storageService from "./storageService";

export const getCharacters = () => (dispatch: AppDispatch) => {
  const lsCharacters = storageService.get<ICharacter[]>("characters");
  if (lsCharacters) {
    dispatch(charactersSlice.actions.getCharactersList(lsCharacters));
  } else {
    dispatch(charactersSlice.actions.getCharactersList([]));
  }
};

export const getCharacterById = createAsyncThunk(
  "character/getCharById",
  async (id: number, thunkApi) => {
    try {
      if (id > 826) {
        throw new Error("Bad ID");
      }
      const lsCharacters = storageService.get<ICharacter[]>("characters");
      const lsSameData =
        lsCharacters && storageService.findById(lsCharacters, id);

      if (lsCharacters && lsSameData) {
        return lsSameData;
      } else if (lsCharacters && !lsSameData) {
        const res = await api.getById(id);
        storageService.set("characters", [...lsCharacters, res.data]);
        return res.data;
      } else {
        const res = await api.getById(id);
        storageService.set("characters", [res.data]);
        return res.data;
      }
    } catch (e) {
      return thunkApi.rejectWithValue((e as Error).message);
    }
  }
);

export const clearCharacters = () => (dispatch: AppDispatch) => {
  storageService.remove("characters");
  dispatch(charactersSlice.actions.clearCharacters());
};

export const clearById = (id: number) => (dispatch: AppDispatch) => {
  const lsCharacters = storageService.get<ICharacter[]>("characters");
  const lsFiltered =
    lsCharacters && storageService.filterById(lsCharacters, id);
  dispatch(charactersSlice.actions.filterData(lsFiltered || []));
  storageService.set("characters", lsFiltered);
};
