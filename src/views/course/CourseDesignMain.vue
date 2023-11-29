<template>
  <div id=course-design-main>
    <header>
      <step-bar
          :active-step-index=1
          :step-contents="getStepContents"
      ></step-bar>
    </header>
    <body>
      <div class="left-container">
        <div class="service-container">
          <div class="service-name">SnapCourse.AI</div>
          <div class="service-description">
            가장 간단한 교육 설계의 시작.<br>
            필요한 러닝 코스를 SnapCourse와 함께 설계해 보세요.
          </div>
        </div>
        <div class="bound-line"/>
        <div class="get-start-container">
          <div class="get-start-description">
            어떤 코스를 설계해야할 지 고민된다면,<br>
            SnapCourse가 추천하는 러닝 코스와 함께 시작해보세요.
          </div>
          <button class="get-start-button">
            추천 러닝 코스로 시작하기
          </button>
        </div>
      </div>
      <div class="right-container">
        <message-alarm
            :message="alarmMessage"
        ></message-alarm>
      </div>
    </body>
  </div>
</template>

<script>
import StepBar from "@/components/StepBar";
import {mapGetters} from "vuex";
import MessageAlarm from "@/components/MessageAlarm";

export default {
  name: "CourseDesignMain",
  components: {
    StepBar,
    MessageAlarm
  },
  data() {
    return {
      alarmMessage: "이 코스를 통해 학습자에게 제공하려는 학습 목표가 잘 표현된 이름을 추천드려요."
    }
  },
  computed: {
    ...mapGetters({
      getStepContents:'getStepContents'
    })
  }
}
</script>

<style scoped>
#course-design-main {
  padding: 40px 100px;
  justify-content: center;
  align-items: center;
}
body {
  display: flex;
  flex-direction: row;
  gap: 87px;
}
header {
  margin-bottom: 28px;
}
.left-container {
  width: 450px;
  gap:12px;
}
.service-name {
  align-self: stretch;
  color: #262626;
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 57.6px */
  margin-bottom: 10px;
}
.service-description {
  color: #333;
  font-size: 18px;
  font-weight: 400;
  line-height: 150%; /* 27px */
}
.bound-line {
  width: 393px;
  height: 1px;
  margin: 32px 0px;
  background: #000;
}
.get-start-container {
  gap: 18px;
  .get-start-description {
    color: #333;
    font-size: 14px;
    font-weight: 400;
    line-height: 150%; /* 21px */
  }
  .get-start-button {
    display: flex;
    width: 221px;
    height: 52px;
    padding: 18px 24px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 8px;
    border: 1px solid #000;
    background: #FFF;
  }
}
.right-container {
  display: flex;
  padding: 50px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
  border-radius: 12px;
  border: 1px solid #F1F1F3;
  background: #FFF;
}
</style>