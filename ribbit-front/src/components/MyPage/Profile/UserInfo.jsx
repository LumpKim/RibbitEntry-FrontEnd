import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/UserInfo.css';

class UserInfo extends Component {
  render() {
    return (
      <div className="user-info">
        <Link to={`/username/${this.props.userAddress}`} className="user-name-id">
          <span className="user-name">{this.props.userName}</span>
          <br />
          <span className="user-address">
            @
            {this.props.userAddress}
          </span>
          <br />
          <span className="user-introduction">
            {this.props.userIntroduction}
          </span>
        </Link>
      </div>
    );
  }
}

export default UserInfo;
