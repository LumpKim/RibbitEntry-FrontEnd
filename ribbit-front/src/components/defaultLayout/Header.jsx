import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { RibbitIconTranslation, FrogAudio } from '../../assets/index';
import RibbitContainer from './RibbitContainer';
import Search from './Search';
import './css/Header.css';

// 스크롤 이벤트를 발생시키기 위한 변수
const intervalld = 0;
const FlogAudioSound = new Audio(FrogAudio);

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ribbitTurn: false,
      ribbitCancle: false,
      ribbitData: '',
      UserName: '',
      hover: false,
    };
  }

  hoverOn = () => {
    this.setState({
      hover: true,
    });
  };

  hoverOff = () => {
    this.setState({
      hover: false,
    });
  };

  // 스크롤을 0.0034초 마다 -50px씩 줄임.
  // 스크롤이 0이 되면 setInterval 함수 실행을 중단.
  scrollStep = () => {
    if (window.pageYOffset === 0) {
      this.props.GetUserData();
      clearInterval(this.intervalld);
    }

    window.scroll(0, window.pageYOffset - 50);
  };

  // 비동기처리 를 통한 window객체 조종
  scrollToTop = async () => {
    FlogAudioSound.play();
    this.intervalld = await setInterval(this.scrollStep, 3.4);
  };

  // 리빗을 클릭시 배경이 나오게 하는 함수.
  ChangeRibbitToggle = (ribbitImage1, ribbitImage2, ribbitImage3, ribbitImage4) => {
    const { ribbitTurn, ribbitData, ribbitCancle } = this.state;
    if (
      ribbitData !== ''
      || ribbitImage1 === ''
      || ribbitImage2 === ''
      || ribbitImage3 === ''
      || ribbitImage4 === ''
    ) {
      this.setState({
        ribbitCancle: ribbitTurn ? !ribbitCancle : false,
      });
    } else {
      this.setState({
        ribbitTurn: !ribbitTurn,
      });
    }
  };

  // alert창에서 취소 클릭 시 유지시키는 함수
  RibbitCancle = () => {
    const { ribbitCancle } = this.state;

    this.setState({
      ribbitCancle: !ribbitCancle,
    });
  };

  // textarea의 데이터를 불러서 state에 담음.
  GetTextData = (e) => {
    this.setState({
      ribbitData: e.target.value,
    });
    this.props.formData.set('content', this.state.ribbitData);
  };

  // 리빗 취소를 결정하는 함수
  DeleteRibbit = () => {
    const { ribbitTurn, ribbitCancle } = this.state;

    this.setState({
      ribbitTurn: !ribbitTurn,
      ribbitCancle: !ribbitCancle,
      ribbitData: '',
    });
  };

  HandleUserDropdown = () => {
    const target = document.getElementById('user__dropDown');

    if (target.className === 'user__dropDown') {
      target.className = 'user__dropDown--On';
    } else {
      target.className = 'user__dropDown';
    }
  };

  HandleSearch = () => {
    const target = document.getElementById('Header__Search');

    if (target.className === 'Header__Search') {
      target.className = 'Header__Search--On';
    } else {
      target.className = 'Header__Search';
    }
  };

  PostRibbitData = (DeleteImage) => {
    axios
      .post('http://ribbit.jaehoon.kim:5000/api/post', this.props.formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${this.props.Token}`,
        },
      })
      .then((res) => {
        this.setState({
          ribbitData: '',
        });
        DeleteImage();
      })
      .catch((error) => {
        // switch (error.response.status) {
        //   case 401:
        //     break;
        //   case 422:
        //     // console.log(this.props.Token);
        //     break;
        //   case 500:
        //     console.log('Server Error!');
        //     break;
        //   default:
        //     alert('네트워크를 확인하여 주세요.');
        // }
      });
  };

  LogOut = () => {
    alert('로그아웃 되셨습니다!');
    localStorage.setItem('token', '');
    window.location.href = '/';
  };

  render() {
    const {
      ribbitTurn, ribbitData, ribbitCancle, UserName,
    } = this.state;
    const { Whether, GetSearchData } = this.props;
    return (
      <React.Fragment>
        <div
          onClick={() => this.ChangeRibbitToggle()}
          style={ribbitTurn ? { display: 'flex' } : { display: 'none' }}
          className="ribbit__background"
        >
          <RibbitContainer
            data={ribbitData}
            ribbitData={this.GetTextData}
            Change={this.ChangeRibbitToggle}
            ribbitCancle={ribbitCancle}
            KeepChange={this.RibbitCancle}
            Delete={this.DeleteRibbit}
            Post={this.PostRibbitData}
            formData={this.props.formData}
          />
        </div>
        <div className="topbar">
          {/* style={{ backgroundColor: localStorage.getItem('color') }} */}
          <div className="topbar-content">
            <Link
              style={{ color: localStorage.color, borderBottom: `4px solid ${localStorage.color}` }}
              to="/"
              className="navigation"
            >
              <i className="fas fa-home" />
              <span>홈</span>
            </Link>
            <div className="filter" />
            <div onClick={() => this.scrollToTop()} className="mainLogo">
              <img className="Logo" src={RibbitIconTranslation} alt="투명한배경의 로고" />
            </div>
            <div className="filter" />
            <div className="features">
              {Whether ? (
                <React.Fragment>
                  <div onClick={this.HandleUserDropdown} className="header__profile">
                    {/* 이 태그는 이미지를 넣는 기능을 만들면 바뀌도록 해줘야함. - 변동된 엘리멘트의 class명은 이것의 마지막 class와 같음. */}
                    <i
                      style={{ color: localStorage.color, opacity: 0.6 }}
                      className="fas fa-user user__profile"
                    />{' '}
                  </div>
                  <div
                    className="user__dropDown"
                    id="user__dropDown"
                    onClick={this.HandleUserDropdown}
                  >
                    <Link to={`/username/${UserName}`} className="userDropDown__Content">
                      <span>프로필</span>
                    </Link>
                    <div onClick={() => this.HandleSearch()} className="userDropDown__Content">
                      <span>검색</span>
                    </div>
                    <div onClick={() => this.LogOut()} className="userDropDown__Content">
                      <span>로그아웃</span>
                    </div>
                  </div>
                  <Search GetSearchData={GetSearchData} TrueSearch={this.props.TrueSearch} />
                  <div className="filter" />
                  <div
                    style={{ backgroundColor: localStorage.color }}
                    onClick={this.ChangeRibbitToggle}
                    onMouseEnter={this.hoverOn}
                    onMouseLeave={this.hoverOff}
                    className={this.state.hover ? 'header__ribbit-hover' : 'header__ribbit'}
                  >
                    <span className="ribbit__text">리빗</span>
                  </div>
                </React.Fragment>
              ) : null}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
