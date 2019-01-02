import React, { Component } from 'react';
import { SearchIcon } from '../../assets/index';
import './css/Search.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
  }

  HandleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { searchText } = this.state;
    return (
      <div className="Header__Search">
        <div className="Search__Container">
          <input
            className="SearchContainer__Input"
            name="searchText"
            type="text"
            value={searchText}
            onChange={e => this.HandleInput(e)}
            placeholder="리빗 검색하기"
          />
          <img src={SearchIcon} alt="돋보기" />
        </div>
      </div>
    );
  }
}

export default Search;
