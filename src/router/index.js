import Vue from "vue";
import VueRouter from "vue-router";

import MainView from "@/views/MainView";
import CourseDesignMain from "@/views/course/CourseDesignMain";
import CourseDesignChat from "@/views/course/CourseDesignChat";
import CourseTargetView from "@/views/course/CourseTargetView";
import CompTestView from "@/views/CompTestView";
import CourseDesignName from "@/views/course/CourseDesignName";

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
        component: CourseDesignMain,
    },
    {

        path: "/course/target",
        name: "course-target",
        component: CourseTargetView
    },
    {
        path: "/course/name",
        name: "course-name",
        component: CourseDesignName
    },
    {
        path: "/course/chat",
        name: "course-chat",
        component: CourseDesignChat
    },
    {
        path: "/test",
        name: "Test",
        component: CompTestView
    },
];

const router = new VueRouter({
    mode: "history",
    routes: routes
});

export default router;
