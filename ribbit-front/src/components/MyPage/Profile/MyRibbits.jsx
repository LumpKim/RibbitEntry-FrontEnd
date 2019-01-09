import React, { Component } from 'react';
import PostInfiniteScroll from '../../Main/Posts/PostInfiniteScroll';

class MyRibbits extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { GetUserData } = this.props;
    return (
      <div>
        <PostInfiniteScroll GetUserData={GetUserData} />
      </div>
    );
  }
}

export default MyRibbits;
