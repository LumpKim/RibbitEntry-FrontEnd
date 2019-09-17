import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Header from './components/defaultLayout/Header';
import {
  Main,
  User,
  MainMyPage,
  Following,
  Followers,
  Login,
  Signup,
  Search,
} from './container/index';

const formData = new FormData();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SearchData: [],
      SearchName: '',
      RandomWriting: '',
      RibbitLike: false,
      // 아래 부터 메인 데이터
      backgroundImage: '',
      followNum: 0,
      followerNum: 0,
      introduction: '소개를 작성해주세요.',
      nickname: '',
      profileImage: '',
      userId: '',
      post: [],
      // 아래 부터 유저 페이지
      UserBackgroundImage: '',
      UserFollowNum: 0,
      UserFollowerNum: 0,
      UserIntroduction: '',
      UserNickname: '',
      UserProfileImage: '',
      UserPost: [],
    };
  }

  RandomWrite = () => {
    const Writing = [
      '사람은 생각하는 갈대다. -파스칼-',
      '인간은 만물의 척도이다. -포로타고라스-',
      '사람은 열 살까지는 천재다. -헉슬리-',
      '산다는 것은 치열한 전투다. -로망 로랑-',
      '눈물은 슬픔의 무성의 말. -올렌드-',
      '슬픔은 오해당한 기쁨.  -브라우닝-',
      '인생은 완전한 것이다. -괴테-',
      '희열은 노동 후의 휴식. -칸트-',
      '노동은 생명, 사상. 광명이다. -위고-',
      '사랑이 있는 곳에 신이 있다. -스토우 부인-',
      '연애에는 안정주가 없다. -안드레 브레보-',
      '사랑은 삶의 대부분이다. -바이런-',
      '우정은 날개 없는 사랑. -바이런-',
      '친구란 또 하나의 자신이다. -이리스토텔레스-',
      '무관심은 태만이다. -헉슬리-',
      '지혜는 경험의 딸이다. -레오나르드다빈치-',
      '아는 것은 힘이다. -베이컨-',
      '미는 진을 판단한다. -아랑-',
      '어린이는 어른의 어버이다. -워즈워드-',
      '정복하기 위해 굴복한다. -윌리엄 쿠퍼-',
      '책이 책을 낳는다. -볼테르-',
      '희망은 가난한 자의 빵. -탈레스-',
      '말로 슬픔을 덜 수 없다. -고르키-',
      '시기 없는 행복은 없다. -발데크-',
      '행복의 층계는 미끄럽다. -로마 격언-',
      '생각은 계량하는 것이다. -나뇨오-',
      '악이란 약함이다. -밀턴-',
      '정직은 최선의 책략이다. -영국 속담-',
      '가정은 도덕상의 학교다. -페스탈로치-',
      '질서는 사회의 힘이다. -아미엘-',
      '투표는 총알보다 강하다. -링컨-',
      '정의는 사회의 지주이다. -스미드-',
      '일은 친구를 만든다. -괴테-',
      '정치와 같은 도박은 없다. -디즈렐리-',
      '무질서는 붕괴이며 죽음이다. -카알 라일-',
      '사랑은 봉사를 뜻한다. -스미드-',
    ];

    this.setState({
      RandomWriting: Writing[Math.round(Math.random() * 33)],
    });
  };

  HandleWhether = (token, color) => {
    localStorage.setItem('color', color);
    localStorage.setItem('token', token);
  };

  SearchData = (data, name) => {
    this.setState({
      SearchData: data,
      SearchName: name,
    });
    this.RandomWrite();
  };

  GetUserData = () => {
    axios
      .get('http://ribbit.jaehoon.kim:5000/api/main', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((res) => {
        const UserData = res.data;
        this.setState({
          backgroundImage: UserData.user_info.background_image,
          followNum: UserData.user_info.follow_num,
          followerNum: UserData.user_info.follower_num,
          introduction: UserData.user_info.introduction,
          nickname: UserData.user_info.nickname,
          profileImage: UserData.user_info.profile_image,
          userId: UserData.user_info.user_id,
          post: UserData.post ? UserData.post.reverse() : null,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  GetUserProfileData = (userId) => {
    axios
      .get(`http://ribbit.jaehoon.kim/api/${userId}/profile`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        const UserData = res.data;
        this.setState({
          UserBackgroundImage: UserData.user_info.backimg,
          UserFollowNum: UserData.user_info.follow_num,
          UserFollowerNum: UserData.user_info.follower_num,
          UserIntroduction: UserData.user_info.introduction,
          UserNickname: UserData.user_info.nickname,
          UserProfileImage: UserData.user_info.proimg,
          UserPost: UserData.post ? UserData.post.reverse() : null,
        });
        console.log(UserData);
      })
      .catch((error) => {});
  };

  RibbitLikeToggle = (postId) => {
    const { RibbitLike } = this.state;
    axios
      .patch(`http://ribbit.jaehoon.kim/api/${postId}/like`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((res) => {
        this.setState({
          RibbitLike: !RibbitLike,
        });
      })
      .catch((error) => {
        alert('서버 에러가 발생하였습니다.\n잠시만 기다려 주세요.');
      });
  };

  render() {
    const Token = localStorage.getItem('token');

    const {
      SearchData,
      SearchName,
      RandomWriting,
      backgroundImage,
      followNum,
      followerNum,
      introduction,
      nickname,
      profileImage,
      userId,
      post,
      buttonStatus,
      RibbitLike,
      UserBackgroundImage,
      UserFollowNum,
      UserFollowerNum,
      UserIntroduction,
      UserNickname,
      UserProfileImage,
      UserPost,
    } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
            <Header
              Whether={Token}
              Token={Token}
              GetSearchData={this.SearchData}
              TrueSearch={this.TrueSearch}
              GetUserData={this.GetUserData}
              formData={formData}
              profileImage={profileImage}
              userId={userId}
            />
            {/* Header 컴포넌트와 라우터 컴포넌트가 곂치지 않도록 block역할을 하는 엘리먼트 */}
            <div className="header__background" />
            <Switch>
              <Route
                path="/"
                render={() => (
                  <Main
                    Whether={Token}
                    formData={formData}
                    GetUserData={this.GetUserData}
                    backgroundImage={backgroundImage}
                    followNum={followNum}
                    followerNum={followerNum}
                    nickname={nickname}
                    profileImage={profileImage}
                    userId={userId}
                    post={post}
                    RibbitLikeToggle={this.RibbitLikeToggle}
                    RibbitLike={RibbitLike}
                  />
                )}
                exact
              />
              {/* 메인 페이지 */}

              <Route
                path="/search"
                component={() => (
                  <Search
                    SearchData={SearchData}
                    UserName={SearchName}
                    StateRandomWriting={RandomWriting}
                    userId={userId}
                  />
                )}
                exact
              />
              {/* 검색 페이지 */}

              <Route
                path="/:user"
                render={() => (
                  <User
                    GetUserProfileData={this.GetUserProfileData}
                    buttonStatus="팔로잉"
                    saveButtonStatus="팔로우"
                    UserBackgroundImage={UserBackgroundImage}
                    UserFollowNum={UserFollowNum}
                    UserFollowerNum={UserFollowerNum}
                    UserIntroduction={UserIntroduction}
                    UserNickname={UserNickname}
                    UserProfileImage={UserProfileImage}
                    UserPost={UserPost}
                    CampareUser
                  />
                )}
                exact
              />
              {/* 유저 정보 페이지 */}

              <Route
                path="/username/:user/following"
                component={() => (
                  <Following
                    userName={nickname}
                    userAddress={userId}
                    userIntroduction={introduction}
                    userFollowingData={followNum}
                    userFollowerData={followerNum}
                    headerImg={backgroundImage}
                    profileImg={profileImage}
                    buttonStatus=""
                  />
                )}
                exact
              />
              {/* 마이페이지 팔로잉 */}

              <Route
                path="/username/:user/followers"
                component={() => (
                  <Followers
                    userName={nickname}
                    userAddress={userId}
                    userIntroduction={introduction}
                    userFollowingData={followNum}
                    userFollowerData={followerNum}
                    headerImg={backgroundImage}
                    profileImg={profileImage}
                    buttonStatus=""
                  />
                )}
                exact
              />
              {/* 마이페이지 팔로워 */}

              <Route
                path="/username/:user"
                component={() => (
                  <MainMyPage
                    userName={nickname}
                    userAddress={userId}
                    userIntroduction={introduction}
                    userFollowingData={followNum}
                    userFollowerData={followerNum}
                    headerImg={backgroundImage}
                    profileImg={profileImage}
                    buttonStatus="프로필 수정"
                    saveButtonStatus="변경 사항 저장"
                    formData={formData}
                    GetUserProfileData={this.GetUserProfileData}
                  />
                )}
                exact
              />
              {/* 마이페이지 */}

              <Route
                path="/user/login"
                component={() => <Login HandleWhether={this.HandleWhether} />}
                exact
              />
              {/* 로그인 페이지 */}

              <Route path="/user/signup" component={Signup} exact />
              {/* 회원가입 페이지 */}
            </Switch>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
