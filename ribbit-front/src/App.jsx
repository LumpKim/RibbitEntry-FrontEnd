import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/defaultLayout/Header';
import {
  Main, User, Mypage, Following, Followers,
} from './container/index';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <React.Fragment>
        <Header />
        {/* Header 컴포넌트와 라우터 컴포넌트가 곂치지 않도록 block역할을 하는 엘리먼트 */}
        <div className="header__background" />
        <Switch>
          <Route path="/" component={Main} exact />
          {/* 메인 페이지 */}

          <Route path="/:user" component={User} exact />
          {/* 유저 정보 페이지 */}

          <Route path="/user/:user" component={Mypage} exact />
          {/* 마이페이지 */}

          <Route path="/user/:user/following" component={Following} exact />
          {/* 마이페이지 팔로잉 */}

          <Route path="/user/:user/followers" component={Followers} exact />
          {/* 마이페이지 팔로워 */}
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  </div>
);

export default App;
