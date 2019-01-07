import React from 'react';
import MainProfile from '../../../components/MyPage/Profile/MainProfile';
import Follow from '../Follow';
import UserInfo from '../../../components/MyPage/Profile/UserInfo';
import '../css/MyPage.css';

const Following = () => (
  <div>
    <MainProfile />
    <div className="my-page">
      <div className="user-info">
        <UserInfo />
      </div>
      <div className="page-content">
        <Follow />
      </div>
    </div>
  </div>
);

export default Following;
