import React, { Component } from 'react';
import MainProfile from '../../components/MyPage/Profile/MainProfile';
import UserInfo from '../../components/MyPage/Profile/UserInfo';
import './css/MyPage.css';

class Mypage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonValue: false,
    };
  }

  render() {
    const {
      userAddress,
      userFollowingData,
      userFollowerData,
      headerImg,
      profileImg,
      buttonStatus,
      userName,
      userIntroduction,
    } = this.props;

    return (
      <div>
        <MainProfile
          userAddress={userAddress}
          userFollowingData={userFollowingData}
          userFollowerData={userFollowerData}
          headerImg={headerImg}
          profileImg={profileImg}
          buttonStatus={buttonStatus}
        />
        <div className="my-page">
          <div className="user-info">
            <UserInfo
              userName={userName}
              userAddress={userAddress}
              userIntroduction={userIntroduction}
            />
          </div>
          <div className="page-content">fff</div>
        </div>
      </div>
    );
  }
}

export default Mypage;
