import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IProps {
  data: ICharacter[];
  loading: boolean;
  success: boolean;
  error: string;
}

export const initialState: IProps = {
  data: [],
  loading: false,
  success: false,
  error: "",
};

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    getCharactersList: (state, action: PayloadAction<ICharacter[]>) => {
      state.data = action.payload;
    },
    clearCharacters: (state) => {
      state.data = [];
    },
    filterData: (state, action: PayloadAction<ICharacter[]>) => {
      state.data = action.payload;
    },
  },
});

export default charactersSlice.reducer;
