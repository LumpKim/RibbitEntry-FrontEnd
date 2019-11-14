import React, { Component } from 'react';
import axios from 'axios';
import './css/Main.css';
import { Profile, Posts, ColorSelector } from '../../components/Main/index';
import Register from '../../components/Regiseter/Register/Register';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UserData: {},
    };
  }

  componentDidMount() {
    const { GetUserData } = this.props;
    GetUserData();
  }

  PostRibbitData = (deleteData) => {
    axios
      .post('http://ribbit-api.entrydsm.hs.kr/api/post', this.props.formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((res) => {
        alert('게시글 작성을 완료하였습니다!');
        deleteData();
        this.props.GetUserData();
      })
      .catch((error) => {
        alert('에러가 발생했습니다!');
      });
  };

  render() {
    const {
      GetUserData,
      Whether,
      backgroundImage,
      followNum,
      followerNum,
      nickname,
      profileImage,
      userId,
      post,
      formData,
      RibbitLikeToggle,
      RibbitLike,
    } = this.props;

    return (
      <div className="Main">
        {Whether ? (
          <div className="Main__Content">
            <Profile
              nickname={nickname}
              userId={userId}
              backgroundImage={backgroundImage}
              profileImage={profileImage}
              followNum={followNum}
              followerNum={followerNum}
            />
            <div className="filter" />
            <Posts
              post={post}
              formData={formData}
              profileImage={profileImage}
              PostRibbitData={this.PostRibbitData}
              RibbitLikeToggle={RibbitLikeToggle}
              RibbitLike={RibbitLike}
              GetUserData={GetUserData}
            />
            <div className="filter" />
            <ColorSelector userId={userId} GetUserData={GetUserData} />
          </div>
        ) : (
          <div className="Main__Register">
            <Register />
          </div>
        )}
      </div>
    );
  }
}

export default Main;
