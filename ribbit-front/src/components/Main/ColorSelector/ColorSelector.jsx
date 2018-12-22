import React, { Component } from 'react';
import './css/ColorSelector.css';

class ColorSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UserColor: '',
    };
  }

  render() {
    const colors = [
      '#d68484',
      '#d6b984',
      '#cdd684',
      '#84d687',
      '#84d6ce',
      '#84a1d6',
      '#a484d6',
      '#d684cc',
      this.state.UserColor,
    ];
    // 빨강, 주황, 노랑, 초록, 하늘, 파랑, 보라, 자주, 사용자
    return (
      <div className="MainContent__ColorSelector">
        <div className="ColorSelector__HeaderContainer">
          <p className="HeaderContainer__Title">테마 색상 수정</p>
          <div className="HeaderContainer__Colors">
            {colors.map((item, index) => (
              <SelctorItem color={item} key={`${index + 1}_${item}`} />
            ))}
          </div>
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
