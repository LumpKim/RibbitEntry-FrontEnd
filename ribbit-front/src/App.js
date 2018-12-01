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
            {/* Header 컴포넌트와 라우터 컴포넌트가 곂치지 않도록 block역할을 하는 엘리먼트 */}
            <div className="header__background" />
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
