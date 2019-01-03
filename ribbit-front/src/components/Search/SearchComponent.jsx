import React, { Component } from 'react';
import axios from 'axios';
import './css/Search.css';
import { NotFoundUsers, FoundUsers } from './index';

class SearchComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queryParams: '',
      NotUserData: false,
      userData: [],
    };
  }

  render() {
    // this.props.a();
    return <div className="SearchContainer">{}</div>;
  }
}

export default SearchComponent;
