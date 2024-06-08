import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/index.js";
import axios from "axios";

axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.baseURL = import.meta.env.VITE_API_URL;
axios.defaults.timeout = import.meta.env.VITE_TIMEOUT;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
