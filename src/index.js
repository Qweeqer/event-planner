import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";

import { ThemeProvider } from "styled-components";

import { store } from "./redux/store";
import { theme } from "./utils/theme";
import AppGlobalStyles from "./utils/AppGlobalStyles";
import reportWebVitals from "./reportWebVitals";

import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
    <AppGlobalStyles />
  </>
   </React.StrictMode>
);

reportWebVitals();
