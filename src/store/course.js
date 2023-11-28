export default {
    strict: true,
    state: {
        stepContents: ["Course 이름", "Course 생성", "Course 조정"],
        progressMessages: ["코스 이름 확정", "학습목표", "학습대상", "코스 구성", "학습자료", "일정 및 기간", "평가 및 피드백 방식"]
    },
    getters: {
      getStepContents: (state) => state.stepContents,
      getProgressMessage: (state) => state.progressMessages
    },
    mutations: {},
    actions: {},
    modules: {}
};
