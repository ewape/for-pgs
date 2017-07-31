import Vue from 'vue';

export default {
    updateSkiCams(store, skicams) {
        store.skicams = skicams;
    },
    setSkicamsLoaded(store) {
        store.skicamsLoaded = true;
    },
    setShowSkicamsError(store, val) {
        store.showSkicamsError = !!val;
    },
    filterSkiCams(store) {
        store.skicamsfiltered = [];
        for (let prop in store.skicams) {
            if (store.skicamsSelected.indexOf(store.skicams[prop].name) > -1) {
                store.skicamsfiltered.push({
                    name: store.skicams[prop].name,
                    cams: store.skicams[prop].cams
                });
            }
        }

        if (!store.skicamsfiltered.length) {
            store.showSkicamsError = true;
        }
    },
    updateFilteredSkicams(store, skicams) {
        store.skicamsfiltered = skicams;
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