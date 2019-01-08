import React, { Component } from 'react';
import MainProfile from '../../../components/MyPage/Profile/MainProfile';
import UserInfo from '../../../components/MyPage/Profile/UserInfo';
import '../css/MyPage.css';

const Following = props => (
  <div>
    <MainProfile
      userAddress={props.userAddress}
      userFollowingData={props.userFollowingData}
      userFollowerData={props.userFollowerData}
      headerImg={props.headerImg}
      profileImg={props.profileImg}
      buttonStatus={props.buttonStatus}
    />
    <div className="my-page">
      <div className="user-info">
        <UserInfo
          userName={props.userName}
          userAddress={props.userAddress}
          userIntroduction={props.userIntroduction}
        />
      </div>
      <div className="page-content">following</div>
    </div>
  </div>
);

export default Following;
