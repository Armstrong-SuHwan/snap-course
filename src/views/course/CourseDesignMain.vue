<template>
  <div id=course-design-main>
    <div id="course-design-layout">
      <header>
        <step-bar
            :active-step-index="getStepIndex"
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
            <div>
              <button class="get-start-button">
                추천 러닝 코스로 시작하기
              </button>
            </div>
          </div>
        </div>
        <div class="right-container">
          <message-alarm
              :message="alarmMessage"
          ></message-alarm>
          <div class="question">
            코스의 주제는 무엇인가요?
          </div>
          <div class="question-description">
            SnapCourse의 AI에게 원하는 Course 주제를 입력해주세요.
          </div>
          <div class="question-input-container">
            <input type="text" class="question-input-box" v-model="courseName">
            <div class="question-submit-container">
              <button class="question-submit-icon" @click="goCourseTarget"></button>
            </div>
          </div>
        </div>
      </body>
    </div>
  </div>
</template>

<script>
import StepBar from "@/components/StepBar";
import {mapActions, mapGetters, mapMutations} from "vuex";
import MessageAlarm from "@/components/MessageAlarm";

export default {
  name: "CourseDesignMain",
  components: {
    StepBar,
    MessageAlarm
  },
  data() {
    return {
      alarmMessage: "이 코스를 통해 학습자에게 제공하려는 학습 목표가 잘 표현된 이름을 추천드려요.",
      courseName: "",
    }
  },
  computed: {
    ...mapGetters({
      getStepIndex: 'getStepIndex',
      getProgressIndex: 'getProgressIndex',
      getStepContents:'getStepContents'
    })
  },
  methods: {
    ...mapMutations({
      setStepIndex: 'setStepIndex',
      setProgressIndex: 'setProgressIndex',
      setCourseTarget: 'setCourseTarget',
    }),
    ...mapActions({
      generateNewCourse: 'generateNewCourse',
    }),
    goCourseTarget() {
      this.setStepIndex(2);
      this.setProgressIndex(1);

      this.$router.push('/course/target');
    },
    initCourse() {
      this.setStepIndex(1);
      this.setProgressIndex(0);
      this.courseName = "";
    }
  },
  created() {
    this.initCourse();
  }
}
</script>

<style scoped>
#course-design-main {
  padding: 40px 100px;
  display: flex;
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

  .get-start-description {
    margin-bottom: 18px;
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
.question{
  flex: 1 0 0;
  color: #262626;
  font-size: 20px;
  font-weight: 500;
  line-height: 150%; /* 30px */
}
.question-description{
  align-self: stretch;
  color: #4C4C4D;
  font-size: 18px;
  font-weight: 400;
  line-height: 150%; /* 27px */
  letter-spacing: -0.108px;
}
.question-input-container {
  display: flex;
  padding: 20px 30px;
  align-items: center;
  align-self: stretch;
  border-radius: 8px;
  border: 1px solid #FC7F00;
  background: #F7F7F8;
}
.question-input-box {
  flex: 1 0 0;
  color: #333;
  font-size: 18px;
  font-weight: 500;
  line-height: 150%; /* 27px */
  border: none;
  background-color: #F7F7F8;
}
.question-input-box:focus {
  outline: none;
  border: none;
}
.question-submit-container {
  display: flex;
  padding: 14px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 100px;
  background: #FC7F00;
}
.question-submit-icon {
  width: 28px;
  height: 28px;
  border: none;
  background: url("../../../public/assets/enter-icon.svg");
}
.inprogress-icon {
  width: 28px;
  height: 28px;
  padding: 14px;
  gap: 10px;
}
</style>