import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { RibbitIcon } from '../../../assets/index';
import './css/Profile.css';

const MainProfile = props => (
  <div>
    {
      props.headerImg !== '' ? (
        <img
          src={props.headerImg}
          alt="header"
          className="header-photo"
        />
      ) : (
        <div
          className="header-photo"
        />
      )
    }
    <div className="info-tab">
      <div className="gap-by-info" />
      <div className="info-elements">
        <Link to={`/username/${props.userAddress}/following`}>
          <span className="info-name">following</span>
          <br />
          <span className="info-content">{props.userFollowingData}</span>
        </Link>
      </div>
      <div className="info-elements">
        <Link to={`/username/${props.userAddress}/followers`}>
          <span className="info-name">followers</span>
          <br />
          <span className="info-content">{props.userFollowerData}</span>
        </Link>
      </div>
      <div className="edit-button">
        <button type="button" className="edit-or-follow">
          {props.buttonStatus}
        </button>
      </div>
    </div>
    {
      props.profileImg !== '' ? (
        <img
          src={props.profileImg}
          alt="profile"
          className="profile-photo"
        />
      ) : (
        <img
          src={RibbitIcon}
          alt="default-profile"
          className="profile-photo"
        />
      )
    }
  </div>
);

export default MainProfile;
