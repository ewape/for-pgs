<template>
    <div class="container">
        <transition name="scale" mode="in-out">
            <div class="spinner-centered" v-if="!skicamsLoaded">
                <md-spinner md-indeterminate class="spinner-accent"></md-spinner>
            </div>
        </transition>
        <transition name="fade" mode="out-in">
            <ul class="columns-2" v-if="skicamsLoaded">
                <li v-for="skicam in skicamsfiltered" :key="skicam.name">
                    <cams v-bind:skicam="skicam"></cams>
                </li>
            </ul>
        </transition>
        <transition name="fade" mode="out-in">
            <div v-if="showSkicamsError">Skicams are not available at this time. Please try again later.</div>
        </transition>
    </div>
</template>

<script>

import Cams from './../components/cams.vue';

export default {
    components: { Cams },
    computed: {
        skicamsfiltered() {
            return this.$store.getters.skicamsfiltered;
        },
        skicamsLoaded() {
            return this.$store.getters.skicamsLoaded;
        },
        showSkicamsError() {
            return this.$store.getters.showSkicamsError;
        }
    },
    mounted() {
        this.$store.dispatch('getSkicams');
    }
}
</script>