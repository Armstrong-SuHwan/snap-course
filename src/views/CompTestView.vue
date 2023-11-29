<template>
  <div>
    <chat-card/>
    <chat-card mode="ai"/>
    <main-input-box/>
    <main-input-box mode="secondary"/>
    <upload-file-box/>
  </div>
</template>

<script>
import ChatCard from "@/components/ChatCard";
import MainInputBox from "@/components/MainInputBox";
import UploadFileBox from "@/components/UploadFileBox";

export default {
  name: "CompTestView",
  components: {MainInputBox, ChatCard,UploadFileBox }
}
</script>

<style scoped lang="scss">

</style>