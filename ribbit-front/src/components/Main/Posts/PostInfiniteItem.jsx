import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { RibbitOn, RibbitOff } from '../../../assets/index';

class PostInfiniteItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      RibbitLike: false,
    };
  }

  RibbitLikeToggle = (postId) => {
    const { RibbitLike } = this.state;
    axios
      .patch(
        `http://ribbit-api.entrydsm.hs.kr/api/${postId}/like`,
        {},
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        },
      )
      .then((res) => {
        this.setState({
          RibbitLike: !RibbitLike,
        });
        this.props.UserData();
      })
      .catch((error) => {
        alert('서버 에러가 발생하였습니다.\n잠시만 기다려 주세요.');
      });
  };

  render() {
    const { track } = this.props;
    return (
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
            {track.image ? (
              <img src={track.image} alt="이미지" className="track__contents track__image" />
            ) : null}
          </div>
          <div className="track__body--footer">
            <div className="track__body--footer__Item">
              <div className="track__footer--action track--comment">
                <i className="far fa-comment-alt track--icon" />
              </div>
              <div className="track__footer--action track--favorite">
                {this.state.RibbitLike ? (
                  <img
                    onClick={() => this.RibbitLikeToggle(track.id)}
                    src={RibbitOn}
                    alt="리빗On"
                    className="track--icon"
                  />
                ) : (
                  <img
                    onClick={() => this.RibbitLikeToggle(track.id)}
                    src={RibbitOff}
                    alt="리빗Off"
                    className="track--icon"
                  />
                )}
                <span>{track.like}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PostInfiniteItem;
