import React from "react";
import { Provider } from "react-redux";

import MainPage from "./mainPage";

import { store } from "./redux/store";

import "./App.css";

const App: React.FC = () => (
  <Provider store={store}>
    <MainPage />
  </Provider>
);

export default App;
