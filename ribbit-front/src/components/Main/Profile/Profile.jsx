import React, { Component } from 'react';
import './css/Profile.css';
import { Link } from 'react-router-dom';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      nickname, userId, backgroundImage, profileImage, followNum, followerNum,
    } = this.props;

    return (
      <div className="MainContent__Profile">
        <Link to={`/username/${userId}`} className="MainProfile__Header">
          {backgroundImage !== '' ? (
            <img
              className="MainProfile__Header--Background"
              src={backgroundImage}
              alt="프로필배경사진"
            />
          ) : (
            <div className="MainProfile__Header--Background" />
          )}
        </Link>
        <div className="MainProfile__Body">
          <Link to={`/username/${userId}`} className="ProfileBody__MainPicture">
            {profileImage !== '' ? (
              <img
                className="fas fa-camera BodyMainPicture__CameraIcon"
                src={profileImage}
                alt="프로필사진"
              />
            ) : (
              <i className="fas fa-camera BodyMainPicture__CameraIcon" />
            )}
          </Link>
          <div className="ProfileBody__UserData">
            <Link to={`/username/${userId}`} className="BodyUserData__UserName--Container">
              <span className="BodyUserData__UserName">{nickname}</span>
            </Link>
            <Link to={`/username/${userId}`} className="BodyUserData__UserID--Container">
              <span className="BodyUserData__UserID">{`@${userId}`}</span>
            </Link>
          </div>
        </div>
        <div className="MainProfile__Footer">
          <Link to={`/username/${userId}/following`} className="ProfileFooter__UserData">
            <div>
              <p className="FooterUserData__DataIndex">팔로잉</p>
              <span className="FooterUserData__Data">{followNum}</span>
            </div>
          </Link>
          <Link to={`/username/${userId}/followers`} className="ProfileFooter__UserData">
            <div>
              <p className="FooterUserData__DataIndex">팔로워</p>
              <span className="FooterUserData__Data">{followerNum}</span>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Profile;
