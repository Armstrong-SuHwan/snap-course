import { STEP_CONTENTS, PROGRESS_MESSAGE } from "../const";

export default {
    strict: true,
    state: {
        stepContents: STEP_CONTENTS,
        progressMessages: PROGRESS_MESSAGE,
        stepIndex: 1,
        progressIndex: 1,
        courseSubject: "",
        courseTarget: "",
        courseName: "",
        learningObjectives: ""
    },
    getters: {
        getStepIndex: (state) => state.stepIndex,
        getProgressIndex: (state) => state.progressIndex,
        getCourseSubject: (state) => state.courseSubject,
        getCourseTarget: (state) => state.courseTarget,
        getStepContents: (state) => state.stepContents,
        getProgressMessage: (state) => state.progressMessages
    },
    mutations: {
        setStepIndex(state, stepIndex) {
            state.stepIndex = stepIndex;
        },
        setProgressIndex(state, progressIndex) {
            state.progressIndex = progressIndex;
        },
        setCourseSubject(state, courseSubject) {
            state.courseSubject = courseSubject;
        },
        setCourseTarget(state, courseTarget) {
            state.courseTarget = courseTarget;
        },
        setCourseName(state, courseName) {
            state.courseName = courseName;
        },
        setLearningObjectives(state, learningObjectives) {
            state.learningObjectives = learningObjectives;
        }
    },
    actions: {
    },
    modules: {}
};
