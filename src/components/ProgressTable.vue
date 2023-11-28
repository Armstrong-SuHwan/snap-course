<template>
  <div id="progress-table">
    <div v-for="(item, index) in progressMessages"
         :class="{
              'progress-message-complete': index < activeProgressIndex-1,
              'progress-message-active': index === activeProgressIndex-1,
              'progress-message-inactive': index > activeProgressIndex-1
           }"
         class="progress-message-item"
         :key="index">
      <div class="progress-container">
        <div class="progress-icon">
          <img :src="getIconPath(index)" />
        </div>
        <div class="progress-message-text">{{item}}</div>
      </div>
      <div class="now-alarm-box" v-show="index === activeProgressIndex-1">
        <div class="now-alam-text">{{"now"}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgressTable",
  props:{
    progressMessages: Array,
    activeProgressIndex: Number
  },
  methods: {
    getIconPath(index) {
      if (index < this.activeProgressIndex - 1) {
        return "/assets/progress-icon-complete.svg"; // 경로는 실제 프로젝트에 맞게 조정하세요
      } else if (index === this.activeProgressIndex - 1) {
        return "/assets/progress-icon-active.svg"; // 경로는 실제 프로젝트에 맞게 조정하세요
      } else {
        return "/assets/progress-icon-inactive.svg"; // 경로는 실제 프로젝트에 맞게 조정하세요
      }
    }
  }
}
</script>

<style scoped>
#progress-table {
  padding: 36px 37px 36px 27px;
}
.progress-message-item {
  display: flex;
  width: 270px;
  height: 31px;
  justify-content: stretch;
  align-items: center;
  font-family: Plus Jakarta Sans;
  font-style: normal;
  gap: 20px;

  .progress-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .progress-icon {
    width: 18px;
    height: 18px;
    margin-right: 15px;
  }
  .progress-message-text {
    font-size: 16px;
    font-weight: 500;
    line-height: 30px; /* 187.5% */
  }
  .now-alarm-box {
    display: flex;
    width: 50px;
    height: 22px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 39px;
    background: #FFDFBE;
  }
  .now-alarm-box {
    color: #0041CF;
    font-size: 12px;
    font-weight: 700;
    line-height: 16px; /* 133.333% */
  }
}
.progress-message-complete {
  color: #FC7F00;
  opacity: 0.35;
}
.progress-message-active {
  color: #000;
}
.progress-message-inactive {
  color: #718096;
  opacity: 0.35;
}
</style>