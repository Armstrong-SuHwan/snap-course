<template>
<div class="session-card-box">
  <session-card v-for="(session, index) in sessionList"
    :key="`sessionList#${index}`"
    :sessionSeq="session.session"
    :title="session.title"
    :goal="session.goal"
    :contentList="session.contentList"
  />
</div>
</template>

<script>
import SessionCard from "@/components/SessionCard";

export default {
  name: "SessionCardBox",
  components: {
    SessionCard
  },
  props:{
    sessionList: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped lang="scss">
.session-card-box {
  width: 784px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-gap: 20px;
}
</style>