<template>
  <div>
    <chat-card/>
    <chat-card mode="ai"/>
    <main-input-box/>
    <main-input-box mode="secondary"/>
    <upload-file-box/>
    <session-card/>
    <session-card-box/>
  </div>
</template>

<script>
import ChatCard from "@/components/ChatCard";
import MainInputBox from "@/components/MainInputBox";
import UploadFileBox from "@/components/UploadFileBox";
import SessionCard from "@/components/SessionCard";
import SessionCardBox from "@/components/SessionCardBox";

export default {
  name: "CompTestView",
  components: {SessionCardBox, MainInputBox, ChatCard,UploadFileBox, SessionCard }
}
</script>

<style scoped lang="scss">

</style>