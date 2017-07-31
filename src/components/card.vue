<template>
    <transition name="fade" mode="out-in">
        <div class="card">
            <router-link :to="slug" v-if="!isLoading">
                <div class="card-image">
                    <slot name="card-image" class="card-image"></slot>
                </div>
                <div class="card-content">
                    <slot></slot>
                </div>
            </router-link>
        </div>
    </transition>
</template>

<script>

export default {
    props: ['slug'],
    data() {
        return {
            isLoading: true
        }
    },
    mounted() {
        this.isLoading = false;
    }
}
</script>

<style lang="scss">
@import '../assets/scss/helpers/variables';
@import '../assets/scss/helpers/mixins';
@import '../assets/scss/helpers/placeholders';

.card {
    @extend %card;
    @include transition(box-shadow);
    position: relative;
    display: flex;
    max-width: 438px;
    margin: auto;

    &:hover {
        @extend %box-shadow-hover;
    }

    a {
        display: block;
        color: $text-color-light;
        text-decoration: none;

        &:hover {
            color: $text-color-light;

            img {
                transform: scale(1.05);
            }
        }
    }
}

.card-image {
    overflow: hidden;
    height: 0;
    padding-bottom: 60%;

    img {
        @include transition(transform);
        width: 100%;
        backface-visibility: hidden;
        will-change: true
    }
}

.card-content {
    padding: 3rem 2rem;

    h1 {
        margin: 0;
    }

    p {
        &:last-of-type {
            margin-bottom: 0;
        }
    }
}
</style>