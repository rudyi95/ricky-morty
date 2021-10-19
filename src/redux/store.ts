import { configureStore } from "@reduxjs/toolkit";

import characterReducer from "./reducer";

export const store = configureStore({
  reducer: characterReducer,
});
