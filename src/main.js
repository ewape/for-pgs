import 'es6-promise/auto';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import VueMaterial from 'vue-material';

Vue.use(VueMaterial.MdCore);
Vue.use(VueMaterial.MdSpinner);

Vue.material.registerTheme('default', {
    primary: 'blue',
    accent: 'red',
    warn: 'red',
    background: 'grey'
});

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});