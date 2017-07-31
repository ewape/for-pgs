import Vue from 'vue';

export default {
    skicams(store) {
        let skicams = [];
        for (let prop in store.skicams) {
            skicams.push(store.skicams[prop]);
        }
        return skicams;
    },
    skicamsfiltered(store) {
        let skicamsfiltered = [];
        for (let prop in store.skicams) {
            store.skicamsSelected.map((item, index) => {
                if (store.skicams[prop].name === item) {
                    skicamsfiltered.push({
                        name: item,
                        cams: store.skicams[prop].cams
                    });
                }
            });
        }
        return skicamsfiltered;
    },
    skicamsMax(store) {
        return store.skicamsMax;
    },
    skicamsLoaded(store) {
        return store.skicamsLoaded;
    },
    date(store) {
        var day = store.date.getDate();
        var month = store.date.getMonth() + 1;
        var year = store.date.getFullYear();

        if (month < 10) {
            month = '0' + month;
        }

        return [day, month, year].join('-');
    },
    formFields(store) {
        return store.form;
    },
    menuOpened(store) {
        return store.menuOpened;
    },
    isMobile(store) {
        return store.isMobile;
    },
    menuMobileMax(store) {
        return store.menuMobileMax;
    }
};