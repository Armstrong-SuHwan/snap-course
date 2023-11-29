<template>
  <div id="contents-box">
    <div class="title-container">
      <div class="title">
        {{title}}
      </div>
    </div>
    <div class="contents-container">
      <div class="contents" v-if="!isSubmitted">
        <p>{{contents}}</p>
        <div class="edit-icon">
          <img src="/assets/edit.svg"/>
        </div>
      </div>
      <div class="loading-container" v-if="isSubmitted">
        <div class="loading-icon">
          <img class="submit-loading" src="../../public/assets/loading.gif" alt="loading">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "ContentsBox",
  props: {
    title: String,
    contents: String,
  },
  computed: {
    ...mapGetters({
      getCourseGoals: 'getCourseGoals'
    }),
    isSubmitted() {
      return !this.getCourseGoals?.length;
    }
  }
}
</script>

<style scoped>
#contents-box {
  display: flex;
  width: 904px;
  padding: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  border-radius: 8px;
  background: #FFF;
  box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.24);
}

.title-container {
  display: flex;
  width: 100%;
  height: 40px;
  justify-content: flex-start;
  align-items: center;
  padding-left: 10px;
  background: url('../../public/assets/contents-box-title-background.png'), lightgray 50% / cover no-repeat;
  border-radius: 6px;
}
.title {
  color: #FFF;
  font-size: 24px;
  font-weight: 600;
  line-height: 100%; /* 24px */
}

.contents-container {
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
}
.contents {
  display: flex;
  width: 100%;
  justify-content: space-between;
  white-space: pre-wrap;
  color: #1B2559;
  font-size: 14px;
  font-weight: 500;
  line-height: 26px;/* 185.714% */
  .edit-icon {
    align-items: flex-end;
  }
}
.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>