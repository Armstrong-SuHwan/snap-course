import Vue from "vue";
import VueRouter from "vue-router";

import MainView from "@/views/MainView";
import CourseDesignMain from "@/views/course/CourseDesignMain";
import CourseDesignChat from "@/views/course/CourseDesignChat";
import CourseDesignTarget from "@/views/course/CourseDesignTarget";
import CompTestView from "@/views/CompTestView";
import CourseDesignName from "@/views/course/CourseDesignName";
import CourseDesignPlan from "@/views/course/CourseDesignPlan";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "main-view",
        component: MainView
    },
    {
        path: "/course",
        name: "course-main",
        component: CourseDesignMain,
    },
    {

        path: "/course/target",
        name: "course-target",
        component: CourseDesignTarget
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
        path: "/course/plan",
        name: "course-plan",
        component: CourseDesignPlan
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
