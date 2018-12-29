import React from 'react';
import './css/Main.css';
import { Profile, Posts, ColorSelector } from '../../components/Main/index';
import Register from '../../components/Regiseter/Register/Register';

const Main = ({ Whether, HandleWhether }) => (
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
        <Register HandleWhether={HandleWhether} />
      </div>
    )}
  </div>
);

export default Main;
