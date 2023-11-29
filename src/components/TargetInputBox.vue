<template>
<div class="input-area" ref="main-input-area">
  <textarea
      class="input-area__field"
      v-model="inputText"
      @input="adjustHeight"
      @keydown="handleKeyDown"
      ref="main-input-area-field"
  />
  <div>
    <div v-if="!isSubmitted" class='input-area__ask-btn' @click="askClicked">
      <p>Submit</p>
    </div>
    <div v-if="isSubmitted">
      <img class="submit-loading" src="../../public/assets/loading.gif" alt="loading">
    </div>
  </div>
</div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "TaretInputBox",
  data() {
    return {
      inputText: "",
    }
  },
  props:{
    mode: {
      type: String,
      default: "primary"
    }
  },
  computed: {
    ...mapGetters({
      getProgressIndex:'getProgressIndex'
    }),
    isSubmitted() {
      return this.getProgressIndex === 2;
    }
  },
  methods: {
    adjustHeight(e) {
      const element = e.target;
      element.style.height = '28px';
      element.style.height = `${element.scrollHeight - 18}px`;
      console.log(element.scrollHeight);
    },
    askClicked() {
      this.$emit('submit', this.inputText);
      this.inputText = '';
      this.$refs["main-input-area-field"].style.height='28px';
    },
    handleKeyDown(event){
      if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault(); // 기본 Enter 동작(줄바꿈) 방지
        // Enter만 눌렀을 때의 특정 이벤트 처리
        this.$emit('ask', this.inputText);
        this.inputText = '';
        this.$refs["main-input-area-field"].style.height='28px';
      }
    }
  }
}
</script>

<style scoped lang="scss">
.input-area{
  display: flex;
  align-items: flex-end;
  gap: 10px;

  &__field{
    width: 645px;
    height: 28px;
    min-height: 28px; // 기본 높이
    padding: 10px 18px 6px 18px; // 상단 및 하단 패딩 조정

    overflow: hidden;
    resize: none;

    border-radius: 20px;
    border: 1px solid #E2E8F0;

    color: #222222;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 19px;

    margin-bottom: 4px;

    &:focus {
      border: 2px solid #FC7F00; // 포커스 시 보더 색상 변경
      outline: none; // 기본 브라우저 아웃라인 제거
    }
  }

  &__add-btn{
    width: 54px;
    height: 54px;
    cursor: pointer;
  }

  &__ask-btn{
    display: flex;
    width: 192px;
    height: 54px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;

    border-radius: 45px;
    background: var(--Orange, #FC7F00);

    color: var(--wh, #FFF);
    text-align: center;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 16px; /* 114.286% */

    cursor: pointer;

    &--secondary{
      @extend .input-area__ask-btn;
      color: var(--Orange, #FC7F00);
      background: var(--wh, #FFF);
      border: 1px solid var(--Orange, #FC7F00);
    }
  }

  .submit-loading {
    width: 54px;
    height: 54px;
  }
}

</style>