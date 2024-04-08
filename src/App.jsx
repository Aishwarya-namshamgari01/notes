import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Typography } from "@mui/material";
import { Provider } from "react-redux";
import store from "./redux/store.";
import Notes from "./components/Home";
import Home from "./components/Home";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Home />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
