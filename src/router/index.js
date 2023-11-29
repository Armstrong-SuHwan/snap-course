import Vue from "vue";
import VueRouter from "vue-router";

import MainView from "@/views/MainView";
import CourseDesignMain from "@/views/course/CourseDesignMain";
import CourseDesignChat from "@/views/course/CourseDesignChat";
import CompTestView from "@/views/CompTestView";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "MainView",
        component: MainView
    },
    {
        path: "/course",
        component: CourseDesignMain,
        children: [
            {
                path: "chat",
                name: "chat",
                component: CourseDesignChat
            }
        ]
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
