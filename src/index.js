import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { productLists } from "./database";
import App from "./App";
import { CartProvider } from "./cart-context";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <CartProvider item={{ productLists }}>
      <App />
    </CartProvider>
  </StrictMode>,
  rootElement
);
