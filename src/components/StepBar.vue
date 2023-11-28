<template>
  <div id="step-bar">
    <div class="index-container">
      <div class="step">{{ "Step" }}</div>
      <div class="index">{{ activeStepIndex +  "/" + stepContents.length }}</div>
    </div>
    <div class="contents-container">
      <div v-for="(item, index) in stepContents"
           :class="{
              'step-content-item-active': index===activeStepIndex-1,
              'step-content-item-inactive': index!==activeStepIndex-1
           }"
           class="step-content-item"
           :key="index">
        <div class="step-content-text"> {{item}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StepBar",
  props: {
    stepContents: Array,
    activeStepIndex: Number
  }
}
</script>

<style scoped>
#step-bar {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
}

.index-container {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 2px;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  line-height: 150%;
  > .step {
    color: #1C1C1C;
    font-weight: 500;
  }
  > .index {
    color: #FC7F00;
    font-weight: 700;
  }
}

.contents-container {
  display: flex;
  height: 36px;
  padding: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  border-radius: 82px;
  border: 1px solid #262626;
  background: #1C1C1C;
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  line-height: 150%;

  > .step-content-item-inactive {
    display: flex;
    width: 80px;
    height: 24px;
    padding: 5px 24px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;

    > .step-content-text {
      color: #FFF;
    }
  }

  > .step-content-item-active {
    /* 여기에 원하는 CSS 스타일 추가 */
    display: flex;
    width: 80px;
    height: 24px;
    padding: 5px 24px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 20px;
    background: #FC7F00;

    > .step-content-text {
      color: #1C1C1C;
    }
  }
}


</style>