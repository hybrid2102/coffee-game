import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Redirect, Route, Switch } from "react-router";
import { Game } from "./components/Game";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { Help } from "./components/Help";

function App() {
  return (
    <BrowserRouter>
      <div className="text-center">
        <Header />
        <Switch>
          <Route path="/" exact component={Game} />
          <Route path="/help" component={Help} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
