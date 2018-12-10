import React, { Component } from 'react';
import './css/ImageContent.css';

class ImageContent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      ribbitImage1, ribbitImage2, ribbitImage3, ribbitImage4, Delete,
    } = this.props;
    return (
      <div style={{ marginLeft: '30px' }} className="Ribbit__Image--Container">
        {ribbitImage1 !== '' ? (
          <img
            onClick={() => Delete(1)}
            src={ribbitImage1}
            alt="첫번째사진"
            className="Ribbit__Image--Content"
          />
        ) : null}
        {ribbitImage2 !== '' ? (
          <img
            onClick={() => Delete(2)}
            src={ribbitImage2}
            alt="두번째사진"
            className="Ribbit__Image--Content"
          />
        ) : null}
        {ribbitImage3 !== '' ? (
          <img
            onClick={() => Delete(3)}
            src={ribbitImage3}
            alt="세번째사진"
            className="Ribbit__Image--Content"
          />
        ) : null}
        {ribbitImage4 !== '' ? (
          <img
            onClick={() => Delete(4)}
            src={ribbitImage4}
            alt="네번째사진"
            className="Ribbit__Image--Content"
          />
        ) : null}
      </div>
    );
  }
}

export default ImageContent;
