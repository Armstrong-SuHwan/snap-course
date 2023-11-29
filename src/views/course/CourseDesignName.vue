<template>
  <div id=course-design-chat>
    <div class="chat-view-container">
      <div class="chat-header">
        <step-bar
            :active-step-index="getStepIndex"
            :step-contents="getStepContents"
        ></step-bar>
        <div>
          <div class="title">코스 이름 확정</div>
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
                class="message-alarm"
                :message="alarmMessage"
            ></message-alarm>
            <div v-for="item in getCourseTitleList"
                 :key="item.index"
                 class="course-item"
                 @click="goCourseChat(item.content)"
            >
              <div>{{item.index + ". " + item.content}}</div>
            </div>
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

import {mapGetters, mapMutations} from 'vuex'
import CourseFooter from "@/components/CourseFooter";

export default {
  name: "CourseTargetView",
  data() {
    return {
      alarmMessage: "아래는 추천 코스 이름입니다. 아래의 예시에서 하나를 선택해주세요.",
      courseSubject: "",
      courseTarget: "",
    }
  },
  components: {
    ProgressTable,
    StepBar,
    MessageAlarm,
    CourseFooter,
  },
  computed: {
    ...mapGetters({
      getStepIndex: 'getStepIndex',
      getProgressMessages: 'getProgressMessage',
      getStepContents: 'getStepContents',
      getProgressIndex: 'getProgressIndex',
      getCourseTitleList: 'getCourseTitleList'
    })
  },
  methods:{
    ...mapMutations({
      setStepIndex: 'setStepIndex',
      setProgressIndex: 'setProgressIndex',
      setCourseTarget: 'setCourseTarget',
      selectCourseTitle: 'selectCourseTitle'
    }),

    initCourse() {
      this.setStepIndex(2);
      this.setProgressIndex(2);
    },
    goCourseChat(inputText) {
      console.log(inputText);
      this.setStepIndex(2);
      this.setProgressIndex(3);
      this.selectCourseTitle(inputText);

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
.message-alarm {
  margin-bottom: 20px;
}
.course-item {
  padding: 5px;
}
.course-item:hover {
  color: #0041CF;
  font-weight: bolder;
}
</style>