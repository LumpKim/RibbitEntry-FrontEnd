import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/UserInfo.css';

class UserInfo extends Component {
  render() {
    const {
      userAddress, userName,
      userIntroduction,
    } = this.props;

    return (
      <div className="user-info">
        <Link to={`/username/${userAddress}`} className="user-name-id">
          <span className="user-name">{userName}</span>
          <br />
          <span className="user-address">
            @
            {userAddress}
          </span>
          <br />
          <span className="user-introduction">
            {userIntroduction}
          </span>
        </Link>
      </div>
    );
  }
}

export default UserInfo;
