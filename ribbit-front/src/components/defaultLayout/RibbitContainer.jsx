import React, { Component } from 'react';
import './css/RibbitContainer.css';

class RibbitContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  MaintainContent = (event) => {
    event.stopPropagation();
  };

  render() {
    // const { Turn } = this.props;
    return (
      <div onClick={event => this.MaintainContent(event)} className="Ribbit__Modal">
        <div className="Ribbit__Header">
          <div className="RibbitHeader__Content">
            <span className="HeaderContent__Title">새로운 리빗 작성</span>
            <i className="fas fa-times HeaderContent__Close" />
          </div>
        </div>
        <div className="Ribbit__body" />
      </div>
    );
  }
}

export default RibbitContainer;
