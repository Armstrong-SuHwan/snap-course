import Vue from "vue";
import Vuex from "vuex";

import course from "@/store/course";

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    modules: {
        course
    }
});
