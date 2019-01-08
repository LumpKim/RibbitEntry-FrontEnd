import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { Link } from 'react-router-dom';
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
      nickname,
      profileImage,
      userId,
      // post,
    } = this.props;
    const loader = (
      <div key={0} className="loader">
        <img src={Loading} alt="로딩" width="35px" height="35px" />
      </div>
    );

    const items = [];
    const post = [
      {
        content: '리yuiuytre빗엔트리리yuiuytre빗엔트리리yuiuytre빗엔트리리yuiuytre빗엔트리리yuiuytre빗엔트리리yuiuytre빗엔트리',
        date: '00:10:00',
        image: '',
        like: '20',
        nickname: '바보',
        proimg: '',
        user: 'kiasdfm',
      },
      {
        content: '리빗ryuiuytrt엔트리',
        date: '00:00:30',
        image: 'link',
        like: '50',
        nickname: '바보',
        proimg: '이미지',
        user: 'kifffm',
      },
      {
        content: '리빗rtyuitrew엔트리',
        date: '02:00:00',
        image: '',
        like: '0',
        nickname: '바보',
        proimg: '',
        user: 'kiqwwem',
      },
    ];

    post.map((track, i) => items.push(
      <div className="track">
        <div className="track__imageHolder">
          <Link to={`/${track.user}`} className="track__profile">
            {track.proimg !== '' ? (
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
              <div className="track__footer--action track--favorite">
                {/*  */}
              </div>
            </div>
          </div>
        </div>
      </div>,
    ));

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
