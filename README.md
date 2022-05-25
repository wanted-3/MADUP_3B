# ✨MADUP 그룹 과제✨

# 🗣 팀 구성(4명)

__김소형, 이주형, 이종길, 제준영__

# 🔧 기술 스택

- Typescript
- React
- Redux-toolkit
- React-router-dom
- Victory
- Axios
- Dayjs
- SCSS
- BigNumberjs
- React-datepicker

# 💡 구현 내용

## 1. 날짜별 차트데이터 구성 
- API로 받아온 데이터들을 Redux-toolkit를 사용하여 관리해주었고, Redux-toolkit에서 받아온 데이터들을 해당하는 날짜에 맞게 Victoryjs를 사용하여 그래프로 시각화 시켜주었습니다.

## 2. 데이터 필터 기능
- 광고 관리 영역에서 전체, 진행중, 중단됨 세 상태로 필터링하여 화면을 구성하였습니다.

# 📌 실행 방법
```
git clone https://github.com/wanted-3/MADUP_3B.git
```
```
yarn install && yarn start
```

# 📸 구현 결과


|뷰|달력 선택|
|:---:|:---:|
|<img src="https://user-images.githubusercontent.com/62868465/170338166-4867b770-146a-4e1a-a252-b00b67194f48.gif" width="350"/>|<img src="https://user-images.githubusercontent.com/62868465/170338270-55ab85dc-cc6b-4db7-b47a-47b3c1965e18.gif" width="350"/>|

|라인 그래프|차트 그래프|
|:---:|:---:|
<img src="https://user-images.githubusercontent.com/62868465/170338337-b67619f0-476d-413d-9f75-ba0a21d6247d.gif" width="350"/>|<img src="https://user-images.githubusercontent.com/62868465/170338395-161d8375-e1f4-4cdb-ae32-f5dcf65666ba.gif" width="350"/>|

# 📝 진행 과정

1일) 과제 스펙확인, 레이아웃 구성, 주요 사용 라이브러리 학습(Redux-toolkit, Victory)

2일) 차트 생성, 추가 요구 사항 구현,리팩토링

3일) 리팩토링, 배포, README 작성

#  ✏️ 어려웠던 점

## 1. 차트 활용
- 옵션이 두 개일 때, y축을 두 개 생성하는 과정에서 차트 구현과 스타일링에 어려움을 겪었으나, VictoryAxis 등을 활용해 해결했습니다.

- Line 차트에 따로 툴팁 기능이 없어 툴팁 달기에 어려움을 겪었으나, 툴팁 기능이 있는 점형 그래프를 VictoryGroup으로 묶어 해결했습니다.

## 2. API 데이터 정제

- JSON 파일에서 받은 데이터를 용도에 맞게 사용하고자 Redux단계에서 많은 고민을 하였습니다. Redux-toolkit을 활용하면서 좀 더 쉽게 데이터를 관리할 수 있었습니다.

# 🚀 배포

[madup-3b.netlify.app/](https://madup-3b.netlify.app/)
