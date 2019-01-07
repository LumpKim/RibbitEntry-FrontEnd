import React from 'react';
import MainProfile from '../../../components/MyPage/Profile/MainProfile';
import Follow from '../Follow';
import UserInfo from '../../../components/MyPage/Profile/UserInfo';

const Following = () => (
  <div>
    <MainProfile />
    <UserInfo />
    <Follow />
  </div>
);

export default Following;
