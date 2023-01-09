import React from "react";
import "./App.css";
import { Game } from "./components/Game";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <div className="text-center">
        <Header />
        <Game />
      </div>
    </>
  );
}

export default App;
