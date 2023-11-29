<template>
<div class="session-card-box">
  <session-card v-for="(session, index) in sessionList"
    :key="`sessionList#${index}`"
    :sessionSeq="session.session"
    :title="session.title"
    :goal="session.goal"
    :contentList="session.contentList"
  />
</div>
</template>

<script>
import SessionCard from "@/components/SessionCard";

export default {
  name: "SessionCardBox",
  components: {
    SessionCard
  },
  props:{
    sessionList: {
      type: Array,
      default: () => [
        {
          "session": 1,
          "title": "자바스크립트 ES6 기본 문법과 도입",
          "goal": "ES6의 등장 배경과 기본 문법을 이해하고 활용하기 시작한다.",
          "contentList": [
            { "content": "ES6 도입 배경과 중요성", "time": "30분" },
            { "content": "let과 const를 사용한 변수 선언", "time": "20분" },
            { "content": "템플릿 리터럴과 문자열 확장 기능", "time": "30분" },
            { "content": "화살표 함수의 소개와 사용법", "time": "40분" }
          ]
        },
        {
          "session": 2,
          "title": "ES6의 새로운 객체와 배열의 기능",
          "goal": "객체와 배열을 더 효율적으로 다루기 위한 ES6의 문법을 학습한다.",
          "contentList": [
            { "content": "디스트럭처링 할당", "time": "40분" },
            { "content": "스프레드 연산자와 나머지 매개변수", "time": "40분" },
            { "content": "객체 리터럴 확장 기능 익히기", "time": "30분" },
            { "content": "새로운 배열 메서드 적용하기", "time": "20분" }
          ]
        },
        {
          "session": 3,
          "title": "프로미스와 비동기 프로그래밍",
          "goal": "비동기 처리의 이해를 바탕으로 프로미스를 사용한 비동기 프로그래밍을 익힌다.",
          "contentList": [
            { "content": "비동기 프로그래밍 개념", "time": "30분" },
            { "content": "프로미스 기반의 비동기 처리", "time": "50분" },
            { "content": "프로미스 체이닝", "time": "40분" }
          ]
        },
        {
          "session": 4,
          "title": "async/await와 비동기 패턴",
          "goal": "async/await의 원리를 이해하고 복잡한 비동기 코드를 간결하게 구현한다.",
          "contentList": [
            { "content": "async/await 기본 문법 이해", "time": "40분" },
            { "content": "비동기 함수의 예외 처리 방법", "time": "40분" },
            { "content": "실제 코드에 async/await 적용하기", "time": "40분" }
          ]
        },
        {
          "session": 5,
          "title": "모듈 시스템과 클래스",
          "goal": "모듈 시스템을 사용하여 코드를 모듈화하고, ES6의 클래스 문법을 통해 객체 지향적 설계를 이해한다.",
          "contentList": [
            { "content": "ES6 모듈의 임포트와 익스포트", "time": "40분" },
            { "content": "클래스와 상속", "time": "50분" },
            { "content": "정적 메서드와 프로퍼티", "time": "30분" }
          ]
        },
        {
          "session": 6,
          "title": "모던 JavaScript 신기능 응용과 프로젝트 실습",
          "goal": "배운 내용을 종합하여 실제 프로젝트에 적용해보고, ES6 이상의 기능을 활용한 개발 방법론을 숙달한다.",
          "contentList": [
            { "content": "신기능 통합 실습 프로젝트 설계", "time": "1시간" },
            { "content": "프로젝트 구현을 위한 코딩 실습", "time": "1시간 30분" },
            { "content": "코드 리뷰 및 개선 방안 논의", "time": "30분" }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.session-card-box {
  width: 784px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-gap: 20px;
}
</style>