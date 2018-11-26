# **Ribbit**

## 목차

- RIBBIT 개요
- 성취하고자 하는 목표
- 역할 분담
- 기술 스택
- 협업 관리
- 기능 구현 정의
  - 서버측 api 명세 등
- 개발 규칙 정의(코드 스타일 등)
- 일정

## RIBBIT 개요

- 일종의 미니 SNS로, 트위터, 페이스북 등 여러 SNS의 주요 기능을 구현하는 프로젝트로, 프로젝트 이름인 'ribbit'은 개구리가 우는 의성어인 '개굴'을 뜻합니다. 이번 RIBBIT 프로젝트에서는 게시글 올리기, 수정, 삭제 등 게시글과 관련된 기능, 그리고 친구 추가/삭제/차단 기능을 구현할 예정입니다.



## 성취하고자 하는 목표

- 사용하기 쉬운 간결한 UI
- 꼭 필요한 기능만 구현
- 

## 역할 분담

역할 분담에 대한 자세한 내용은 다음과 같습니다.

|            역할            |  팀원  |
| :------------------------: | :----: |
|             PM             |  ???   |
|     프론트엔드 개발자      | 김준우 |
| 프론트엔드 개발자 / 디자인 | 이채은 |
|     프론트엔드 개발자      | 이현승 |
|       백엔드 개발자        | 신은주 |
|       백엔드 개발자        | 김재훈 |



## 기술 스택

- 프론트엔드

|      항목       |          내용           |
| :-------------: | :---------------------: |
|    Extention    |      React, Redux       |
|    Language     | HTML5, CSS3, Javascript |
|      HTTP       |          Axios          |
| Package Manager |          Yarn           |



- 백엔드

  |      항목      |          내용           |
  | :------------: | :---------------------: |
  |    DataBase    |          MySQL          |
  |  Environment   | Amazon Web Services EC2 |
  | Authentication |  Json Web Token based   |
  |     Server     |      Python, Flask      |
  |   Test Code    |     Python UnitTest     |
  |   Web Server   |          Ngnix          |



## 협업 관리

|         항목          |                   내용                   |
| :-------------------: | :--------------------------------------: |
| Project Managing Tool |                                          |
|     Issue Control     | Github built-in issue tool(Kanban Board) |
|  Messenger for work   |                  Slack                   |



## 기능 구현 정의

### 프론트

#### 메인페이지

- 게시글 작성
- 게시글 열람
  - follow한 사람의 게시글만 타임라인에 표시
- 유저 검색
  - follow하기

#### 마이페이지

- 프로필 수정
  - 프로필 이미지 변경
  - 배경 이미지 변경
  - 닉네임 변경
- 내가 작성한 글 조회
- 내가 Ribbit 한 글 조회
- Follower/Following 유저 목록 조회
  - Follow 취소 기능

#### 타인 프로필 열람

#### 로그인/회원가입

- 비밀번호 수정

#### Ribbit 하는 기능

#### 멘션 기능



### 백엔드

#### 로그인/회원가입

- uri
  (basepath)/signin. (basepath)/signup
- 주요기능
  - 로그인 및 회원가입



#### 게시글 작성/삭제

- uri
  (basepath)/post
- REST METHOD
  - POST
  - GET
  - DELETE
- 주요기능
  - 게시글 관련 CRUD
- requirements
  - 제목, 내용, 작성자, 작성일시, 좋아요, 내용에 미디어 포함



#### 댓글

- 댓글(대댓글 불가)



#### 팔로잉 팔로우

- uri
  (basepath)/follow
- REST METHOD



#### 알림

- 추후 보완



#### 내 정보 수정

- uri
  (basepath)/profile
- REST METHOD
  - PUT



#### 메신저

- 추후 결정
- 아마도 소켓 사용하겠지??
- 



## 개발 규칙 정의



## 일정



- 
