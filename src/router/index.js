import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import AboutUs from './../views/about-us.vue';
import SkiCams from './../views/skicams.vue';
import Contact from './../views/contact.vue';
import PageNotFound from './../views/404.vue';

export default new VueRouter({
    routes: [{
            path: '/',
            name: 'About us',
            component: AboutUs
        },
        {
            path: '/skicams',
            name: 'Skicams',
            component: SkiCams
        },
        {
            path: '/contact',
            name: 'Contact',
            component: Contact
        },
        {
            path: '*',
            name: '404',
            component: PageNotFound
        }
    ],
});