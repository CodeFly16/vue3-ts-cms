import { createApp } from 'vue';
import 'normalize.css';
import './assets/css/index.less';
import App from './App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

import router from './router/index';
import store from './store/index';
import { setupStore } from './store';

import request from './service/index';

setupStore();

const app = createApp(App);

app.config.globalProperties.$http = request;
app.use(router);
app.use(store);
app.use(ElementPlus);

app.mount('#app');
