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
        chatHistory: [],
        coursePlan: "",
        courseCurriculum: [],
        queryProcessing: false,
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
        isChatHistoryEmpty: (state) => state.chatHistory.length === 0,
        getCoursePlan: (state) => state.coursePlan,
        getCourseCurriculum: (state) => state.courseCurriculum,
        getQueryProcessing: (state) => state.queryProcessing,
    },
    mutations: {
        setInit(state) {
            state.websocket = null;
            state.stepContents = STEP_CONTENTS;
            state.progressMessages = PROGRESS_MESSAGE;
            state.stepIndex = 1;
            state.progressIndex = 1;
            state.courseSubject = "";
            state.courseTarget = "";
            state.courseTitleList = [];
            state.selectedCourseTitle = "";
            state.courseGoals = "";
            state.chatHistory = [];
            state.coursePlan = "";
        },
        setWebsocket(state, socket) {
            state.websocket = socket
        },
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
            console.log(courseTitleList);
            state.courseTitleList = courseTitleList;
        },
        selectCourseTitle(state, courseTitle) {
            state.selectedCourseTitle = courseTitle;
        },
        setCourseGoals(state, courseGoals) {
            state.courseGoals = courseGoals;
        },
        setCoursePlan(state, coursePlan) {
            state.coursePlan = coursePlan;
        },
        pushChatHistory(state, inputObject){
            state.queryProcessing = false;
            state.chatHistory.push(inputObject);
        },
        setCourseCurriculum(state, courseCurriculum) {
            state.courseCurriculum = courseCurriculum;
        }
    },
    actions: {
        connectWebsocket({commit}) {
            const websocket = new WebSocket('ws://localhost:3001');

            websocket.onopen =() => {
                console.log("connected websocket...");
            }

            websocket.onmessage = (event) => {
                const message = JSON.parse(event.data);
                if (message.action === 'generateCourseTitle') {
                    commit('setCourseTitleList',message.data);
                }
                if (message.action === 'generateCourseGoals') {
                    let goals = ""
                    message.data.map((item) => {
                        const currentGoalText = item.index + '. ' + item.content + "\n";
                        goals = goals + currentGoalText;
                    });
                    commit('setCourseGoals', goals);
                }
                if (message.action === 'generateCourseCurriculum') {
                    commit('setCourseCurriculum', message.data);
                }
                if (message.action === 'postQueryForGoals') {
                    commit('pushChatHistory', {mode:'ai', message:message.data});
                }
            };

            websocket.onerror = (event) => {
                console.error('websocket error...', event);
            };

            websocket.onclose = () => {
                console.log('connection closed...');
            };

            commit('setWebsocket', websocket);
        },
        generateCourseTitle({state}, payload) {
            if(state.websocket) {
                console.log({...payload, action:'generateCourseTitle'})
                state.websocket.send(JSON.stringify({...payload, action:'generateCourseTitle'}));
            }
        },
        generateCourseGoals({state}, payload) {
            if(state.websocket) {
                state.websocket.send(JSON.stringify({...payload, action:'generateCourseGoals'}));
            }
        },
        uploadCoursePlan({state, commit}, payload) {
            if(state.websocket) {
                state.websocket.send(JSON.stringify({...payload, action:'uploadCoursePlan'}));
                commit('setCoursePlan', payload.coursePlan);
            }
        },
        generateCourseCurriculum({state}) {
            if(state.websocket) {
                state.websocket.send(JSON.stringify({action:'generateCourseCurriculum'}));
            }
        },
        postQueryForGoals({state}, payload) {
            if(state.websocket) {
                console.log(payload);
                state.queryProcessing = true;
                state.websocket.send(JSON.stringify({query: payload, action:'postQueryForGoals'}));
            }
        }
    }
};
