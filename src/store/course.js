import { STEP_CONTENTS, PROGRESS_MESSAGE } from "../const";

export default {
    strict: true,
    state: {
        websocket: null,
        stepContents: STEP_CONTENTS,
        progressMessages: PROGRESS_MESSAGE,
        stepIndex: 1,
        progressIndex: 1,
        courseSubject: "",
        courseTarget: "",
        courseTitleList: [],
        selectedCourseTitle: "",
        courseGoals: "",
        chatHistory: []
    },
    getters: {
        getStepIndex: (state) => state.stepIndex,
        getProgressIndex: (state) => state.progressIndex,
        getCourseSubject: (state) => state.courseSubject,
        getCourseTarget: (state) => state.courseTarget,
        getStepContents: (state) => state.stepContents,
        getProgressMessage: (state) => state.progressMessages,
        getCourseTitleList: (state) => state.courseTitleList,
        getCourseGoals: (state) => state.courseGoals,
        getSelectedCourseTitle: (state) => state.selectedCourseTitle,
        getChatHistory: (state) => state.chatHistory,
        isChatHistoryEmpty: (state) => state.chatHistory.length === 0
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
        setCourseGoals(state, courseGoals) {
            state.courseGoals = courseGoals;
        },
        pushChatHistory(state, inputObject){
            state.chatHistory.push(inputObject);
        }
    },
    actions: {
        connectWebsocket({commit}) {
            const websocket = new WebSocket('ws://localhost:8080');

            websocket.onopen =() => {
                console.log("connected websocket...");
            }

            websocket.onmessage = (event) => {
                const message = event.data;
                if (message.action === 'generateCourseTitle') {
                    commit('setCourseTitleList', message.data);
                }
                if (message.action === 'generateCourseGoals') {
                    let goals = ""
                    message.data.map((item) => {
                        goals = item.content
                        goals = item.index === message.data.length ? item.content : item.content + "\n"
                    });
                    commit('setCourseGoals', goals);
                }
                // TODO: updatePlan
                // if (message.action === 'updatePlan') {
                // }
            };

            websocket.onerror = (event) => {
                console.error('websocket error...', event);
            };

            websocket.onclose = () => {
                console.log('connection closed...');
            };
        },
        generateCourseTitle({state}, payload) {
            if(state.websocket) {
                state.websocket.send({...payload, action:'generateCourseTitle'});
            }
        },
        generateCourseGoals({state}, payload) {
            if(state.websocket) {
                state.websocket.send({...payload, action:'generateCourseGoals'});
            }
        }
    }
};
