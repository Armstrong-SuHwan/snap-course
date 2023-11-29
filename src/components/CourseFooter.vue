<template>
  <div class="footer-container">
    <div class="chat-footer">
      <div class="go-prev-container">
        <img class="go-prev-icon" src="/assets/prev-Icon.svg"/>
        <div class="go-prev-text">Prev.</div>
      </div>
      <div class="go-next-container">
        <div class="go-next-text">Next</div>
        <img class="go-next-icon" src="/assets/next-Icon.svg"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CourseFooter"
}
</script>

<style scoped>
.chat-footer {
  display: flex;
  justify-content: space-between;
  min-width: 600px;
  padding-top: 52px;
  .go-prev-container {
    display: flex;
    width: 109px;
    padding: 14px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 8px;
    border: 1px solid #0041CF;
    background: #FFF;
    .go-prev-text {
      width: 50px;
      height: 20px;
      color: #0041CF;
      text-align: center;
      font-size: 14px;
      font-weight: 600;
      line-height: 16px; /* 114.286% */
    }
    .go-prev-icon {
      width: 28px;
      height: 28px;
      flex-shrink: 0;
    }
  }
  .go-next-container {
    display: flex;
    width: 109px;
    padding: 14px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 8px;
    background: #0041CF;

    .go-next-text {
      width: 50px;
      height: 20px;
      color: #FFF;
      text-align: center;
      font-size: 14px;
      font-weight: 600;
      line-height: 16px; /* 114.286% */
    }
    .go-next-icon {
      width: 28px;
      height: 28px;
      flex-shrink: 0;
    }
  }
}

</style>