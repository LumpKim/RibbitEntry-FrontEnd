import React from 'react';
import './css/Register.css';
import { Link } from 'react-router-dom';
import RibbitIcon from '../../../assets/Ribbit-icon-translation.png';

const Register = () => (
  <div className="Register__Container">
    <div className="Register__Header">
      <p className="RegisterHeader__Title">
        지금 세계 <strong>곳곳에서</strong> 무슨 일이 일어나고 있는지 확인하세요.
      </p>
      <img
        onClick={e => console.log(e)}
        className="RegisterHeader__Icon"
        src={RibbitIcon}
        alt="투명 아이콘"
      />
    </div>
    <div className="Register__Body">
      <Link to="/user/signup">
        <div className="RegisterBody__ButtonLabel">
          <span className="ButtonLabel__Title">가입하기</span>
        </div>
      </Link>
      <Link to="/user/login">
        <div
          style={{ background: 'transparent', border: '2px solid #84d687', color: '#84d687' }}
          className="RegisterBody__ButtonLabel"
        >
          <span className="ButtonLabel__Title">로그인</span>
        </div>
      </Link>
    </div>
  </div>
);

export default Register;
