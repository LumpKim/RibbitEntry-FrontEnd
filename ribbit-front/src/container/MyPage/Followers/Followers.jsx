import React from 'react';
import MainProfile from '../../../components/MyPage/Profile/MainProfile';
import Follow from '../Follow';
import UserInfo from '../../../components/MyPage/Profile/UserInfo';
import '../css/MyPage.css';

const Followers = () => (
  <div>
    <div>
      <MainProfile />
    </div>
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

export default Followers;
