import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { Loading } from '../../../assets/index';
import PostInfiniteItem from './PostInfiniteItem';
import './css/PostInfiniteScroll.css';

class PostInfiniteScroll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasMoreItems: true,
      tracks: [],
    };
  }

  componentDidMount() {
    if (!this.props.post) {
      this.setState({
        hasMoreItems: false,
      });
    }
  }

  render() {
    const { post, GetUserData } = this.props;
    const loader = (
      <div key={0} className="loader">
        <img src={Loading} alt="로딩" width="35px" height="35px" />
      </div>
    );

    const items = post && post.map(da => <PostInfiniteItem track={da} GetUserData={GetUserData} />);

    return (
      <div className="InfiniteScrollContainer">
        <InfiniteScroll hasMore={this.state.hasMoreItems} loader={loader}>
          <div className="InfiniteScrollContainer__Item">
            {post !== null ? (
              items
            ) : (
              <span className="InfiniteScrollNotItem">팔로우 / 팔로윙 데이터가 없습니다.</span>
            )}
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}

export default PostInfiniteScroll;
