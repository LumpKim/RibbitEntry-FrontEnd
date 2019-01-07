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
    const { SearchData, StateRandomWriting, UserName } = this.props;
    return (
      <SearchComponent UserData={SearchData} UserName={UserName} TalkTitle={StateRandomWriting} />
    );
  }
}

export default withRouter(Search);
