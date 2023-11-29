<template>
  <div id=course-design-chat>
    <div class="chat-view-container">
      <div class="chat-header">
        <step-bar
            :active-step-index="getStepIndex"
            :step-contents="getStepContents"
        ></step-bar>
        <div>
          <div class="title-category">코스 이름</div>
          <div class="title">{{ getSelectedCourseTitle }}</div>
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
            <upload-file-box></upload-file-box>
          </div>
          <course-footer
              :route-path="'/course/complete'"
          ></course-footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
import StepBar from "@/components/StepBar";
import ProgressTable from "@/components/ProgressTable";
import CourseFooter from "@/components/CourseFooter";
import UploadFileBox from "@/components/UploadFileBox";

export default {
  name: "CourseTargetView",
  data() {
    return {
      alarmMessage: "코스에 대한 계획을 설정해주세요.",
    }
  },
  components: {
    ProgressTable,
    StepBar,
    UploadFileBox,
    CourseFooter,
  },
  computed: {
    ...mapGetters({
      getStepIndex: 'getStepIndex',
      getProgressMessages: 'getProgressMessage',
      getStepContents: 'getStepContents',
      getProgressIndex: 'getProgressIndex',
      getSelectedCourseTitle: 'getSelectedCourseTitle',
    })
  },
  methods:{
    ...mapMutations({
      setStepIndex: 'setStepIndex',
      setProgressIndex: 'setProgressIndex',
    }),
    initCourse() {
      this.setStepIndex(2);
      this.setProgressIndex(5);
    },
    goCourseComplete(inputText) {
      console.log(inputText)
      // const payload = {
      //   plan: inputText
      // }
      // this.uploadCoursePlan(payload);
      this.setStepIndex(2);
      this.setProgressIndex(6);
      this.$router.push('/course/complete');
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