import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Game } from "./components/Game";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Gioco Caffè</h1>
      <Game />
      </header>
    </div>
  );
}

export default App;
