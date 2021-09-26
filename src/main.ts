import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

import router from './router/index';
import store from './store/index';
import request from './service/index';

const app = createApp(App);
app.config.globalProperties.$http = request;
app.use(router).use(store).use(ElementPlus).mount('#app');
