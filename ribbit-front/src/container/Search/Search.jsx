import React, { Component } from 'react';
import axios from 'axios';
import queryString from 'query-string';
import SearchComponent from '../../components/Search/SearchComponent';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queryParams: '',
    };
  }

  SelectUser() {
    const { location } = this.props;
    const values = queryString.parse(location.search);
    const queryParams = values.word;

    console.log(queryParams);

    const data = JSON.stringify({
      search_word: `${queryParams}`,
    });

    axios
      .post('http://ribbit.jaehoon.kim:5000/api/search', data, {
        headers: { 'Content-Type': 'application/json' },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }

  render() {
    this.SelectUser();
    return <SearchComponent />;
  }
}

export default Search;
