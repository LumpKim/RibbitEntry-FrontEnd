import React, { Component } from 'react';
import axios from 'axios';
import './css/SearchComponent.css';
import { NotFoundUsers, FoundUsers } from './index';

class SearchComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queryParams: '',
      NotUserData: false,
    };
  }

  render() {
    const { UserData, TalkTitle } = this.props;
    console.log(UserData[0]);
    return (
      <div className="SearchContainer">
        <div className="SearchNavigation">
          <div className="SearchNavigation__UserName">
            <h1 className="SearchNavigationUserName__Title">{UserData}</h1>
          </div>
          <div className="SearchNavigation__TextData">
            <h2 className="SearchNavigationTextData__Title">{TalkTitle}</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchComponent;
