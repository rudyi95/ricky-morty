import React, { Suspense } from "react";
import { Provider } from "react-redux";

import { store } from "./redux/store";

import "./App.css";
const Main = React.lazy(() => import("./mainPage"));

const App: React.FC = () => (
  <Provider store={store}>
    <Suspense fallback={<div>Loading...</div>}>
      <Main />
    </Suspense>
  </Provider>
);

export default App;
