import React from 'react';
import LoginComponent from '../../../components/Regiseter/Login/Login';
import './css/Login.css';

const Login = ({ HandleWhether }) => (
  <div className="Login">
    <LoginComponent HandleWhether={HandleWhether} />
  </div>
);

export default Login;
