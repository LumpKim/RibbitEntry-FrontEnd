import React from 'react';
import './css/NotSearchDataView.css';

const NotSearchDataView = ({ UserName }) => (
  <div className="SearchBodyContentNotUserDataForm__Item">
    <div className="SearchBodyContentNotUserDataFormItem__Header">
      <span className="SearchBodyContentNotUserDataFormItemHeader__Title">{`${UserName}에 대한 정보를 찾을 수 없습니다`}</span>
    </div>
    <div className="SearchBodyContentNotUserDataFormItem__Body">
      <p className="SearchBodyContentNotUserDataFormItemBody__Contents">
        입력한 용어에 대한 결과를 찾을 수 없습니다. 용어를 잘못 입력했거나 <br /> 검색 설정이
        잠재적으로 민감한 콘텐츠로부터 사용자를 보호하도록 설정되
        <br />어 있을 수 있습니다.
      </p>
    </div>
  </div>
);

export default NotSearchDataView;
