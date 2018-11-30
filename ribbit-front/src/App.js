import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Header } from "./components/index";
import { Main } from "./container/index";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
            <Header />
            <Switch>
              {/* 메인 페이지*/}
              <Route path="/" component={Main} exact />

              {/*  */}
            </Switch>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
