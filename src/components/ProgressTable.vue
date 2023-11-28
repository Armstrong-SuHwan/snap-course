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
      <div class="logo" @click="navigateHome">
        <img src="../assets/logo.svg"/>
      </div>
      <div class="progress-message-text"> {{item}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgressTable"
}
</script>

<style scoped>
#progress-table {
  padding: 36px 37px 36px 27px;
}
.progress-message-item {
  width: 270px;
  height: 31px;

  .progress-message-text {
    font-family: Plus Jakarta Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px; /* 187.5% */
  }
}
</style>