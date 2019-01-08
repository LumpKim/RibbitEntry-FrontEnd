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
    const {
      nickname, profileImage, userId, post,
    } = this.props;
    const loader = (
      <div key={0} className="loader">
        <img src={Loading} alt="로딩" width="35px" height="35px" />
      </div>
    );

    const items = [];

    // post.map((track, i) => items.push(
    //   <div className="track">
    //     <div className="track__header">
    //       <i
    //         className="fas fa-user user__profile"
    //         style={{ color: localStorage.color, opacity: 0.6 }}
    //       />
    //     </div>
    //     <div className="track__body" />
    //   </div>,
    // ));

    return (
      <div className="InfiniteScrollContainer">
        <InfiniteScroll
          pageStart={0}
          // loadMore={() => this.loadItems()}
          hasMore={this.state.hasMoreItems}
          loader={loader}
        >
          <div className="InfiniteScrollContainer__Item">{items}</div>
        </InfiniteScroll>
      </div>
    );
  }
}

export default PostInfiniteScroll;
