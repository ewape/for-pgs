import Vue from 'vue';
import axios from 'axios';

export default {
    getSkicams(context) {
        axios.get(context.state.skicamsUrl, {
                headers: {
                    'X-Mashape-Key': context.state.mashapeKey
                }
            })
            .then(function(response) {
                context.commit('updateSkiCams', response.data);
                context.commit('setSkicamsLoaded');
            })
            .catch(function(error) {
                console.log(error);
            });
    },
    checkMobile(context) {
        context.commit('setIsMobile', window.innerWidth <= context.getters.menuMobileMax);
    }
};