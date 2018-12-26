import React, { Component } from 'react';
import './css/MainRibbit.css';
import ImageContent from '../../defaultLayout/ImageContent';

class MainRibbit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MainRibbit: '',
      count: 1,
      MainribbitImage1: '',
      MainribbitImage2: '',
      MainribbitImage3: '',
      MainribbitImage4: '',
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
  handleFileRibbitMain = async (e) => {
    const { count } = this.state;

    const fileList = e.target.files;
    let file = fileList[0];

    const data = await this.encodeBase64ImageFile(file);

    if (count === 1) {
      this.setState({
        count: count + 1,
        MainribbitImage1: data,
      });
    } else if (count === 2) {
      this.setState({
        count: count + 1,
        MainribbitImage2: data,
      });
    } else if (count === 3) {
      this.setState({
        count: count + 1,
        MainribbitImage3: data,
      });
    } else if (count === 4) {
      this.setState({
        count: count + 1,
        MainribbitImage4: data,
      });
    } else {
      alert('이미지 한도를 초과하였습니다.');
    }
    file = null;
  };

  // 이미지 파일을 불러오기 전에 담겨있는 이미지 파일 초기화 하는 함수
  ResetFileDataMain = (e) => {
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
          MainribbitImage1: '',
        });
      }
    } else if (number === 2) {
      if (count === 4 || count === 5) {
        alert('다음 이미지가 남아있습니다.');
      } else {
        this.setState({
          count: count - 1,
          MainribbitImage2: '',
        });
      }
    } else if (number === 3) {
      if (count === 5) {
        alert('다음 이미지가 남아있습니다.');
      } else {
        this.setState({
          count: count - 1,
          MainribbitImage3: '',
        });
      }
    } else if (number === 4) {
      this.setState({
        count: count - 1,
        MainribbitImage4: '',
      });
    } else {
      alert('삭제할 이미지가 존재하지 않습니다.');
    }
  };

  // 포스팅 텍스트 데이터를 state에 저장해주는 함수
  GetMainTextData = (e) => {
    this.setState({
      MainRibbit: e.target.value,
    });
  };

  // textarea태그가 글자에 맞게 늘어나도록 하는 함수
  ResizeText = () => {
    const target = document.getElementById('MainRibbitInputCover__Input');
    target.style.height = '1px';
    target.style.height = `${18 + target.scrollHeight}px`;
    if (target.value === '') {
      target.style.height = '42px';
    }
  };

  render() {
    const {
      MainribbitImage1, MainribbitImage2, MainribbitImage3, MainribbitImage4,
    } = this.state;
    return (
      <div className="MainPosts__MainRibbit">
        <div className="MainRibbit__Content">
          <div className="MainRibbitContent__UserProfileCover">
            <i className="fas fa-user MainRibbitContent__UserProfile" />
          </div>
          <div className="MainRibbitContent__InputCover">
            <textarea
              onKeyDown={() => this.ResizeText()}
              onKeyUp={() => this.ResizeText()}
              className="MainRibbitInputCover__Input"
              id="MainRibbitInputCover__Input"
              type="text"
              placeholder="무슨 일이 일어나고 있나요?"
              onChange={this.GetMainTextData}
            />
            <label
              className="far fa-image MainRibbitInputCover__HappinessIcon"
              id="Image_File_Label_Main"
              htmlFor="Ribbit__AddImage_Main"
              onClick={() => console.log(MainribbitImage1)}
            >
              <input
                style={{ display: 'none' }}
                type="file"
                accept="image/*"
                onClick={e => this.ResetFileDataMain(e)}
                onChange={e => this.handleFileRibbitMain(e)}
                ref="Ribbit__AddImage_Main"
                id="Ribbit__AddImage_Main"
              />
            </label>
          </div>
        </div>
        <div className="MainRibbit__ImageContent">
          <ImageContent
            ribbitImage1={MainribbitImage1}
            ribbitImage2={MainribbitImage2}
            ribbitImage3={MainribbitImage3}
            ribbitImage4={MainribbitImage4}
            Delete={this.DeleteImage}
          />
        </div>
      </div>
    );
  }
}

export default MainRibbit;
