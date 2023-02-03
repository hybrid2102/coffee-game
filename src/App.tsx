import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router";
import { Game } from "./pages/Game/Game";
import { Header } from "./components/Header";
import { About } from "./pages/About";
import { Help } from "./pages/Help";
import { NotFound } from "./pages/NotFound";
import { PageLayout } from "./components/PageLayout";
import { GameRange } from "./interfaces/GameRange";

import { Provider } from "react-redux";

import { store } from "./redux/store";
export interface GameSettings {
  defaultRange: GameRange;
}

const gameContext: GameSettings = {
  defaultRange: { min: 1, max: 1000 },
};

export const GameContext = React.createContext<GameSettings>(gameContext);

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Provider store={store}>
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
      </Provider>
    </BrowserRouter>
  );
}

export default App;
