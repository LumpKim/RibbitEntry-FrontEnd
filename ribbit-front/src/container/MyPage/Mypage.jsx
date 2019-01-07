import React from 'react';
import MainProfile from '../../components/MyPage/Profile/MainProfile';
import UserInfo from '../../components/MyPage/Profile/UserInfo';
import './css/MyPage.css';

const Mypage = () => (
  <div>
    <MainProfile />
    <div className="my-page">
      <div className="user-info">
        <UserInfo />
      </div>
      <div className="page-content">
        fff
      </div>
    </div>
  </div>
);

export default Mypage;
