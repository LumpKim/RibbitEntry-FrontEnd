import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/defaultLayout/Header';
import { Main, User, Mypage } from './container/index';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <React.Fragment>
        <Header />
        {/* Header 컴포넌트와 라우터 컴포넌트가 곂치지 않도록 block역할을 하는 엘리먼트 */}
        <div className="header__background" />
        <Switch>
          {/* 메인 페이지 */}
          <Route path="/" component={Main} exact />

          {/* 유저 정보 페이지 */}
          <Route path="/:user" component={User} exact />

          {/* 마이페이지 */}
          <Route path="/user/:user" component={Mypage} exact />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  </div>
);

export default App;
