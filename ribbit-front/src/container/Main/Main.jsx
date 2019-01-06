import React, { Component } from 'react';
import axios from 'axios';
import './css/Main.css';
import { Profile, Posts, ColorSelector } from '../../components/Main/index';
import Register from '../../components/Regiseter/Register/Register';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.GetUserData();
  }

  render() {
    const { Whether } = this.props;
    return (
      <div className="Main">
        {Whether ? (
          <div className="Main__Content">
            <Profile />
            <div className="filter" />
            <Posts />
            <div className="filter" />
            <ColorSelector />
          </div>
        ) : (
          <div className="Main__Register">
            <Register />
          </div>
        )}
      </div>
    );
  }
}

export default Main;
