<template>
  <div>
    <chat-card/>
    <chat-card mode="ai"/>
  </div>
</template>

<script>
import ChatCard from "@/components/ChatCard";

export default {
  name: "CompTestView",
  components: { ChatCard }
}
</script>

<style scoped lang="scss">

</style>