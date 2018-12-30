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
    };
  }

  HandleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  PostUserData = () => {
    const { Id, PassWord } = this.state;
    const data = JSON.stringify({
      userId: `${Id}`,
      password: `${PassWord}`,
    });

    axios.post('http://ribbit.jaehoon.kim:5000/api/login');
  };

  render() {
    const { HandleWhether } = this.props;
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
                  type="email"
                  placeholder="example@gmail.com"
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
                // to={UserException ? '/' : '/user/Login'}
                to="/"
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
