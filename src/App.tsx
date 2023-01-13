import React, { StrictMode, useState } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Redirect, Route, Switch } from "react-router";
import { Game } from "./pages/Game/Game";
import { Header } from "./Components/Header";
import { About } from "./pages/About";
import { Help } from "./pages/Help";
import { NotFound } from "./pages/NotFound";
import { PageLayout } from "./Components/PageLayout";

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
      <Header />
      <GameContext.Provider value={gameContext}>
        <PageLayout>
          <Switch>
            <Route path="/" exact component={Game} />
            <Route path="/help" component={Help} />
            <Route path="/about" component={About} />
            <Route path="*" component={NotFound} />
          </Switch>
        </PageLayout>
      </GameContext.Provider>
    </BrowserRouter>
  );
}

export default App;
