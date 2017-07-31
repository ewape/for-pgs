<template>
    <div class="skicam-item">
        <header>
            <h1>{{ skicam.name }}</h1>
            <p class="date">{{ date }}</p>
        </header>
        <transition name="fade" mode="out-in">
            <div class="skicam-images">
                <img v-for="(cam, key, index) in skicam.cams" :key="cam.name" v-if="cam.url && index < skicamsMax" :src="cam.url" :alt="cam.name" />
            </div>
        </transition>
    </div>
</template>

<script>

export default {
    props: ['skicam'],
    data() {
        return {
            isLoading: true
        }
    },
    computed: {
        skicamsMax() {
            return this.$store.getters.skicamsMax;
        },
        date() {
            return this.$store.getters.date;
        }
    }
}
</script>

<style lang="scss">
@import '../assets/scss/helpers/variables';
@import '../assets/scss/helpers/placeholders';

.skicam-item {
    @extend %card;
    max-width: 600px;
    border-radius: 3px;
    margin: auto;

    header {
        display: flex;
        flex-direction: column;
        text-align: center;
        padding: 2rem 1.5rem;
        position: relative;

        h1 {
            margin: 0;
        }

        .date {
            color: $text-color-light;
            font-size: 1.3rem;
            margin: 0;
        }

        @media (min-width: $mobile-md) {
            flex-direction: column-reverse;
            .date {
                position: absolute;
                top: 0;
                right: 0;
                margin: 1rem;
            }
        }
    }
}
</style>