import React, { Component } from 'react';
import './css/Posts.css';
import MainRibbit from './MainRibbit';
import PostInfiniteScroll from './PostInfiniteScroll';

const Posts = ({
  post, nickname, profileImage, userId,
}) => (
  <div className="MainContent__Posts">
    <MainRibbit profileImage={profileImage} />
    <PostInfiniteScroll
      post={post}
      nickname={nickname}
      profileImage={profileImage}
      userId={userId}
    />
  </div>
);

export default Posts;
