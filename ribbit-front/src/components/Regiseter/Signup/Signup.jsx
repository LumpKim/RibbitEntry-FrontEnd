import React, { Component } from 'react';
import './css/Signup.css';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="SignUp__Container">
        <div className="SignUpContainer__Content">
          <div className="SignUp__Header">
            <span className="SignUpHeader__Title">회원 가입</span>
          </div>
          <div className="SingUp__Body">
            <form className="SignUpBody__Form">
              <label className="SignUpForm__Email--Label" htmlFor="SignUpForm__Email">
                아이디
                <input
                  className="SignUpForm__Email"
                  id="SignUpForm__Email"
                  type="email"
                  placeholder="example@gmail.com"
                />
              </label>
              <label className="SignUpForm__Password--Label" htmlFor="SignUpForm__Password">
                비밀번호
                <input
                  className="SignUpForm__Password"
                  id="SignUpForm__Password"
                  type="password"
                  placeholder="PW"
                />
              </label>
              <label className="SignUpForm__NickName--Label" htmlFor="SignUpForm__NickName">
                닉네임
                <input
                  className="SignUpForm__NickName"
                  id="SignUpForm__NickName"
                  type="text"
                  placeholder="닉네임"
                />
              </label>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
