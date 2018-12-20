import React, { Component } from 'react';
import './css/RibbitContainer.css';
import CancleAlert from './CancleAlert';
import ImageContent from './ImageContent';

class RibbitContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      ribbitImage1: '',
      ribbitImage2: '',
      ribbitImage3: '',
      ribbitImage4: '',
    };
  }

  componentDidMount() {
    // ribbitImage가 DeleteRibbit함수에서 작동하도록 하는 함수
    this.DeleteRibbitImage = (Delete) => {
      this.setState({
        ribbitImage1: '',
        ribbitImage2: '',
        ribbitImage3: '',
        ribbitImage4: '',
        count: 1,
      });
      Delete();
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
        count: count + 1,
        ribbitImage1: data,
      });
    } else if (count === 2) {
      this.setState({
        count: count + 1,
        ribbitImage2: data,
      });
    } else if (count === 3) {
      this.setState({
        count: count + 1,
        ribbitImage3: data,
      });
    } else if (count === 4) {
      this.setState({
        count: count + 1,
        ribbitImage4: data,
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

  // 이미지 파일 삭제 하는 함수
  DeleteImage = (number) => {
    const { count } = this.state;

    if (number === 1) {
      if (count === 3 || count === 4 || count === 5) {
        alert('다음 이미지가 남아있습니다.');
      } else {
        this.setState({
          count: count - 1,
          ribbitImage1: '',
        });
      }
    } else if (number === 2) {
      if (count === 4 || count === 5) {
        alert('다음 이미지가 남아있습니다.');
      } else {
        this.setState({
          count: count - 1,
          ribbitImage2: '',
        });
      }
    } else if (number === 3) {
      if (count === 5) {
        alert('다음 이미지가 남아있습니다.');
      } else {
        this.setState({
          count: count - 1,
          ribbitImage3: '',
        });
      }
    } else if (number === 4) {
      this.setState({
        count: count - 1,
        ribbitImage4: '',
      });
    } else {
      alert('삭제할 이미지가 존재하지 않습니다.');
    }
  };

  render() {
    const {
      Change, ribbitData, data, ribbitCancle, KeepChange, Delete,
    } = this.props;
    const {
      ribbitImage1, ribbitImage2, ribbitImage3, ribbitImage4,
    } = this.state;
    return (
      <div onClick={event => this.MaintainContent(event)} className="Ribbit__Modal">
        <CancleAlert
          KeepChange={KeepChange}
          ribbitCancle={ribbitCancle}
          DeleteRibbit={() => this.DeleteRibbitImage(Delete)}
        />
        <div className="Ribbit__Header">
          <div className="RibbitHeader__Content">
            <span className="HeaderContent__Title">새로운 리빗 작성</span>
            <i
              onClick={() => Change(ribbitImage1, ribbitImage2, ribbitImage3, ribbitImage4)}
              className="fas fa-times HeaderContent__Close"
            />
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
            <ImageContent
              ribbitImage1={ribbitImage1}
              ribbitImage2={ribbitImage2}
              ribbitImage3={ribbitImage3}
              ribbitImage4={ribbitImage4}
              Delete={this.DeleteImage}
            />
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
