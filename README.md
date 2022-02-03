# 원티드 프리온보딩 집꾸미기 기업과제

<br />

## [👉 배포 페이지 바로가기 👈](https://loving-hawking-239697.netlify.app/)

<br />

### [컴포넌트 테스트 코드 바로가기](https://github.com/ksmfou98/ggumim-assignment/tree/main/src/components/__test__)

### [api & util함수 테스트 코드 바로가기](https://github.com/ksmfou98/ggumim-assignment/tree/main/src/lib/__test__)

<br />

## 필수 구현 사항

- 가구 정보가 있는 곳에 돋보기 모양의 버튼을 표시
- 돋보기를 클릭하면 상품정보 tool tip 출력되면서 돋보기 모양이 닫기 버튼으로 변경
- 닫기 버튼을 클릭하면 tool tip을 없애고 돋보기 버튼으로 변경
- tool tip은 하나만 노출. tool tip이 노출되고 있는 상태에서 다른 가구를 선택하면 노출되고 있던 tool tip은 닫히고 새로 클릭한 가구 tool tip만 노출
- 하단에 있는 상품목록에서 해당 가구가 선택되었으면 tool tip 출력
- 선택된 가구는 선택되었다고 표시
- 할인율이 존재하는 경우에는 상단에 할인율(discountRate) 표시
- 가구 정보는 2가지 형식이 존재 (입점 되어있는 가구, 입점 되어있지 않은 가구)

<br />

## 과제 요구사항 분석

- 컴포넌트에 data만 넣어주면 사진과 가구 정보가 나오도록 구현 해야함 (재활용이 쉬워야함)
- tool tip 정책
  - 500 (이미지 세로 값 / 2)
  - 400 (이미지 가로 값 / 2)
  - top > 500 ? 말풍선이 아래에서 나옴
  - top < 500 ? 말풍선이 위에서 나옴
  - left > 400 ? 뾰족이가 오른쪽에 있음
  - left < 400 ? 뾰족이가 왼쪽에 있음

<br />

## 참고 사항

- 프로젝트 자체를 <b>집소개 기능</b> 도메인으로 생각해 `components` 폴더 내부에 따로 폴더를 만들지 않았습니다.
- 필수 구현 사항을 토대로 <b>UI 테스트 코드</b>를 작성했습니다.
- `api`, `utils 함수`의 <b>unit</b> 테스트를 진행했습니다.
- `ProductImageContent` 컴포넌트에 `products` data만 넣어주면 <b>사진 가구 정보 컴포넌트</b>를 재활용 할 수 있게 구현 하였습니다.

<br />
