import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import UserComponent from '../../components/User/UserContainer';
import { MainProfile, EditProfile, UserInfo } from '../../components/MyPage/index';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonValue: false,
    };
  }

  componentDidMount() {
    this.props.GetUserProfileData(this.props.match.params.user);
  }

  // 스테이트 바꾸는 함수

  ChangeButtonValue = () => {
    const { buttonValue } = this.state;
    const data = JSON.stringify({
      userId: `${this.props.match.params.user}`,
    });

    this.setState({
      buttonValue: !buttonValue,
    });

    if (this.props.CampareUser && !buttonValue) {
      axios
        .patch(
          `http://ribbit-api.entrydsm.hs.kr/api/${this.props.match.params.user}/following`,
          data,
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          },
        )
        .then((res) => {
          alert('팔로우 성공!');
          this.props.GetUserProfileData(this.props.match.params.user);
        })
        .catch((error) => {
          alert('알 수 없는 오류로 팔로우가 실패하였습니다!');
        });
    }
  };

  render() {
    const {
      buttonStatus,
      saveButtonStatus,
      UserBackgroundImage,
      UserFollowNum,
      UserFollowerNum,
      UserIntroduction,
      UserNickname,
      UserProfileImage,
      UserPost,
      CampareUser,
    } = this.props;
    return (
      <div>
        <div>
          <MainProfile
            userAddress={this.props.match.params.user}
            userFollowingData={UserFollowNum}
            userFollowerData={UserFollowerNum}
            headerImg={UserBackgroundImage}
            profileImg={UserProfileImage}
            buttonStatus={buttonStatus}
            saveButtonStatus={saveButtonStatus}
            ChangeButtonValue={this.ChangeButtonValue}
            buttonValue={this.state.buttonValue}
            CampareUser={CampareUser}
          />
          <div className="my-page">
            <div className="user-info">
              <UserInfo
                userName={UserNickname}
                userAddress={this.props.match.params.user}
                userIntroduction={UserIntroduction}
                CampareUser={CampareUser}
              />
            </div>
            <div className="page-content">My Ribbits</div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(User);
