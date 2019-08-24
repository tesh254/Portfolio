import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Views/Home/Home";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
