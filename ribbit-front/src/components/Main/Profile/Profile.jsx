import React, { Component } from 'react';
import './css/Profile.css';
import { Link } from 'react-router-dom';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '김준우',
      userAddress: 'WhatTheFuck',
      userRibbitData: '숫자1',
      userFollowingData: '숫자2',
      userFollowersData: '숫자3',
    };
  }

  render() {
    const {
      userName,
      userAddress,
      userRibbitData,
      userFollowingData,
      userFollowersData,
    } = this.state;
    return (
      <div className="MainContent__Profile">
        <Link to={`/username/${userAddress}`} className="MainProfile__Header">
          <div className="MainProfile__Header--Background" />
        </Link>
        <div className="MainProfile__Body">
          <Link to={`/username/${userAddress}`} className="ProfileBody__MainPicture">
            <i className="fas fa-camera BodyMainPicture__CameraIcon" />
          </Link>
          <div className="ProfileBody__UserData">
            <Link to={`/username/${userAddress}`} className="BodyUserData__UserName--Container">
              <span className="BodyUserData__UserName">{userName}</span>
            </Link>
            <Link to={`/username/${userAddress}`} className="BodyUserData__UserID--Container">
              <span className="BodyUserData__UserID">{`@${userAddress}`}</span>
            </Link>
          </div>
        </div>
        <div className="MainProfile__Footer">
          <Link to={`/username/${userAddress}`} className="ProfileFooter__UserData">
            <div>
              <p className="FooterUserData__DataIndex">리빗</p>
              <span className="FooterUserData__Data">{userRibbitData}</span>
            </div>
          </Link>
          <Link to={`/username/${userAddress}/following`} className="ProfileFooter__UserData">
            <div>
              <p className="FooterUserData__DataIndex">팔로잉</p>
              <span className="FooterUserData__Data">{userFollowingData}</span>
            </div>
          </Link>
          <Link to={`/username/${userAddress}/followers`} className="ProfileFooter__UserData">
            <div>
              <p className="FooterUserData__DataIndex">팔로워</p>
              <span className="FooterUserData__Data">{userFollowersData}</span>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Profile;
