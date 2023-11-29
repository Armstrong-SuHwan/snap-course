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
          <div class="contents-container" >
            <div class="loading-container" v-if="isEmptyCurriculum">
              <div class="loading-icon">
                <img class="submit-loading" src="../../../public/assets/loading.gif" alt="loading">
              </div>
            </div>
            <div v-if="!isEmptyCurriculum">
              <session-card-box :session-list="getCourseCurriculum"></session-card-box>
              <main-input-box
                  :mode="'secondary'"
              ></main-input-box>
            </div>
          </div>
          <course-footer
          :route-path="'/course/upload'"></course-footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from 'vuex'
import StepBar from "@/components/StepBar";
import ProgressTable from "@/components/ProgressTable";
import CourseFooter from "@/components/CourseFooter";
import MainInputBox from "@/components/MainInputBox";
import SessionCardBox from "@/components/SessionCardBox";

export default {
  name: "CourseTargetView",
  data() {
    return {
      alarmMessage: "코스에 대한 계획을 설정해주세요.",
    }
  },
  components: {
    SessionCardBox,
    MainInputBox,
    ProgressTable,
    StepBar,
    CourseFooter,
  },
  computed: {
    ...mapGetters({
      getStepIndex: 'getStepIndex',
      getProgressMessages: 'getProgressMessage',
      getStepContents: 'getStepContents',
      getProgressIndex: 'getProgressIndex',
      getSelectedCourseTitle: 'getSelectedCourseTitle',
      getCourseCurriculum: 'getCourseCurriculum',
    }),
    isEmptyCurriculum() {
      return this.getCourseCurriculum?.length === 0;
    }
  },
  methods:{
    ...mapMutations({
      setStepIndex: 'setStepIndex',
      setProgressIndex: 'setProgressIndex',
    }),
    ...mapActions({
      generateCourseCurriculum: 'generateCourseCurriculum'
    }),
    initCourse() {
      this.setStepIndex(2);
      this.setProgressIndex(6);
    },
    goCourseDocument(inputText) {
      console.log(inputText)
      // const payload = {
      //   plan: inputText
      // }
      // this.uploadCoursePlan(payload);
      this.setStepIndex(3);
      this.setProgressIndex(6);
    }
  },
  created() {
    this.generateCourseCurriculum()
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
.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>