import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { RibbitIconTranslation, FrogAudio } from '../../assets/index';
import RibbitContainer from './RibbitContainer';
import './css/Header.css';

// 스크롤 이벤트를 발생시키기 위한 변수
let intervalld = 0;
const FlogAudioSound = new Audio(FrogAudio);

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ribbitTurn: false,
      ribbitCancle: false,
      ribbitData: '',
    };
  }

  // 스크롤을 0.0034초 마다 -50px씩 줄임.
  // 스크롤이 0이 되면 setInterval 함수 실행을 중단.
  scrollStep = () => {
    if (window.pageYOffset === 0) clearInterval(intervalld);

    window.scroll(0, window.pageYOffset - 50);
  };

  // 비동기를 통한 window객체 조종
  scrollToTop = async () => {
    FlogAudioSound.play();
    intervalld = await setInterval(this.scrollStep, 3.4);
  };

  // 리빗을 클릭시 배경이 나오게 하는 함수.
  ChangeRibbitToggle = () => {
    const { ribbitTurn, ribbitData, ribbitCancle } = this.state;

    if (ribbitData !== '') {
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

  render() {
    const { ribbitTurn, ribbitData, ribbitCancle } = this.state;
    return (
      <React.Fragment>
        <div
          onClick={this.ChangeRibbitToggle}
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
          />
        </div>
        <div className="topbar">
          <div className="topbar-content">
            <Link to="/" className="navigation">
              <i className="fas fa-home" />
              <span>홈</span>
            </Link>
            <div className="filter" />
            <div onClick={this.scrollToTop} className="mainLogo">
              <img className="Logo" src={RibbitIconTranslation} alt="투명한배경의 로고" />
            </div>
            <div className="filter" />
            <div className="features">
              <Link to={`/user/${'1'}`} className="header__profile">
                {/* 이 태그는 이미지를 넣는 기능을 만들면 바뀌도록 해줘야함. - 변동된 엘리멘트의 class명은 이것의 마지막 class와 같음. */}
                <i className="fas fa-user user__profile" />
                {' '}
              </Link>
              <div className="filter" />
              <div onClick={this.ChangeRibbitToggle} className="header__ribbit">
                <span className="ribbit__text">리빗</span>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
