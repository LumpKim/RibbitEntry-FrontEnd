import React from 'react';
import { Link } from 'react-router-dom';
import { RibbitIcon } from '../../../assets/index';
import './css/Profile.css';

const MainProfile = ({
  headerImg,
  userAddress,
  userFollowingData,
  userFollowerData,
  ChangeButtonValue,
  buttonStatus,
  saveButtonStatus,
  buttonValue,
  profileImg,
  CampareUser,
}) => (
  <div>
    {headerImg ? (
      <img src={headerImg} alt="header" className="header-photo" />
    ) : (
      <div className="header-photo" />
    )}
    <div className="info-tab">
      <div className="gap-by-info" />
      <div className="info-elements">
        <Link to={CampareUser ? `/${userAddress}/following` : `/username/${userAddress}/following`}>
          <span className="info-name">following</span>
          <br />
          <span className="info-content">{userFollowingData}</span>
        </Link>
      </div>
      <div className="info-elements">
        <Link to={CampareUser ? `/${userAddress}/followers` : `/username/${userAddress}/followers`}>
          <span className="info-name">followers</span>
          <br />
          <span className="info-content">{userFollowerData}</span>
        </Link>
      </div>
      {buttonStatus ? (
        <div className="edit-button">
          <button type="button" className="edit-or-follow" onClick={ChangeButtonValue}>
            {buttonValue ? saveButtonStatus : buttonStatus}
          </button>
        </div>
      ) : (
        <div />
      )}
    </div>
    {profileImg ? (
      <img src={profileImg} alt="profile" className="profile-photo" />
    ) : (
      <img src={RibbitIcon} alt="default-profile" className="profile-photo" />
    )}
  </div>
);

export default MainProfile;
