<template>
  <div>
    <chat-card/>
    <chat-card mode="ai"/>
    <main-input-box/>
    <main-input-box mode="secondary"/>
  </div>
</template>

<script>
import ChatCard from "@/components/ChatCard";
import MainInputBox from "@/components/MainInputBox";

export default {
  name: "CompTestView",
  components: {MainInputBox, ChatCard }
}
</script>

<style scoped lang="scss">

</style>