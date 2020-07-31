import Vue from "vue";
import VueRouter from "vue-router";
import NotFoundPage from "../components/NotFoundPage";
// import Home from "../views/Home.vue";
import Home from "../components/common/Home";
import Course from "../components/common/Course";
import LightCourse from "../components/common/LightCourse";
import Micro from "../components/common/Micro"

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        redirect: "/home"
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: "/course",
        name: "Course",
        component: Course
    },
    {
        path: "/lightCourse",
        name: "LightCourse",
        component: LightCourse
    },
    {
        path: "/micro",
        name: "Micro",
        component: Micro
    },
    //404 页面,放到最后
    { path: '*', component: NotFoundPage }
];

const router = new VueRouter({
    mode: "history",
    // base: process.env.BASE_URL,
    linkActiveClass: 'is-active',
    routes
});

export default router;
