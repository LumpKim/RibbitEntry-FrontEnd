import React, { Component } from 'react';
import './css/Profile.css';
import { Link } from 'react-router-dom';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const userName = '김준우';
    const userAddress = 'WhatTheFuck';
    const userRibbitData = '숫자1';
    const userFollowingData = '숫자2';
    const userFollowersData = '숫자3';
    return (
      <div className="MainContent__Profile">
        <Link to={`/user/${userAddress}`} className="MainProfile__Header">
          <div className="MainProfile__Header--Background" />
        </Link>
        <div className="MainProfile__Body">
          <Link to={`/user/${userAddress}`} className="ProfileBody__MainPicture">
            <i className="fas fa-camera BodyMainPicture__CameraIcon" />
          </Link>
          <div className="ProfileBody__UserData">
            <Link to={`/user/${userAddress}`} className="BodyUserData__UserName--Container">
              <span className="BodyUserData__UserName">{userName}</span>
            </Link>
            <Link to={`/user/${userAddress}`} className="BodyUserData__UserID--Container">
              <span className="BodyUserData__UserID">{`@${userAddress}`}</span>
            </Link>
          </div>
        </div>
        <div className="MainProfile__Footer">
          <Link to={`/user/${userAddress}`} className="ProfileFooter__UserData">
            <div>
              <p className="FooterUserData__DataIndex">리빗</p>
              <span className="FooterUserData__Data">{userRibbitData}</span>
            </div>
          </Link>
          <Link to={`/user/${userAddress}/following`} className="ProfileFooter__UserData">
            <div>
              <p className="FooterUserData__DataIndex">팔로잉</p>
              <span className="FooterUserData__Data">{userFollowingData}</span>
            </div>
          </Link>
          <Link to={`/user/${userAddress}/followers`} className="ProfileFooter__UserData">
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
