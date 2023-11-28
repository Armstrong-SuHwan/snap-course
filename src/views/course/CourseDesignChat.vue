<template>
  <div id=course-design-chat>
    <header>
      <step-bar
          :active-step-index=2
          :step-contents="getStepContents"
      ></step-bar>
    </header>
    <body>
    <div class="left-container">
      <progress-table
          :active-progress-index=5
          :progress-messages="getProgressMessages"
      ></progress-table>
    </div>
    <div class="right-container">
      <ContentsBox
          :title="contentsBoxTitle"
          :contents="contents"
      ></ContentsBox>
      <message-alarm
          :message="alarmMessage"
      ></message-alarm>
    </div>
    </body>

  </div>
</template>

<script>
import StepBar from "@/components/StepBar";
import ProgressTable from "@/components/ProgressTable";
import MessageAlarm from "@/components/MessageAlarm";
import ContentsBox from "@/components/ContentsBox";

import {mapGetters} from 'vuex'

export default {
  name: "CourseDesignChat",
  data() {
    return {
      headerCategory: "학습목표",
      headerTitle: "Javascript 기본 개념과 동작원리",
      alarmMessage: "문서를 첨부하거나, 챗을 통해 학습 목표 설정에 대해 궁금한 점을 묻거나 요청하고 반영할 수 있어요.",
      contentsBoxTitle: "학습 목표",
      contents: `
      자바스크립트의 기본 개념 이해
      변수, 데이터 타입, 연산자를 식별하고 사용할 수 있다.
      조건문과 반복문을 이용하여 흐름 제어를 할 수 있다.
      함수의 정의와 활용 방법을 이해하고, 스코프와 클로저에 대한 기본 지식을 갖춘다.
      객체와 배열을 생성하고 관리할 수 있으며, JSON 객체와의 상호작용 방법을 안다
      `
    }
  },
  components: {
    ProgressTable,
    StepBar,
    MessageAlarm,
    ContentsBox
  },
  computed: {
    ...mapGetters({
      getStepContents: 'getStepContents',
      getProgressMessages: 'getProgressMessage'
    })
  }
}
</script>

<style scoped>
#course-design-chat {
  padding: 40px 100px;
}
header {
  display: flex;
  width: 1249px;
  padding: 16px 8px 16px 0px;
  align-items: center;
  gap: 76px;
  border-bottom: 1px solid #E4E4E7;
}

</style>