import React, { Component } from 'react';
import './css/RibbitContainer.css';
import CancleAlert from './CancleAlert';

class RibbitContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // 리빗 창 클릭시 onClick 이벤트 막음.
  MaintainContent = (event) => {
    event.stopPropagation();
  };

  render() {
    const {
      Change, ribbitData, data, ribbitCancle, KeepChange,
    } = this.props;
    return (
      <div onClick={event => this.MaintainContent(event)} className="Ribbit__Modal">
        <CancleAlert KeepChange={KeepChange} ribbitCancle={ribbitCancle} />
        <div className="Ribbit__Header">
          <div className="RibbitHeader__Content">
            <span className="HeaderContent__Title">새로운 리빗 작성</span>
            <i onClick={Change} className="fas fa-times HeaderContent__Close" />
          </div>
        </div>
        <div className="Ribbit__body">
          <div className="RibbitBody__Content">
            <textarea
              value={data}
              className="BodyContent__Text"
              style={{ resize: 'none' }}
              onChange={e => ribbitData(e)}
              type="text"
              placeholder="무슨 일이 일어나고 있나요?"
              maxLength="2000"
            />
            {/* 여기에 그림이미지 */}
          </div>
        </div>
      </div>
    );
  }
}

export default RibbitContainer;
