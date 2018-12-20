import React from 'react';
import './css/Main.css';
import { Profile, Posts, ColorSelector } from '../../components/Main/index';

const Main = () => (
  <div className="Main">
    <div className="Main__Content">
      <Profile />
      <div className="filter" />
      <Posts />
      <div className="filter" />
      <ColorSelector />
    </div>
  </div>
);

export default Main;
