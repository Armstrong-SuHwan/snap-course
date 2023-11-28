import { STEP_CONTENTS, PROGRESS_MESSAGE } from "../const";

export default {
    strict: true,
    state: {
        stepContents: STEP_CONTENTS,
        progressMessages: PROGRESS_MESSAGE,
        courseName: "",
        courseTarget: ""
    },
    getters: {
      getStepContents: (state) => state.stepContents,
      getProgressMessage: (state) => state.progressMessages
    },
    mutations: {},
    actions: {},
    modules: {}
};
