import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './css/UserInfo.css';

class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userAddress: 'defaultAddress',
      userName: '리비터',
    };
  }

  componentDidMount() {
    axios.get(`http://ribbit.jaehoon.kim:5000/api/${userAddress}/profile`).then(res => {
      const nickname = res.data.nickname;
      this.setState({ userName });
    });
  }

  render() {
    return (
      <div className="user-info">
        <Link to={`/user/${this.state.userAddress}`} className="user-name-id">
          <span className="user-name">{this.state.userName}</span>
          <br />
          <span className="user-address">
            @
            {this.state.userAddress}
          </span>
        </Link>
      </div>
    );
  }
}

export default UserInfo;
