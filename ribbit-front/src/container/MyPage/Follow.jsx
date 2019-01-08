import React, { Component } from 'react';
import './css/Follow.css';
import { Link } from 'react-router-dom';
import { RibbitIcon } from '../../assets/index';

class Follow extends Component {
  render() {
    const userName = 'follower';
    const userAddress = 'following';

    return (
      <div className="follow__profile">
        <Link to={`/username/${userAddress}`}>
          <div className="follow__profile-cast">
            <div>
              <img src={RibbitIcon} alt="Profile" className="follow__profile-photo" />
            </div>
            <div className="follow__user-info">
              <span className="user-name">{userName}</span>
              <br />
              <span className="user-address">
                @
                {userAddress}
              </span>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default Follow;
