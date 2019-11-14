import React, { Component } from 'react';
import {
  MainProfile, EditProfile, UserInfo, MyRibbits,
} from '../../components/MyPage/index';
import './css/MyPage.css';

class Mypage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonValue: false,
    };
  }

  componentDidMount() {
    const { GetUserData } = this.props;
    GetUserData();
  }

  // 스테이트 바꾸는 함수

  ChangeButtonValue = () => {
    const { buttonValue } = this.state;
    this.setState({
      buttonValue: !buttonValue,
    });
  };

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
      saveButtonStatus,
      formData,
      GetUserProfileData,
      GetUserData,
    } = this.props;

    return (
      <div>
        {this.state.buttonValue === false ? (
          <div>
            <MainProfile
              userAddress={userAddress}
              userFollowingData={userFollowingData}
              userFollowerData={userFollowerData}
              headerImg={headerImg}
              profileImg={profileImg}
              buttonStatus={buttonStatus}
              ChangeButtonValue={this.ChangeButtonValue}
              buttonValue={this.buttonValue}
              GetUserData={GetUserData}
            />
            <div className="my-page">
              <div className="user-info">
                <UserInfo
                  userName={userName}
                  userAddress={userAddress}
                  userIntroduction={userIntroduction}
                />
              </div>
              <div className="page-content">
                <MyRibbits GetUserProfileData={GetUserProfileData} userAddress={userAddress} />
              </div>
            </div>
          </div>
        ) : (
          <EditProfile
            userAddress={userAddress}
            userName={userName}
            userIntroduction={userIntroduction}
            userFollowingData={userFollowingData}
            userFollowerData={userFollowerData}
            headerImg={headerImg}
            profileImg={profileImg}
            buttonStatus={saveButtonStatus}
            ChangeButtonValue={this.ChangeButtonValue}
            buttonValue={this.buttonValue}
            formData={formData}
          />
        )}
      </div>
    );
  }
}

export default Mypage;
