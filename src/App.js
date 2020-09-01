import React from "react";
import Nav from "./components/Nav";
import { Switch, Route } from "react-router-dom";
import Main from "./components/Main";
import Table from "./components/Table";

const App = () => {
  return (
    <>
      <Nav />

      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/items" component={Table} />
      </Switch>
    </>
  );
};

export default App;
