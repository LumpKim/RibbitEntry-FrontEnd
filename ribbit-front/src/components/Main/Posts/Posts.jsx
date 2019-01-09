import React, { Component } from 'react';
import './css/Posts.css';
import MainRibbit from './MainRibbit';
import PostInfiniteScroll from './PostInfiniteScroll';

const Posts = ({
  post,
  profileImage,
  formData,
  PostRibbitData,
  RibbitLikeToggle,
  RibbitLike,
  GetUserData,
}) => (
  <div className="MainContent__Posts">
    <MainRibbit profileImage={profileImage} formData={formData} PostRibbitData={PostRibbitData} />
    <PostInfiniteScroll
      post={post}
      RibbitLikeToggle={RibbitLikeToggle}
      RibbitLike={RibbitLike}
      GetUserData={GetUserData}
    />
  </div>
);

export default Posts;
