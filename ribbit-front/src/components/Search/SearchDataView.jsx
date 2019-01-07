import React from 'react';
import './css/SearchDataView.css';

const SearchDataView = ({ UserData, index }) => (
  <div key={index + 1} className="SearchBodyContent__Item">
    <div className="SearchBodyContentItem__Header">
      <div className="user__profile">
        {UserData.profile_image ? (
          <img className="user__profile--image" src={UserData.profile_image} alt="프로필 사진" />
        ) : (
          <i
            className="fas fa-user user__profile"
            style={{ color: localStorage.color, opacity: 0.6 }}
          />
        )}
      </div>
    </div>
    <div className="SearchBodyContent__NameLabel">
      <span className="SearchBodyContentNameLabel__Name">{UserData.nickname}</span>
      <span className="SearchBodyContentNameLabel__Id">{UserData.user_id}</span>
    </div>
  </div>
);

export default SearchDataView;
