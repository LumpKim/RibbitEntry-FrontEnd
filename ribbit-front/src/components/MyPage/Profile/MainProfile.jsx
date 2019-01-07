import React from 'react';
import { Link } from 'react-router-dom';
import { RibbitIcon, HeaderPhoto } from '../../../assets/index';
import './css/Profile.css';

const userName = 'Ribbiter';
const userAddress = 'ribbiter';
const userRibbitData = '0';
const userFollowingData = '0';
const userFollowersData = '0';

const MainProfile = () => (
  <div>
    <img src={HeaderPhoto} alt="header" className="header-photo" />
    <div className="info-tab">
      <div className="gap-by-info" />
      <div className="info-elements">
        <Link to={`/user/${userAddress}`}>
          <span className="info-name">Ribbits</span>
          <br />
          <span className="info-content">{userRibbitData}</span>
        </Link>
      </div>
      <div className="info-elements">
        <Link to={`/user/${userAddress}/following`}>
          <span className="info-name">following</span>
          <br />
          <span className="info-content">{userFollowingData}</span>
        </Link>
      </div>
      <div className="info-elements">
        <Link to={`/user/${userAddress}/followers`}>
          <span className="info-name">followers</span>
          <br />
          <span className="info-content">{userFollowersData}</span>
        </Link>
      </div>
    </div>
    <img src={RibbitIcon} alt="profile" className="profile-photo" />
  </div>
);

export default MainProfile;
