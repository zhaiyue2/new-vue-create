import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./i18n";
// import "./plugins/element.js";
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'  // 注意样式文件需要单独引入
// 调用插件
Vue.use(ElementUI);
import "./assets/common/css/global.css";
import './assets/common/js/gt.js'

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount("#app");
