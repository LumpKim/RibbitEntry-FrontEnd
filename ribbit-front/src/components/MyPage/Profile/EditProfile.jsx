import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './css/Profile.css';
import './css/UserInfo.css';
import './css/EditProfile.css';

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      v: '',
    };
  }

  // 프로필 이미지 넣는 함수
  HandleProfileImgRibbit = (event) => {
    const { formData } = this.props;

    formData.set('profile_image', event.target.files[0]);
  };

  // 배경 이미지 넣는 함수
  HandleBackgroundImgRibbit = (event) => {
    const { formData } = this.props;

    formData.set('background_image', event.target.files[0]);
  };

  HandleIntroductionRibbit = (event) => {
    const { formData } = this.props;

    this.setState({
      v: event.target.value,
    });

    formData.set('introduction', this.state.v);
  };

  // 프로필 업데이트해 주는 함수
  PostProfileData = () => {
    const { formData, ChangeButtonValue, userAddress } = this.props;
    axios
      .patch(`http://ribbit.jaehoon.kim:5000/api/${userAddress}/settings`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((res) => {
        alert('프로필 수정이 완료되었습니다!');
      })
      .catch((error) => {
        alert('에러가 발생했습니다!');
      });

    ChangeButtonValue();
  };

  render() {
    const {
      userAddress, userName, userFollowingData, userFollowerData, buttonStatus,
    } = this.props;

    return (
      <div>
        <div className="header-photo">
          <span className="header-edit-icon">
            <label
              className="far fa-plus-square"
              id="Upload_Profile_Label"
              htmlFor="Upload__Profile"
            >
              <input
                type="file"
                name="background_image"
                style={{ display: 'none' }}
                accept="image/*"
                ref="Upload__Profile"
                id="Upload__Profile"
                multiple
                onChange={this.HandleBackgroundImgRibbit}
              />
            </label>
          </span>
        </div>
        <div className="info-tab">
          <div className="gap-by-info" />
          <div className="info-elements">
            <Link to={`/username/${userAddress}/following`}>
              <span className="info-name">following</span>
              <br />
              <span className="info-content">{userFollowingData}</span>
            </Link>
          </div>
          <div className="info-elements">
            <Link to={`/username/${userAddress}/followers`}>
              <span className="info-name">followers</span>
              <br />
              <span className="info-content">{userFollowerData}</span>
            </Link>
          </div>
          <div className="edit-button">
            <button type="button" className="edit-or-follow" onClick={() => this.PostProfileData()}>
              {buttonStatus}
            </button>
          </div>
        </div>
        <div className="profile-photo">
          <span className="profile-edit-icon">
            <label
              className="far fa-plus-square"
              id="Upload_Profile_Label"
              htmlFor="Upload__Profile"
            >
              <input
                type="file"
                name="profile_image"
                style={{ display: 'none' }}
                accept="image/*"
                ref="Upload__Profile"
                id="Upload__Profile"
                multiple
                onChange={this.HandleProfileImgRibbit}
              />
            </label>
          </span>
        </div>
        <div className="edit__page">
          <div className="edit__user-info">
            <span className="user-name">{userName}</span>
            <br />
            <span className="user-address">@{userAddress}</span>
            <br />
            <input
              type="textbox"
              placeholder="소개를 입력해 주세요."
              className="upload-introduction"
              id="Upload__Introduction"
              htmlFor="Upload__Introduction"
              // value={this.state.v}
              onChange={this.HandleIntroductionRibbit}
            />
            <div className="edit__page-content">
              <span style={{ display: 'none' }}>프로필 수정 화면</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditProfile;
