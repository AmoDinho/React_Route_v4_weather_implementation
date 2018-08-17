import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Warnings from "./Warnings";
import Days from "./Days";
const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/warnings" component={Warnings} />
      <Route path="/days" component={Days} />
    </Switch>
  </main>
);

export default Main;
