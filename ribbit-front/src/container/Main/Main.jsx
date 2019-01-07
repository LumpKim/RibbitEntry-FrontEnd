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
            <Posts post={post} nickname={nickname} profileImage={profileImage} userId={userId} />
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
