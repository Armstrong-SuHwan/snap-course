<template>
<div>
  <div v-if="mode==='user'" class="user-chat-card">
    <div class="user-chat-card__container">
      <p>{{chatMessage}}</p>
    </div>
  </div>

  <div v-if="mode!=='user'" class="ai-chat-card">
    <div class="ai-chat-card__container">
      <p>{{chatMessage}}</p>
      <div class="ai-chat-card__footer"  v-if="(getChatHistory.length - 1) === index">
        <message-alarm class="ai-chat-card__message-alarm" :message="alarmMessage"/>
        <div class="ai-chat-card__apply-btn">
          <img src="../../public/assets/thumb-up-dynamic-color.png">
          <p @click="reflectChat">반영하기</p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import messageAlarm from "@/components/MessageAlarm";
import {mapActions, mapGetters, mapMutations} from "vuex";

export default {
  name: "ChatCard",
  components: {messageAlarm},

  props: {
    index: {
      type: Number,
      default: 0
    },
    chatMessage: {
      type: String,
      default: "hello I'm test user chat\nhello I'm test user chat\nhello I'm test user chat\n...\nhello I'm test user chat"
    },
    mode: {
      type: String,
      default: "user"
    },
    alarmMessage: {
      type: String,
      default: "alarm message 입니다. alarm message 입니다."
    }
  },
  computed: {
    ...mapGetters({
      getSelectedCourseTitle: 'getSelectedCourseTitle',
      getChatHistory: 'getChatHistory',
    })
  },
  methods: {
    ...mapMutations({
      clearCourseGoals: 'clearCourseGoals'
    }),
    ...mapActions({
      generateCourseGoals: 'generateCourseGoals'
    }),
    reflectChat() {
      this.clearCourseGoals();
      const payload = {
        title: this.getSelectedCourseTitle
      }
      this.generateCourseGoals(payload);
    }
  }

}
</script>

<style scoped lang="scss">
.user-chat-card{
  &__container{
    width: 904px;

    display: flex;
    flex-direction: column;

    border-radius: 14px;
    border: 1px solid var(--line-gray, #E0E0E0);

    padding: 16px 22px;

    color: #222;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    white-space: pre-wrap;

    margin-bottom: 16px;
  }
}
.ai-chat-card{
  &__container{
    @extend .user-chat-card__container;
    border-radius: 14px;
    border: 1px solid var(--gray, #666);
    background: var(--wh, #FFF);
  }
  &__footer {
    display: flex;
    margin-top: 12px;
    align-items: center;

  }
  &__apply-btn{
    margin-left: 20px;
    display: flex;
    width: 102px;
    height: 33px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;

    border-radius: 45px;
    border: 1px solid var(--line-gray, #E0E0E0);

    color: var(--black, #000);
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px; /* 114.286% */

    cursor: pointer;
  }
}
</style>