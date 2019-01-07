import React from 'react';
import './css/Follow.css';
import { Link } from 'react-router-dom';
import { RibbitIcon } from '../../assets/index';

const userName = '리비터';
const userAddress = 'otherribbiter';
const followingState = 'following';

const Follow = () => (
  <div className="follow__profile">
    <Link to={`/user/${userAddress}`}>
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
    <button type="button" className="following-button">
      {followingState}
    </button>
  </div>
);

export default Follow;
