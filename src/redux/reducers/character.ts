import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCharacterById } from "../../services/characterService";

interface IProps {
  character?: ICharacter;
  loading: boolean;
  error: string;
  success: boolean;
}

export const initialState: IProps = {
  character: undefined,
  loading: false,
  success: false,
  error: "",
};

export const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {},
  extraReducers: {
    [getCharacterById.fulfilled.type]: (
      state,
      action: PayloadAction<ICharacter>
    ) => {
      state.loading = false;
      state.error = "";
      state.character = action.payload;
    },
    [getCharacterById.pending.type]: (state) => {
      state.loading = true;
    },
    [getCharacterById.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.loading = false;
      state.character = undefined;
      state.error = action.payload;
    },
  },
});

export default characterSlice.reducer;
