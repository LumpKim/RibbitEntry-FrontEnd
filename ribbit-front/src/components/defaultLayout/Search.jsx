import React, { Component } from 'react';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';
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

  SearchContent = () => {
    const { searchText } = this.state;
    const data = JSON.stringify({
      search_word: `${searchText}`,
    });

    axios
      .post('http://ribbit.jaehoon.kim:5000/api/search', data, {
        headers: { 'Content-Type': 'application/json' },
      })
      .then((res) => {
        const UserData = JSON.stringify(res.data);
        this.props.GetSearchData(UserData);
      })
      .catch((error) => {
        console.log(`${searchText}는 ${error.response.data.status}`);
        this.props.GetSearchData(error.response.data.status);
      });
    this.setState({
      searchText: '',
    });
  };

  EnterKeyDown = (e) => {
    const { history } = this.props;

    if (e.key === 'Enter') {
      history.push(`/search/?word=${this.state.searchText}`);
      this.SearchContent();
    }
  };

  render() {
    const { searchText } = this.state;
    return (
      <div className="Header__Search" id="Header__Search">
        <div className="Search__Container">
          <input
            autoComplete="off"
            className="SearchContainer__Input"
            name="searchText"
            type="text"
            value={searchText}
            onChange={e => this.HandleInput(e)}
            onKeyPress={e => this.EnterKeyDown(e)}
            placeholder="리빗 검색하기"
          />
          <Link
            to={`/search/?word=${searchText}`}
            onClick={searchText ? null : e => e.preventDefault()}
          >
            <img
              className="SearchContainer__Icon"
              src={SearchIcon}
              alt="돋보기"
              onClick={() => this.SearchContent()}
            />
          </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(Search);
