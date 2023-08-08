import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { theme } from "./utils/theme";
import AppGlobalStyles from "./utils/AppGlobalStyles";
import reportWebVitals from "./reportWebVitals";

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
