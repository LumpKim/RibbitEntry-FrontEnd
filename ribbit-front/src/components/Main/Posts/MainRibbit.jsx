import React, { Component } from 'react';
import './css/MainRibbit.css';

class MainRibbit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MainRibbit: '',
    };
  }

  GetTextData = (e) => {
    this.setState({
      MainRibbit: e.target.value,
    });
  };

  render() {
    return (
      <div className="MainPosts__MainRibbit">
        <div className="MainRibbit__Content">
          <div className="MainRibbitContent__UserProfileCover">
            <i className="fas fa-user MainRibbitContent__UserProfile" />
          </div>
          <div className="MainRibbitContent__InputCover">
            <textarea
              className="MainRibbitInputCover__Input"
              type="text"
              placeholder="무슨 일이 일어나고 있나요?"
              onChange={this.GetTextData}
              // style={{resize:'none'}}
            />
            <i className="far fa-grin-squint-tears MainRibbitInputCover__HappinessIcon" />
          </div>
        </div>
      </div>
    );
  }
}

export default MainRibbit;
