import React, { Component } from 'react';
import './css/Posts.css';
import MainRibbit from './MainRibbit';
import PostInfiniteScroll from './PostInfiniteScroll';

const Posts = ({
  post, nickname, profileImage, userId, formData, PostRibbitData,
}) => (
  <div className="MainContent__Posts">
    <MainRibbit profileImage={profileImage} formData={formData} PostRibbitData={PostRibbitData} />
    <PostInfiniteScroll
      post={post}
      nickname={nickname}
      profileImage={profileImage}
      userId={userId}
    />
  </div>
);

export default Posts;
