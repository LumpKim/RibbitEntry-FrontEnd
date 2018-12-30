import React, { Component } from 'react';
import './css/Signup.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Id: '',
      PassWord: '',
      NickName: '',
      UserException: false,
    };
  }

  HandleInput = (e) => {
    const { Id, PassWord, NickName } = this.state;
    this.setState({
      [e.target.name]: e.target.value,
      UserException: !!(
        /^([a-z0-9+\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,12})$/.test(Id)
        && /^[a-z0-9_-]+/.test(PassWord)
        && /^[a-z0-9_-]+/.test(NickName)
      ),
    });
  };

  PostUserData = () => {
    const { Id, PassWord, NickName } = this.state;
    const data = JSON.stringify({
      userId: `${Id}`,
      password: `${PassWord}`,
      nickname: `${NickName}`,
    });

    if (
      /^([a-z0-9+\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,12})$/.test(Id)
      && /^[a-z0-9_-]+/.test(PassWord)
      && /^[a-z0-9_-]+/.test(NickName)
    ) {
      axios
        .post('http://ribbit.jaehoon.kim:5000/api/sign-up', data, {
          headers: { 'Content-Type': 'application/json' },
        })
        .then((res) => {
          alert('회원가입이 완료되었습니다.');
        })
        .catch((res) => {
          alert('동일한 아이디가 존재합니다.');
        });
    } else if (!/^([a-z0-9+\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,12})$/.test(Id)) {
      alert('아이디가 옳바르지 않습니다.');
    } else if (!/[a-z0-9_-]+/.test(PassWord)) {
      alert('비밀번호가 옳바르지 않습니다.');
    } else if (!/^[각-힇a-z0-9_-]+/.test(NickName)) {
      alert('닉네임이 옳바르지 않습니다.');
    }
  };

  render() {
    const { UserException } = this.state;
    return (
      <div className="SignUp__Container">
        <div className="SignUpContainer__Content">
          <div className="SignUp__Header">
            <span className="SignUpHeader__Title">회원 가입</span>
          </div>
          <div className="SignUp__Body">
            <form className="SignUpBody__Form">
              <label className="SignUpForm__Input--Label" htmlFor="SignUpForm__Email">
                아이디
                <input
                  autoComplete="off"
                  name="Id"
                  className="SignUpForm__Input"
                  id="SignUpForm__Email"
                  type="email"
                  placeholder="example@gmail.com"
                  onChange={e => this.HandleInput(e)}
                />
              </label>
              <label className="SignUpForm__Input--Label" htmlFor="SignUpForm__Password">
                비밀번호
                <input
                  autoComplete="off"
                  name="PassWord"
                  className="SignUpForm__Input"
                  id="SignUpForm__Password"
                  type="password"
                  placeholder="PW"
                  onChange={e => this.HandleInput(e)}
                />
              </label>
              <label className="SignUpForm__Input--Label" htmlFor="SignUpForm__NickName">
                닉네임
                <input
                  autoComplete="off"
                  name="NickName"
                  className="SignUpForm__Input"
                  id="SignUpForm__NickName"
                  type="text"
                  placeholder="닉네임"
                  onChange={e => this.HandleInput(e)}
                />
              </label>
              <Link
                to={UserException ? '/' : '/user/signup'}
                className="SignUpForm__Submit"
                onClick={() => this.PostUserData()}
              >
                <span className="SignUpSubmit__Title">가입하기</span>
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
