import React, { Suspense } from "react";
import { Provider } from "react-redux";

import { setupStore } from "./redux/store";

import "./App.css";

const Main = React.lazy(() => import("./mainPage"));

const App: React.FC = () => {
  const store = setupStore();

  return (
    <Provider store={store}>
      <Suspense fallback={<div>Loading...</div>}>
        <Main />
      </Suspense>
    </Provider>
  );
};

export default App;
