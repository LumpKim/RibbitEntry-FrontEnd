import React from 'react';
import { Link } from 'react-router-dom';
import { RibbitIcon } from '../../../assets/index';
import './css/Profile.css';

const EditProfile = ({
  userAddress,
  userFollowingData,
  userFollowerData,
  ChangeButtonValue,
  buttonStatus,
  profileImg,
}) => (
  <div>
    <div className="header-photo">
      <span className="header-edit-icon">
        <i className="far fa-plus-square" />
      </span>
    </div>
    <div className="info-tab">
      <div className="gap-by-info" />
      <div className="info-elements">
        <Link to={`/username/${userAddress}/following`}>
          <span className="info-name">following</span>
          <br />
          <span className="info-content">{userFollowingData}</span>
        </Link>
      </div>
      <div className="info-elements">
        <Link to={`/username/${userAddress}/followers`}>
          <span className="info-name">followers</span>
          <br />
          <span className="info-content">{userFollowerData}</span>
        </Link>
      </div>
      <div className="edit-button">
        <button type="button" className="edit-or-follow" onClick={ChangeButtonValue}>
          {buttonStatus}
        </button>
      </div>
    </div>
    <div className="profile-photo">
      <span className="profile-edit-icon">
        <i className="far fa-plus-square" />
      </span>
    </div>
  </div>
);

export default EditProfile;
