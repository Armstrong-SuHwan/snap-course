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
        courseTitleList: [
            {"index":1,"content":"JS 마스터를 위한 전문가의 노하우: 고급 JavaScript 테크닉"},
            {"index":2,"content":"진정한 개발자를 위한 도전: 고급 JavaSc"},
            {"index":3,"content":"현업에서 바로 쓰는 고급 JavaScript: 실전 프로젝트 가이드"},
            {"index":4,"content":"JS 고수가 되는 길: ES6 이상의 모 던 JavaScript"},
            {"index":5,"content":"content부터 Async/Await까지"},
            {"index":6,"content":"JavaScript 성능 최적화: 고급 개발자 를 위한 성능 튜닝 전략"},
            {"index":7,"content":"실무자를 위한 Node.js"},
            {"index":8,"content":"React, Vue, Angular: 고급 JavaScript와 프레임워크 심화"},
            {"index":9,"content":"함수형 프로그래밍과 JavaScript: 고급 개발 패러다임의 이급 자바스크립트 디자인 패턴: 클린 코드를 위한 전략"}
        ],
        selectedCourseTitle: "",
        learningObjectives: ""
    },
    getters: {
        getStepIndex: (state) => state.stepIndex,
        getProgressIndex: (state) => state.progressIndex,
        getCourseSubject: (state) => state.courseSubject,
        getCourseTarget: (state) => state.courseTarget,
        getStepContents: (state) => state.stepContents,
        getProgressMessage: (state) => state.progressMessages,
        getCourseTitleList: (state) => state.courseTitleList,
        getSelectedCourseTitle: (state) => state.selectedCourseTitle,
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
        setCourseTitleList(state, courseTitleList){
            state.courseTitleList = courseTitleList;
        },
        selectCourseTitle(state, courseTitle) {
            state.selectedCourseTitle = courseTitle;
        },
        setLearningObjectives(state, learningObjectives) {
            state.learningObjectives = learningObjectives;
        }
    },
    actions: {
    },
    modules: {}
};
