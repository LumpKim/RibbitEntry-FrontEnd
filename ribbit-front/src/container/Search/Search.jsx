import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import SearchComponent from '../../components/Search/SearchComponent';

let StateRandomWriting = '';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    };
  }

  RandomWrite = () => {
    const Writing = [
      '사람은 생각하는 갈대다. -파스칼-',
      '인간은 만물의 척도이다. -포로타고라스-',
      '사람은 열 살까지는 천재다. -헉슬리-',
      '산다는 것은 치열한 전투다. -로망 로랑-',
      '눈물은 슬픔의 무성의 말. -올렌드-',
      '슬픔은 오해당한 기쁨.  -브라우닝-',
      '인생은 완전한 것이다. -괴테-',
      '희열은 노동 후의 휴식. -칸트-',
      '노동은 생명, 사상. 광명이다. -위고-',
      '사랑이 있는 곳에 신이 있다. -스토우 부인-',
      '연애에는 안정주가 없다. -안드레 브레보-',
      '사랑은 삶의 대부분이다. -바이런-',
      '우정은 날개 없는 사랑. -바이런-',
      '친구란 또 하나의 자신이다. -이리스토텔레스-',
      '무관심은 태만이다. -헉슬리-',
      '지혜는 경험의 딸이다. -레오나르드다빈치-',
      '아는 것은 힘이다. -베이컨-',
      '미는 진을 판단한다. -아랑-',
      '어린이는 어른의 어버이다. -워즈워드-',
      '정복하기 위해 굴복한다. -윌리엄 쿠퍼-',
      '책이 책을 낳는다. -볼테르-',
      '희망은 가난한 자의 빵. -탈레스-',
      '말로 슬픔을 덜 수 없다. -고르키-',
      '시기 없는 행복은 없다. -발데크-',
      '행복의 층계는 미끄럽다. -로마 격언-',
      '생각은 계량하는 것이다. -나뇨오-',
      '악이란 약함이다. -밀턴-',
      '정직은 최선의 책략이다. -영국 속담-',
      '가정은 도덕상의 학교다. -페스탈로치-',
      '질서는 사회의 힘이다. -아미엘-',
      '투표는 총알보다 강하다. -링컨-',
      '정의는 사회의 지주이다. -스미드-',
      '일은 친구를 만든다. -괴테-',
      '정치와 같은 도박은 없다. -디즈렐리-',
      '무질서는 붕괴이며 죽음이다. -카알 라일-',
      '사랑은 봉사를 뜻한다. -스미드-',
    ];

    console.log(this.state.data);

    StateRandomWriting = Writing[Math.round(Math.random() * 33)];
  };

  render() {
    const { SearchData } = this.props;
    this.RandomWrite();
    return <SearchComponent UserData={SearchData} TalkTitle={StateRandomWriting} />;
  }
}

export default withRouter(Search);
