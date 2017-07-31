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
                context.commit('setShowSkicamsError', false);
                context.commit('filterSkiCams');
            })
            .catch(function(error) {
                console.log(error);
                context.commit('setShowSkicamsError', true);
            });
        context.commit('setSkicamsLoaded');

    },
    checkMobile(context) {
        context.commit('setIsMobile', window.innerWidth <= context.getters.menuMobileMax);
    }
};