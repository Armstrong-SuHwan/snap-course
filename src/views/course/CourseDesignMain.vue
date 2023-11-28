<template>
  <div id=course-design-main>
    <header>
      <step-bar
          :active-step-index=1
          :step-contents="getStepContents"
      ></step-bar>
    </header>
    <body>
      <div class="left-container">
        <progress-table
            :active-step-index=2
            :progress-messages="getProgressMessages"
        ></progress-table>
      </div>

      <div class="right-container">
      </div>
    </body>

  </div>
</template>

<script>
import StepBar from "@/components/StepBar";
import ProgressTable from "@/components/ProgressTable";

import {mapGetters} from 'vuex'

export default {
  name: "CourseDesignMain",
  components: {
    ProgressTable,
    StepBar
  },
  computed: {
    ...mapGetters({
      getStepContents: 'getStepContents',
      getProgressMessages: 'getProgressMessage'
    })
  }
}
</script>

<style scoped>
#course-design-main {
  padding: 40px 100px;
}
header {
  margin: 0 0 28px 0;
}

</style>