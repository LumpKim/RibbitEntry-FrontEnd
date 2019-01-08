import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { RibbitIcon, HeaderPhoto } from '../../../assets/index';
import './css/Profile.css';

class MainProfile extends Component {
  render() {
    const userRibbitData = '0';
    const buttonStatus = '프로필 수정';

    return (
      <div>
        <img src={HeaderPhoto} alt="header" className="header-photo" />
        <div className="info-tab">
          <div className="gap-by-info" />
          <div className="info-elements">
            <Link to={`/username/${this.props.userAddress}`}>
              <span className="info-name">Ribbits</span>
              <br />
              <span className="info-content">{userRibbitData}</span>
            </Link>
          </div>
          <div className="info-elements">
            <Link to={`/username/${this.props.userAddress}/following`}>
              <span className="info-name">following</span>
              <br />
              <span className="info-content">{this.props.userFollowingData}</span>
            </Link>
          </div>
          <div className="info-elements">
            <Link to={`/username/${this.props.userAddress}/followers`}>
              <span className="info-name">followers</span>
              <br />
              <span className="info-content">{this.props.userFollowerData}</span>
            </Link>
          </div>
          <div className="edit-button">
            <button type="button" className="edit-or-follow">
              {buttonStatus}
            </button>
          </div>
        </div>
        <img src={RibbitIcon} alt="profile" className="profile-photo" />
      </div>
    );
  }
}

export default MainProfile;
