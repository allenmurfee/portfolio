import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Nav />
      <Home />
    </>
  );
}

export default App;
