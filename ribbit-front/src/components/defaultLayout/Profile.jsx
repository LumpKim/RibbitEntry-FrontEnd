import React from 'react';
import headerPhoto from '../../assets/header-photo.png';
import profilePhoto from '../../assets/Ribbit-icon.png';
import './css/Profile.css';

const userName = 'Ribbiter';
const userId = 'ribbiter';

const Profile = () => (
  <div>
    <img src={headerPhoto} alt="header" className="header-photo" />
    <div className="info-tab">
      <div className="gap-by-info" />
      <div className="info-elements">
        <span className="info-name">ribbits</span>
        <br />
        <span className="info-content">0</span>
      </div>
      <div className="info-elements">
        <span className="info-name">following</span>
        <br />
        <span className="info-content">0</span>
      </div>
      <div className="info-elements">
        <span className="info-name">followers</span>
        <br />
        <span className="info-content">0</span>
      </div>
    </div>
    <img src={profilePhoto} alt="profile" className="profile-photo" />
    <div className="user-name-id">
      <span>{userName}</span>
      <span>{userId}</span>
    </div>
  </div>
);

export default Profile;
