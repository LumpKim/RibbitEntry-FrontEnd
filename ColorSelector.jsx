import React, { Component } from 'react';
import axios from 'axios';
import './css/ColorSelector.css';

class ColorSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [
        '#d68484',
        '#d6b984',
        '#cdd684',
        '#84d687',
        '#84d6ce',
        '#84a1d6',
        '#a484d6',
        '#d684cc',
        '',
      ],
      SelectColor: '#84d687',
    };
  }

  // 클릭시 색 변경
  ToggleActiveColor = (item) => {
    const InsertUserColor = document.getElementById('HeaderColors__InsertUserColor');
    const { colors, SelectColor } = this.state;
    const { userId } = this.props;

    this.setState({
      SelectColor: item,
    });

    if (item === colors[8]) {
      InsertUserColor.style.display = 'inline';
      InsertUserColor.style.marginLeft = '30px';
    } else {
      InsertUserColor.style.display = 'none';
    }

    const data = JSON.stringify({
      color: `${item}`,
    });

    axios
      .post(`http://ribbit.jaehoon.kim/api/${userId}/color`, data, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((res) => {
        switch (res.data.color) {
          case '#d68484':
            alert('붉은색으로 설정 되었습니다.');
            localStorage.setItem('color', res.data.color);
            break;
          case '#d6b984':
            alert('주황색으로 설정 되었습니다.');
            localStorage.setItem('color', res.data.color);
            break;
          case '#cdd684':
            alert('노란색으로 설정 되었습니다.');
            localStorage.setItem('color', res.data.color);
            break;
          case '#84d687':
            alert('초록색으로 설정 되었습니다.');
            localStorage.setItem('color', res.data.color);
            break;
          case '#84d6ce':
            alert('하늘색으로 설정 되었습니다.');
            localStorage.setItem('color', res.data.color);
            break;
          case '#84a1d6':
            alert('청색으로 설정 되었습니다.');
            localStorage.setItem('color', res.data.color);
            break;
          case '#a484d6':
            alert('보라색으로 설정 되었습니다.');
            localStorage.setItem('color', res.data.color);
            break;
          case '#d684cc':
            alert('핑크색으로 설정 되었습니다.');
            localStorage.setItem('color', res.data.color);
            break;
          default:
            alert(`${res.data.color}색으로 설정 되었습니다.`);
            localStorage.setItem('color', res.data.color);
        }
        this.props.GetUserData();
      })
      .catch((error) => {
        alert(`${error.response.data.status}\n색상을 입력 후 다시 한번 클릭해주세요.`);
      });
  };

  // 유저 색깔 state에 넣음
  InsertUserColor = (e) => {
    this.setState({
      colors: [
        '#d68484',
        '#d6b984',
        '#cdd684',
        '#84d687',
        '#84d6ce',
        '#84a1d6',
        '#a484d6',
        '#d684cc',
        e.target.value,
      ],
      SelectColor: e.target.value,
    });
  };

  render() {
    const { colors, SelectColor } = this.state;
    return (
      <div className="MainContent__ColorSelector">
        <div style={{ background: SelectColor }} className="ColorSelector__HeaderContainer">
          <p className="HeaderContainer__Title">테마 색상 수정</p>
          <div className="HeaderContainer__Colors">
            {colors.map((item, index) => (
              <SelctorItem
                active={item === SelectColor}
                onClick={() => this.ToggleActiveColor(item)}
                color={item}
                key={`${index + 1}_${item}`}
              />
            ))}
            <input
              style={{ display: 'none' }}
              onChange={e => this.InsertUserColor(e)}
              id="HeaderColors__InsertUserColor"
              className="HeaderColors__InsertUserColor"
              type="text"
              placeholder="#f58ea8"
              maxLength="7"
            />
          </div>
        </div>
        <div className="ColorSelector__BodyContainer">
          <ul className="BodyContainer__List">
            <li className="BodyList__item">© 2018 Ribbit</li>
            <li className="BodyList__item">김준우</li>
            <li className="BodyList__item">이채은</li>
            <li className="BodyList__item">이현승</li>
            <li className="BodyList__item">#너무나도</li>
            <li className="BodyList__item">#힘들다아</li>
            <li className="BodyList__item">김재훈</li>
            <li className="BodyList__item">신은주</li>
          </ul>
        </div>
      </div>
    );
  }
}

const SelctorItem = ({ active, color, onClick }) => (
  <div
    className={`ColorSelector__Color${active ? '__Active' : ''}`}
    style={{ backgroundColor: color }}
    onClick={onClick}
  >
    <span className="Color__PlusChild">+</span>
  </div>
);

export default ColorSelector;
