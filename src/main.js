import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./i18n";
//调用组件
import "./plugins/element.js";
import * as api from './restful/api';
console.log(api);
Vue.prototype.$http = api; //可以在各个组件中使用this.$http方法

import "./assets/common/css/global.css";
import './assets/common/js/gt.js'

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount("#app");
