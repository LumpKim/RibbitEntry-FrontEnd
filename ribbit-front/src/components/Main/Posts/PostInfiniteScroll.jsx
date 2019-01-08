import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { Link } from 'react-router-dom';
import { Loading, RibbitOn, RibbitOff } from '../../../assets/index';
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
    const { post, RibbitLikeToggle, RibbitLike } = this.props;
    const loader = (
      <div key={0} className="loader">
        <img src={Loading} alt="로딩" width="35px" height="35px" />
      </div>
    );

    const items = [];

    if (post) {
      post.reverse().map((track, i) => items.push(
        <div className="track">
          <div className="track__imageHolder">
            <Link to={`/${track.user}`} className="track__profile">
              {track.proimg ? (
                <img src={track.proimg} alt="프로필사진" className="user__profileImage" />
              ) : (
                <i
                  className="fas fa-user user__profile"
                  style={{ color: localStorage.color, opacity: 0.6 }}
                />
              )}
            </Link>
          </div>
          <div className="track__bodyHolder">
            <div className="track__body--header">
              <Link to={`/${track.user}`} className="track__userLink">
                <span className="track__userName">{track.nickname}</span>
                <span className="track__userId">@{track.user}</span>
              </Link>
              <span className="track__date">{track.date}</span>
            </div>
            <div className="track__body--content">
              <p className="track__contents">{track.content}</p>
            </div>
            <div className="track__body--footer">
              <div className="track__body--footer__Item">
                <div className="track__footer--action track--comment">
                  <i className="far fa-comment-alt track--icon" />
                </div>
                <div
                  className="track__footer--action track--favorite"
                  onClick={() => RibbitLikeToggle(track.id)}
                >
                  {RibbitLike ? (
                    <img src={RibbitOn} alt="리빗On" className="track--icon" />
                  ) : (
                    <img src={RibbitOff} alt="리빗Off" className="track--icon" />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>,
      ));
    }

    return (
      <div className="InfiniteScrollContainer">
        <InfiniteScroll
          pageStart={0}
          // loadMore={() => this.loadItems()}
          hasMore={this.state.hasMoreItems}
          loader={loader}
        >
          <div className="InfiniteScrollContainer__Item">{!post ? <span className="InfiniteScrollNotItem">팔로우 / 팔로윙 데이터가 없습니다.</span> : items}</div>
        </InfiniteScroll>
      </div>
    );
  }
}

export default PostInfiniteScroll;
