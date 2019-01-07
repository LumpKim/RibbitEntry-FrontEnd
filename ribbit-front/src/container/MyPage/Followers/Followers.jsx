import React from 'react';
import MainProfile from '../../../components/MyPage/Profile/MainProfile';
import Follow from '../Follow';
import UserInfo from '../../../components/MyPage/Profile/UserInfo';

const Followers = () => (
  <div>
    <MainProfile />
    <UserInfo />
    <Follow />
  </div>
);

export default Followers;
