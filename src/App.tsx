import React, { StrictMode } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Redirect, Route, Switch } from "react-router";
import { Game } from "./pages/Game";
import { Header } from "./pages/Header";
import { About } from "./pages/About";
import { Help } from "./pages/Help";
import { ErrorPage } from "./pages/ErrorPage";
import { Page } from "./helpers/Page";

function App() {
  return (
    <BrowserRouter>
      <StrictMode>
        <Header />
        <Page>
          <Switch>
            <Route path="/" exact component={Game} />
            <Route path="/help" component={Help} />
            <Route path="/about" component={About} />
            <Route path="*" component={ErrorPage} />
          </Switch>
        </Page>
      </StrictMode>
    </BrowserRouter>
  );
}

export default App;
