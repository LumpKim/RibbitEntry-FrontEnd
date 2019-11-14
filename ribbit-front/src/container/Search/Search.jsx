import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import SearchComponent from '../../components/Search/SearchComponent';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    };
  }

  render() {
    const {
      SearchData, StateRandomWriting, UserName, userId,
    } = this.props;
    return (
      <SearchComponent
        UserData={SearchData}
        UserName={UserName}
        TalkTitle={StateRandomWriting}
        userId={userId}
      />
    );
  }
}

export default withRouter(Search);
