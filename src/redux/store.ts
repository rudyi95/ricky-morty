import { configureStore, combineReducers } from "@reduxjs/toolkit";

import characterReducer from "./reducers/character";
import charactersReducer from "./reducers/characters";

const rootReducer = combineReducers({
  characterReducer,
  charactersReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
