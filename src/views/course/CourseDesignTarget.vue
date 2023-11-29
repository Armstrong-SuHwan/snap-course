<template>
  <div id=course-design-chat>
    <div class="chat-view-container">
      <div class="chat-header">
        <step-bar
            :active-step-index="getStepIndex"
            :step-contents="getStepContents"
        ></step-bar>
        <div>
          <div class="title">학습 대상 선정</div>
        </div>
      </div>
      <div class="chat-body">
        <div class="left-container">
          <progress-table
              :active-progress-index=getProgressIndex
              :progress-messages="getProgressMessages"
          ></progress-table>
        </div>
        <div class="right-container">
          <div class="contents-container">
            <message-alarm
                :message="alarmMessage"
            ></message-alarm>
            <div class="question">
              코스를 수강하는 학습 대상은 누구인가요?
            </div>
            <div class="question-description">
              학습 대상을 입력하면, SnapCourse의 AI가 학습 코스 설계를 위한 질문을 시작해요.
            </div>
            <target-input-box
                class="target-input-box"
                @submit="goCourseChat"
            ></target-input-box>
          </div>
          <course-footer></course-footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StepBar from "@/components/StepBar";
import ProgressTable from "@/components/ProgressTable";
import MessageAlarm from "@/components/MessageAlarm";

import {mapActions, mapGetters, mapMutations} from 'vuex'
import CourseFooter from "@/components/CourseFooter";
import TargetInputBox from "@/components/TargetInputBox";

export default {
  name: "CourseDesignTarget",
  data() {
    return {
      alarmMessage: "학습 주제에 대한 학습 대상을 설정주세요.",
      courseTarget: "",
    }
  },
  watch:{
    getCourseTitleList(newVal){
      console.log(newVal);
      this.$router.push('/course/name');
    }
  },
  components: {
    ProgressTable,
    StepBar,
    MessageAlarm,
    CourseFooter,
    TargetInputBox
  },
  computed: {
    ...mapGetters({
      getStepIndex: 'getStepIndex',
      getProgressMessages: 'getProgressMessage',
      getStepContents: 'getStepContents',
      getProgressIndex: 'getProgressIndex',
      getCourseSubject: 'getCourseSubject',
      getCourseTarget: 'getCourseTarget',
      getCourseTitleList: 'getCourseTitleList',
    })
  },
  methods:{
    ...mapMutations({
      setStepIndex: 'setStepIndex',
      setProgressIndex: 'setProgressIndex',
      setCourseTarget: 'setCourseTarget'
    }),
    ...mapActions({
      generateCourseTitle: 'generateCourseTitle'
    }),
    initCourse() {
      this.setStepIndex(2);
      this.setProgressIndex(1);
    },
    goCourseChat(inputText) {
      this.setCourseTarget(inputText);
      const payload = {
        subject: this.getCourseSubject,
        target: this.getCourseTarget
      }
      this.generateCourseTitle(payload);
      this.setStepIndex(2);
      this.setProgressIndex(2);
    }
  },
  created() {
    this.initCourse();
  }
}
</script>

<style scoped>
#course-design-chat {
  padding: 40px 100px 0px 200px;
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
  min-width: 1320px;
  align-items: flex-end;
  gap: 76px;
  border-bottom: 1px solid #E4E4E7;
}
.chat-body {
  min-width: 1320px;
  display: flex;
  flex-direction: row;
  padding: 24px 25px;
}
.title {
  flex: 1 0 0;
  color: #262626;
  font-size: 36px;
  font-weight: 600;
  line-height: 150%; /* 54px */
}
.right-container {
  width: 100%;
  .contents-container {
    width: 100%;
    border-bottom: 1px solid #E4E4E7;
    padding-bottom: 52px;
  }
}
.question{
  flex: 1 0 0;
  margin-top: 10px;
  color: #262626;
  font-size: 20px;
  font-weight: 500;
  line-height: 150%; /* 30px */
}
.question-description{
  align-self: stretch;
  margin-top: 80px;
  color: #4C4C4D;
  font-size: 18px;
  font-weight: 400;
  line-height: 150%; /* 27px */
  letter-spacing: -0.108px;
}
</style>