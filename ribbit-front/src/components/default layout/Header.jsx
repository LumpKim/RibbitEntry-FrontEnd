import React, { Component } from "react";
import { RibbitIconTranslation } from '../../assets/index';
import { Link } from 'react-router-dom'
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  render() {
    return (
      <div className='topbar'>
        <div className='topbar-content'>
          <Link to='/' className='navigation'>
            <i class="fas fa-home" />
            <span>홈</span>
          </Link>
          <div className='filter' />
          <div className='mainLogo'>
            <img className='Logo' src={RibbitIconTranslation} alt="투명한배경의 로고"/>
          </div>
          <div className='filter' />
          <div className='features'>
            <Link to='/user/' className='header__profile'>
              <i class="fas fa-user user__profile" /> { /* 이 태그는 이미지를 넣는 기능을 만들면 바뀌도록 해줘야함. - 변동된 엘리멘트의 class명은 이것의 마지막 class와 같음. */ }
            </Link>
            <div className='filter' />
            <div className='header__ribbit'>
              <span className='ribbit__text'>리빗</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
