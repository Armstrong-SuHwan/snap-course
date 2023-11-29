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
            <ContentsBox
                class="contents-box"
                :title="contentsBoxTitle"
                :contents="getCourseGoals"
            ></ContentsBox>
            <div class="chat-container" v-if="isSubmitted">
              <div v-if="isChatHistoryEmpty" class="chat-container-empty">
                <message-alarm
                    :message="alarmMessage"
                    class="empty-message-alarm"
                ></message-alarm>
                <main-input-box
                    class="main-input-box"
                    @ask="sendMessage"
                ></main-input-box>
              </div>
              <div v-if="!isChatHistoryEmpty" class="chat-container-not-empty">
                <chat-card v-for="(item, index) in getChatHistory"
                           :key="index"
                           :chat-message="item.message"
                           :mode="item.mode"
                           :alarm-message="'이 내용을 반영하여 학습 목표를 재생성할 수 있어요.'"
                >
                </chat-card>
                <main-input-box
                    class="main-input-box"
                    @ask="sendMessage"
                    :mode="'secondary'"
                ></main-input-box>
              </div>

            </div>
          </div>
          <course-footer
              :route-path="'/course/plan'"
          ></course-footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StepBar from "@/components/StepBar";
import ProgressTable from "@/components/ProgressTable";
import MessageAlarm from "@/components/MessageAlarm";
import ContentsBox from "@/components/ContentsBox";

import {mapGetters, mapMutations} from 'vuex'
import CourseFooter from "@/components/CourseFooter";
import MainInputBox from "@/components/MainInputBox";
import ChatCard from "@/components/ChatCard";

export default {
  name: "CourseDesignChat",
  data() {
    return {
      headerCategory: "학습목표",
      alarmMessage: "문서를 첨부하거나, 챗을 통해 학습 목표 설정에 대해 궁금한 점을 묻거나 요청하고 반영할 수 있어요.",
      contentsBoxTitle: "학습 목표",
    }
  },
  components: {
    ChatCard,
    MainInputBox,
    CourseFooter,
    ProgressTable,
    StepBar,
    MessageAlarm,
    ContentsBox
  },
  computed: {
    ...mapGetters({
      getStepIndex: 'getStepIndex',
      getProgressMessages: 'getProgressMessage',
      getStepContents: 'getStepContents',
      getProgressIndex: 'getProgressIndex',
      getSelectedCourseTitle: 'getSelectedCourseTitle',
      getCourseGoals: 'getCourseGoals',
      getChatHistory: 'getChatHistory',
      isChatHistoryEmpty: 'isChatHistoryEmpty',
    }),
    isSubmitted() {
      return this.getCourseGoals?.length;
    }
  },
  methods: {
    ...mapMutations({
      setStepIndex: 'setStepIndex',
      setProgressIndex: 'setProgressIndex',
      pushChatHistory: 'pushChatHistory',
    }),
    sendMessage(inputText) {
      this.pushChatHistory({mode:'user', message:inputText})
    },
    initCourse() {
      this.setStepIndex(2);
      this.setProgressIndex(3);
    },
    goCoursePlan() {
      this.setStepIndex(2);
      this.setProgressIndex(4);

      this.$router.push('/course/plan');
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
.title-category {
  align-self: stretch;
  color: #59595A;
  font-size: 20px;
  font-weight: 400;
  line-height: 150%; /* 30px */
}
.title {
  flex: 1 0 0;
  color: #262626;
  font-size: 36px;
  font-weight: 600;
  line-height: 150%; /* 54px */
}
.right-container {
  .contents-container {
    width: 100%;
    border-bottom: 1px solid #E4E4E7;
    padding-bottom: 52px;
  }
}
.contents-box {
  margin-bottom: 52px;
}
.empty-message-alarm {
  margin-bottom: 13px;
}




</style>