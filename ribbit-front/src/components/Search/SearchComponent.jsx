import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './css/SearchComponent.css';
import { SearchDataView, NotSearchDataView } from './index';

class SearchComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queryParams: '',
      NotUserData: false,
    };
  }

  GoUserPage = () => {
    const { history, userId } = this.props;

    history.push(`/username/${userId}`);
  };

  render() {
    const { UserData, TalkTitle, UserName } = this.props;
    return (
      <div className="SearchContainer">
        <div className="SearchNavigation">
          <div className="SearchNavigation__UserName">
            <h1 className="SearchNavigationUserName__Title">
              {UserData ? `${UserName}` : '유저 정보가 없습니다.'}
            </h1>
          </div>
          <div className="SearchNavigation__TextData">
            <h2 className="SearchNavigationTextData__Title">{TalkTitle}</h2>
          </div>
        </div>
        <div className="SearchBody">
          <div className="SearchBody__Content">
            {UserData ? (
              UserData.map((item, index) => (
                <SearchDataView onclick={this.GoUserPage} UserData={item} index={index} />
              ))
            ) : (
              <NotSearchDataView UserName={UserName} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SearchComponent);
