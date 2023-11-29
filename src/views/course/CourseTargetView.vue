<template>
  <div id=course-design-chat>
    <div class="chat-view-container">
      <div class="chat-header">
        <step-bar
            :active-step-index="getStepIndex"
            :step-contents="getStepContents"
        ></step-bar>
      </div>
      <div class="chat-body">
        <div class="left-container">
          <progress-table
              :active-progress-index=getProgressIndex
              :progress-messages="getProgressMessages"
          ></progress-table>
        </div>
        <div class="right-container">
          <div class="right-container">
            <message-alarm
                :message="alarmMessage"
            ></message-alarm>
            <div class="question">
              코스를 수강하는 학습 대상은 누구인가요?
            </div>
            <div class="question-description">
              학습 대상을 입력하면, SnapCourse의 AI가 학습 코스 설계를 위한 질문을 시작해요.
            </div>
            <div class="question-input-container">
              <input type="text" class="question-input-box" v-model="courseSubject">
              <div class="question-submit-container">
                <button class="question-submit-icon" @click="goCourseTarget"></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StepBar from "@/components/StepBar";
import ProgressTable from "@/components/ProgressTable";
import MessageAlarm from "@/components/MessageAlarm";

import {mapGetters, mapMutations} from 'vuex'

export default {
  name: "CourseTargetView",
  data() {
    return {
      alarmMessage: "학습 주제에 대한 학습 대상을 설정주세요.",
      courseSubject: "",
      courseTarget: "",
    }
  },
  components: {
    ProgressTable,
    StepBar,
    MessageAlarm
  },
  computed: {
    ...mapGetters({
      getStepIndex: 'getStepIndex',
      getProgressMessages: 'getProgressMessage',
      getStepContents: 'getStepContents',
      getProgressIndex: 'getProgressIndex',
      getCourseSubject: 'getCourseSubject'
    })
  },
  methods:{
    ...mapMutations({
      setStepIndex: 'setStepIndex',
      setProgressIndex: 'setProgressIndex'
    }),
    initCourse() {
      this.setStepIndex(2);
      this.setProgressIndex(1);
      this.courseSubject = this.getCourseSubject;
    },
    goCourseTarget() {
      this.setStepIndex(2);
      this.setProgressIndex(2);

      this.$router.push('/course/chat');
    }
  },
  created() {
    this.initCourse();
  }
}
</script>

<style scoped>
#course-design-chat {
  padding: 40px 100px;
  display: flex;
}
.chat-view-container {
  display: flex;
  flex-direction: column;
}
.chat-header {
  display: flex;
  width: calc(100% - 25px);
  padding: 16px 8px 16px 0px;
  align-items: center;
  gap: 76px;
  border-bottom: 1px solid #E4E4E7;
}
.chat-body {
  min-width: 1320px;
  display: flex;
  flex-direction: row;
  padding: 24px 25px;
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

.chat-footer {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 52px;
  .go-prev-container {
    display: flex;
    width: 109px;
    padding: 14px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 8px;
    border: 1px solid #0041CF;
    background: #FFF;
    .go-prev-text {
      width: 50px;
      height: 20px;
      color: #0041CF;
      text-align: center;
      font-size: 14px;
      font-weight: 600;
      line-height: 16px; /* 114.286% */
    }
    .go-prev-icon {
      width: 28px;
      height: 28px;
      flex-shrink: 0;
    }
  }
  .go-next-container {
    display: flex;
    width: 109px;
    padding: 14px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 8px;
    background: #0041CF;

    .go-next-text {
      width: 50px;
      height: 20px;
      color: #FFF;
      text-align: center;
      font-size: 14px;
      font-weight: 600;
      line-height: 16px; /* 114.286% */
    }
    .go-next-icon {
      width: 28px;
      height: 28px;
      flex-shrink: 0;
    }
  }
}



</style>