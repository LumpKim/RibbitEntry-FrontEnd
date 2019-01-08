import React, { Component } from 'react';
import './css/Follow.css';
import { Link } from 'react-router-dom';
import { RibbitIcon } from '../../assets/index';

class Follow extends Component {
  render() {
    const {
      followName, followAddress,
    } = this.props;

    return (
      <div className="follow__profile">
        <Link to={`/${followAddress}`}>
          <div className="follow__profile-cast">
            <div>
              <img src={RibbitIcon} alt="Profile" className="follow__profile-photo" />
            </div>
            <div className="follow__user-info">
              <span className="user-name">{followName}</span>
              <br />
              <span className="user-address">
                @
                {followAddress}
              </span>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default Follow;
