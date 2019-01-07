import React from 'react';
import { Link } from 'react-router-dom';
import './css/UserInfo.css';

const userAddress = 'ribbiter';
const userName = 'Ribbiter';

const UserInfo = () => (
  <div className="user-info">
    <Link to={`/user/${userAddress}`} className="user-name-id">
      <span className="user-name">{userName}</span>
      <br />
      <span className="user-address">
          @
        {userAddress}
      </span>
    </Link>
  </div>
);

export default UserInfo;
