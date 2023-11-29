<template>
<div class="session-card">
  <div>
    <div style="margin-left: 4px">
      <p class="session-card__session-seq-title">Session {{sessionSeq}}.</p>
      <p class="session-card__title">{{ title }}</p>
      <p class="session-card__goal">{{ goal }}</p>
    </div>
    <div class="session-card__content-container">
      <div v-for="(content, index) in contentList" :key="`contentList+${index}`" class="session-card__content">
        <p class="session-card__content-detail">{{content.content}}</p>
        <div class="session-card__content-time">
          <img class="session-card__content-time-ico" src="../../public/assets/timer-icon.svg"/>
          <p class="session-card__contetnt-time-period">{{content.time}}</p>
        </div>
      </div>
    </div>
  </div>

</div>
</template>

<script>
export default {
  name: "SessionCard",
  props: {
    sessionSeq: {
      type:Number,
      default: 1
    },
    title:{
      type:String,
      default: ""
    },
    goal:{
      type:String,
      default: ""
    },
    contentList:{
      type: Array,
      default: () => []
    },
  }
}
</script>

<style scoped lang="scss">
.session-card{
  display: flex;
  width: 362px;
  flex-direction: column;
  align-items: center;
  padding: 8px;

  border-radius: 10px;
  background: var(--wh, #FFF);
  font-family: Pretendard;

  //align-items: center;
  gap: 12px;
  flex: 1 0 0;

  border: 1px solid var(--white-95, #F1F1F3);

  &__session-seq-title{
    color: var(--grey-15, #262626);
    font-size: 48px;
    font-style: normal;
    font-weight: 600;
  }

  &__title{
    color: var(--grey-20, #333);
    font-size: 18px;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: -0.12px;
    margin-top: 16px;
  }

  &__goal{
    color: var(--grey-20, #333);
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: 100%; /* 24px */
    letter-spacing: -0.096px;

    margin-top: 8px;
    margin-bottom: 8px;
    max-width: 322px;
  }

  &__content-container{
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    width: 272px;
    height: 48px;

    padding: 20px 24px;
    align-items: center;
    gap: 6px;
    align-self: stretch;

    border-radius: 6px;
    border: 1px solid var(--white-95, #F1F1F3);
  }

  &__content-detail{
    width: 242px;

    color: var(--grey-20, #333);
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
  }

  &__content-time {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    width: 68px;
    align-items: center;
    gap: 4px;

    border-radius: 6px;
    background: var(--white-97, #F7F7F8);
  }
  &__contetnt-time-period {
    color: var(--grey-35, #59595A);
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
}


</style>