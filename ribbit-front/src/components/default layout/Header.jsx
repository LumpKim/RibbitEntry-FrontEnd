import React, { Component } from "react";
import { RibbitIconTranslation } from "../../assets/index";
import { Link } from "react-router-dom";
import "./Header.css";

// 스크롤 이벤트를 발생시키기 위한 변수
let intervalld = 0;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
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
    intervalld = await setInterval(this.scrollStep, 3.4);
  };

  render() {
    return (
      <div className="topbar">
        <div className="topbar-content">
          <Link to="/" className="navigation">
            <i class="fas fa-home" />
            <span>홈</span>
          </Link>
          <div className="filter" />
          <div onClick={this.scrollToTop} className="mainLogo">
            <img
              className="Logo"
              src={RibbitIconTranslation}
              alt="투명한배경의 로고"
            />
          </div>
          <div className="filter" />
          <div className="features">
            <Link to={`/user/${/* 여기에 nickname | 1은 삭제 -> */'1'}`} className="header__profile">
            
              {/* 이 태그는 이미지를 넣는 기능을 만들면 바뀌도록 해줘야함. - 변동된 엘리멘트의 class명은 이것의 마지막 class와 같음. */}
              <i class="fas fa-user user__profile" />{" "}
            </Link>
            <div className="filter" />
            <div className="header__ribbit">
              <span className="ribbit__text">리빗</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
