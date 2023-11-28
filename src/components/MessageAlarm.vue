<template>
  <div id="message-alarm">
    <div class="alarm-logo">
      <img class="logo-img" src="/assets/logo.svg"/>
    </div>
    <div class="alarm-text">{{message}}</div>
  </div>
</template>

<script>
export default {
  name: "MessageAlarm",
  props: {
    message: String
  }
}
</script>

<style scoped>
#message-alarm {
  display: flex;
  width: fit-content;
  padding: 6px 8px 6px 8px;
  justify-content: flex-start;
  align-items: center;
  border-radius: 4px;
  background: #FFDFBE;
  .alarm-logo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    margin-right: 10px;
    padding: 2.593px;
    border-radius: 6px;
    background: #FF9500;
  }
  .logo-img {
    width: 14.815px;
    height: 14.815px;
    flex-shrink: 0;
  }
  .alarm-text {
    color: #000;
    width: fit-content;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 21px */
  }
}

</style>