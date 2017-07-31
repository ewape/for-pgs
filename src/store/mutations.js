import Vue from 'vue';

export default {
    updateSkiCams(store, skicams) {
        store.skicams = skicams;
    },
    setSkicamsLoaded(store) {
        store.skicamsLoaded = true;
    },
    closeMenu(store) {
        store.menuOpened = false;
    },
    toggleMenu(store) {
        store.menuOpened = !store.menuOpened;
    },
    setIsMobile(store, isMobile) {
        store.isMobile = isMobile;
    }
};