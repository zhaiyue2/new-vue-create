import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./i18n";
import "./plugins/element.js";
import Axios from "axios";
Vue.prototype.$http = Axios;// 挂载在原型上，后面可以在任意组件使用
Axios.defaults.baseURL = "http://localhost:8080/"; //设置公共URL

import "./assets/common/css/global.css";
import './assets/common/js/gt.js'

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount("#app");
