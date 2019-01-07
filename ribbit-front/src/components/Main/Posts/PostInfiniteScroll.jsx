import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { Loading } from '../../../assets/index';
import './css/PostInfiniteScroll.css';

class PostInfiniteScroll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasMoreItems: true,
      tracks: [],
    };
  }

  render() {
    const loader = (
      <div className="loader">
        <img src={Loading} alt="로딩" width="35px" height="35px" />
      </div>
    );

    const items = [];
    this.state.tracks.map((track, i) => items.push(
      <div className="track">
        <div>
          <p className="title">{track.title}</p>
        </div>
      </div>,
    ));

    return (
      <div className="InfiniteScrollContainer">
        <InfiniteScroll pageStart={0} hasMore={this.state.hasMoreItems} loader={loader}>
          <div className="">{items}</div>
        </InfiniteScroll>
      </div>
    );
  }
}

export default PostInfiniteScroll;
