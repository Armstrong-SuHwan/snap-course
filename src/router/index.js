import Vue from "vue";
import VueRouter from "vue-router";

import MainView from "@/views/MainView";
import CourseDesignMain from "@/views/course/CourseDesignMain";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "MainView",
        component: MainView
    },
    {
        path: "/course",
        name: "CourseDesignMain",
        component: CourseDesignMain
    }
];

const router = new VueRouter({
    mode: "history",
    routes: routes
});

export default router;
