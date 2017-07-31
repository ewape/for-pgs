<template>
    <header class="main-header">
        <div class="container">
            <router-link :to="'/'" class="brand">
                <img src="./../assets/img/logo.svg" alt="PGS Software" />
            </router-link>
    
            <nav class="main-menu" v-if="!hideMenu">
                <ul>
                    <li v-for="route in routes" :key="route.name">
                        <router-link :to="route.path" @click.native="closeMenu">{{ route.name }}</router-link>
                    </li>
                </ul>
            </nav>
    
        </div>
    
        <button type="button" class="btn nav-btn" v-if="isMobile" @click="toggleMenu">
            <span></span>
            <span></span>
            <span></span>
        </button>
    
    </header>
</template>

<script>
export default {

    data() {
        return {
            routes: []
        }
    },
    methods: {
        toggleMenu() {
            return this.$store.commit('toggleMenu');
        },
        closeMenu() {
            return this.$store.commit('closeMenu');
        }
    },
    computed: {
        hideMenu() {
            return this.$store.getters.isMobile ? !this.$store.getters.menuOpened : false;
        },
        isMobile() {
            return this.$store.getters.isMobile;
        }
    },
    created() {
        this.$router.options.routes.map(route => {
            if (route.name !== '404') {
                this.routes.push({
                    name: route.name,
                    path: route.path
                });
            }
        });
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/helpers/variables';
@import '../assets/scss/helpers/placeholders';
@import '../assets/scss/helpers/mixins';

header {
    background-color: #fff;
    @extend %box-shadow;
}

.container {
    padding-top: 0;
    padding-bottom: 0;
}

.brand {
    margin: 1rem 0;
    float: left;

    img {
        height: 30px;
        display: block;
    }
}

.main-menu {
    clear: both;

    ul {
        margin: 0;
    }

    a {
        @include menu-link();
    }

    li {
        display: inline-block;

        &:first-child {
            a {
                margin-left: 0;
            }
        }
    }
}

@media (max-width: $tablet) {
    .main-header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;
    }

    .main-menu {

        .menu-open & {
            position: fixed;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
            background: rgba(#fff, 0.95);
            display: flex;
            justify-content: center;
            align-items: center;

            li {
                display: block;
                text-align: center;
                margin: 1rem;

                a {
                    margin: 0;
                }
            }
        }
    }
}

@media (min-width: $tablet+1) {
    .brand {
        margin: 3rem 0;

        img {
            height: 60px;
        }
    }
}
</style>


