import React, { Component } from 'react';
import './css/Login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Id: '',
      PassWord: '',
      UserException: false,
    };
  }

  HandleInput = (e) => {
    const { Id, PassWord } = this.state;
    this.setState({
      [e.target.name]: e.target.value,
      UserException: !!(/^[a-z0-9+\.-]+/.test(Id) && /^[a-z0-9_-]+/.test(PassWord)),
    });
  };

  PostUserData = () => {
    const { Id, PassWord } = this.state;
    const { HandleWhether } = this.props;
    const data = JSON.stringify({
      userId: `${Id}`,
      password: `${PassWord}`,
    });

    axios
      .post('http://ribbit.jaehoon.kim/api/login', data, {
        headers: { 'Content-Type': 'application/json' },
      })
      .then((res) => {
        alert('로그인이 완료되었습니다!');
        HandleWhether(res.data.access_token, res.data.color_set);
        window.location.reload();
      })
      .catch((res) => {
        alert('정보가 올바르지 않습니다.');
      });
  };

  render() {
    const { UserException } = this.state;
    return (
      <div className="Login__Container">
        <div className="LoginContainer__Content">
          <div className="Login__Header">
            <span className="LoginHeader__Title">로그인</span>
          </div>
          <div className="Login__Body">
            <form className="LoginBody__Form">
              <label className="LoginForm__Input--Label" htmlFor="LoginForm__Email">
                아이디
                <input
                  autoComplete="off"
                  name="Id"
                  className="LoginForm__Input"
                  id="LoginForm__Email"
                  type="text"
                  placeholder="example"
                  onChange={e => this.HandleInput(e)}
                />
              </label>
              <label className="LoginForm__Input--Label" htmlFor="LoginForm__Password">
                비밀번호
                <input
                  autoComplete="off"
                  name="PassWord"
                  className="LoginForm__Input"
                  id="LoginForm__Password"
                  type="password"
                  placeholder="PW"
                  onChange={e => this.HandleInput(e)}
                />
              </label>
              <Link
                to={UserException ? '/' : '/user/Login'}
                className="LoginForm__Submit"
                onClick={() => this.PostUserData()}
              >
                <span className="LoginSubmit__Title">로그인</span>
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
