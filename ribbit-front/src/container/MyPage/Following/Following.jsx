import React, { Component } from 'react';
import MainProfile from '../../../components/MyPage/Profile/MainProfile';
import Follow from '../Follow';
import UserInfo from '../../../components/MyPage/Profile/UserInfo';
import '../css/MyPage.css';

class Following extends Component {
  render() {
    return (
      <div>
        <MainProfile
          userAddress={this.props.userAddress}
          userFollowingData={this.props.userFollowingData}
          userFollowerData={this.props.userFollowerData}
          headerImg={this.props.headerImg}
          profileImg={this.props.profileImg}
        />
        <div className="my-page">
          <div className="user-info">
            <UserInfo
              userName={this.props.userName}
              userAddress={this.props.userAddress}
              userIntroduction={this.props.userIntroduction}
            />
          </div>
          <div className="page-content">
            <Follow />
          </div>
        </div>
      </div>
    );
  }
}

export default Following;
