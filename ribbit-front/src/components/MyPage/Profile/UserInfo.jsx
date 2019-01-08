import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/UserInfo.css';

const UserInfo = props => (
  <div className="user-info">
    <Link to={`/username/${props.userAddress}`} className="user-name-id">
      <span className="user-name">{props.userName}</span>
      <br />
      <span className="user-address">
        @
        {props.userAddress}
      </span>
      <br />
      <span className="user-introduction">
        {props.userIntroduction}
      </span>
    </Link>
  </div>
);

export default UserInfo;
