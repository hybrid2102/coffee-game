import React, { StrictMode, useState } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Redirect, Route, Switch } from "react-router";
import { Game } from "./pages/Game";
import { Header } from "./pages/Header";
import { About } from "./pages/About";
import { Help } from "./pages/Help";
import { NotFound } from "./pages/NotFound";
import { Page } from "./helpers/Page";

export const GameContext = React.createContext<any>(null);

function App() {
  const [error, setError] = useState("");

  const gameContext = {
    defaultMin: 1,
    defaultMax: 1000,
    error: error,
    setError: setError,
  };

  return (
    <BrowserRouter>
      <StrictMode>
        <Header />
        <GameContext.Provider value={gameContext}>
          <Page>
            <Switch>
              <Route path="/" exact component={Game} />
              <Route path="/help" component={Help} />
              <Route path="/about" component={About} />
              <Route path="*" component={NotFound} />
            </Switch>
          </Page>
        </GameContext.Provider>
      </StrictMode>
    </BrowserRouter>
  );
}

export default App;
