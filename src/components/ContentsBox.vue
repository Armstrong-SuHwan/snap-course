<template>
  <div id="contents-box">
    <div class="title-container">
      <div class="title">
        {{title}}
      </div>
    </div>
    <div class="contents-container">
      <div class="contents">
        {{contents}}
      </div>
      <div class="edit-icon" @click="editContents">
        <img src="/assets/edit.svg"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentsBox",
  props: {
    title: String,
    contents: String,
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
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
}
.contents {
  color: #1B2559;
  font-size: 14px;
  font-weight: 500;
  line-height: 26px; /* 185.714% */
}
</style>