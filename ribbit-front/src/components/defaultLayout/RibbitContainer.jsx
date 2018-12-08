import React, { Component } from 'react';
import './css/RibbitContainer.css';
import CancleAlert from './CancleAlert';

class RibbitContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }

  // state의 데이터를 base64로 인코딩
  encodeBase64ImageFile = image => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = e => resolve(e.target.result);
    reader.onerror = error => reject(Error(error));
  });

  // 리빗할때 이미지파일을 state에 저장함.
  handleFileRibbit = async (e) => {
    const { count } = this.state;

    const fileList = e.target.files;
    let file = fileList[0];

    const data = await this.encodeBase64ImageFile(file);

    if (count === 1) {
      this.setState({
        ribbitImage1: data,
        count: count + 1,
      });
    } else if (count === 2) {
      this.setState({
        ribbitImage2: data,
        count: count + 1,
      });
    } else if (count === 3) {
      this.setState({
        ribbitImage3: data,
        count: count + 1,
      });
    } else {
      alert('이미지 한도를 초과하였습니다.');
    }
    file = null;
  };

  // 리빗 창 클릭시 onClick 이벤트 막음.
  MaintainContent = (event) => {
    event.stopPropagation();
  };

  // 이미지 파일을 불러오기 전에 담겨있는 이미지 파일 초기화 하는 함수
  ResetFileData = (e) => {
    e.target.value = null;
  };

  render() {
    const {
      Change, ribbitData, data, ribbitCancle, KeepChange, Delete,
    } = this.props;
    return (
      <div onClick={event => this.MaintainContent(event)} className="Ribbit__Modal">
        <CancleAlert KeepChange={KeepChange} ribbitCancle={ribbitCancle} DeleteRibbit={Delete} />
        <div className="Ribbit__Header">
          <div className="RibbitHeader__Content">
            <span className="HeaderContent__Title">새로운 리빗 작성</span>
            <i onClick={Change} className="fas fa-times HeaderContent__Close" />
          </div>
        </div>
        <div className="Ribbit__body">
          <div className="RibbitBody__Content">
            <textarea
              value={data}
              className="BodyContent__Text"
              style={{ resize: 'none' }}
              onChange={e => ribbitData(e)}
              type="text"
              placeholder="무슨 일이 일어나고 있나요?"
              maxLength="2000"
            />
          </div>
          <div className="RibbitBody__Menu">
            <label
              className="far fa-image BodyMenu__Image"
              id="Image_File_Label"
              htmlFor="Ribbit__AddImage"
            >
              <input
                style={{ display: 'none' }}
                type="file"
                accept="image/*"
                onClick={e => this.ResetFileData(e)}
                onChange={e => this.handleFileRibbit(e)}
                ref="Ribbit__AddImage"
                id="Ribbit__AddImage"
              />
            </label>
            <div className="BodyMenu__Ribbit">
              <span className="BodyMenu__Ribbit__Text">리빗하기</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RibbitContainer;
