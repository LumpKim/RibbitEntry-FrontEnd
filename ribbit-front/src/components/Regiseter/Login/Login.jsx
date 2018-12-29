import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="LoginContainer">
        <form className="LoginContainer__LoginForm">
          <div className="LoginForm__UserId">
            <span className="UserId__label">로그인</span>
            <input placeholder="example@gmail.com" className="UserId__Input" type="email" />
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
