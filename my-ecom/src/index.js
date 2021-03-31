import React from "react";

import ReactDOM from "react-dom";
import App from "./App";
import { DataProvider } from "./Comenents/Context/DataProvider";

ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
