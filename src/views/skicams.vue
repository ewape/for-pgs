<template>
    <div class="container">
        <transition name="scale" mode="out-in">
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
    </div>
</template>

<script>

import Cams from './../components/cams.vue';

export default {
    components: { Cams },
    computed: {
        skicams() {
            return this.$store.getters.skicams;
        },
        skicamsfiltered() {
            return this.$store.getters.skicamsfiltered;
        },
        skicamsLoaded() {
            return this.$store.getters.skicamsLoaded;
        }
    },
    mounted() {
        this.$store.dispatch('getSkicams');
    }
}
</script>