<template>
<div>
  <div v-if="!isCompleted" class="upload-file-box"
     @click="triggerFileInput"
     @dragover.prevent="handleDragOver"
     @drop.prevent="handleFileDrop"
  >
    <img src="../../public/assets/Frame 73.svg">
    <message-alarm :message="fileUploadNotice"/>
    <input type="file" ref="fileInput" @change="handleFileUpload" style="visibility: hidden;"/>
  </div>
  <div v-else class="upload-file-box--completed">
    <img src="../../public/assets/notebook-dynamic-color.png">
    <p class="upload-file-box__notice">당신의 코스를 위한 학습 자료를 반영할 준비를 완료했어요.</p>
  </div>
</div>
</template>

<script>
import MessageAlarm from "@/components/MessageAlarm";

export default {
  name: "UploadFileBox",
  components:{MessageAlarm},
  data() {
    return{
      fileUploadNotice: "당신을 위한 코스 구성을 위해 512MB 이내의 자료를 첨부할 수 있어요. (.pdf, .md, .docx)",
      isCompleted: false,
    }
  },
  methods: {
    triggerFileInput() {
      this.$refs.fileInput.click();
    },
    handleFileUpload(event) {
      const file = event.target.files[0];
      this.uploadFile(file);
    },
    handleDragOver() {
    },
    handleFileDrop(event) {
      const file = event.dataTransfer.files[0];
      this.uploadFile(file);
    },
    uploadFile(file) {
      if (file) {
        // 파일 처리 로직
        console.log(file); // 콘솔에 파일 정보 출력 (테스트용)

        // 처리후 완료 처리
        this.isCompleted = true;
      }
    }
  }
}
</script>

<style scoped lang="scss">
.upload-file-box{
  display: flex;
  width: 904px;
  height: 477px;
  padding: 16px 22px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  border-radius: 14px;
  border: 1px solid var(--gray, #666);
  background: var(--wh, #FFF);

  cursor: pointer;

  &--completed{
    @extend .upload-file-box;
    border: 1px solid var(--Blue, #0041CF);
    background: var(--wh, #FFF);
  }

  &__notice{
    color: var(--black, #000);
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 21px */
  }
}
</style>