import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/defaultLayout/Header';
import {
  Main, User, MainMyPage, Following, Followers, Login, Signup,
} from './container/index';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Whether: false,
    };
  }

  HandleWhether = () => {
    this.setState({
      Whether: true,
    });
  };

  render() {
    const { Whether } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
            <Header Whether={Whether} />
            {/* Header 컴포넌트와 라우터 컴포넌트가 곂치지 않도록 block역할을 하는 엘리먼트 */}
            <div className="header__background" />
            <Switch>
              <Route
                path="/"
                component={() => <Main Whether={Whether} HandleWhether={this.HandleWhether} />}
                exact
              />
              {/* 메인 페이지 */}

              <Route path="/:user" component={User} exact />
              {/* 유저 정보 페이지 */}

              <Route path="/username/:user" component={MainMyPage} exact />
              {/* 마이페이지 */}

              <Route path="/username/:user/following" component={Following} exact />
              {/* 마이페이지 팔로잉 */}

              <Route path="/username/:user/followers" component={Followers} exact />
              {/* 마이페이지 팔로워 */}

              <Route path="/user/login" component={Login} exact />
              {/* 로그인 페이지 */}

              <Route path="/user/signup" component={Signup} exact />
              {/* 회원가입 페이지 */}
            </Switch>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
