<template>
  <main :class="menuClass">
    <header-main></header-main>
    <transition name="fade" mode="out-in">
      <keep-alive>
        <router-view>
        </router-view>
      </keep-alive>
    </transition>
    <footer-main></footer-main>
  </main>
</template>

<script>

import HeaderMain from './components/header-main.vue';
import FooterMain from './components/footer-main.vue';

export default {
  name: 'app',
  components: { HeaderMain, FooterMain },
  computed: {
    menuOpened() {
      return this.$store.getters.menuOpened;
    },
    menuClass() {
      return {
        'menu-open': this.menuOpened
      }
    }
  },
  methods: {
    resizeHandler() {
      this.$store.dispatch('checkMobile');
    }
  },
  mounted() {
    this.resizeHandler();
    window.addEventListener('resize', this.resizeHandler);
  }
}
</script>

<style lang="scss">
@import 'assets/scss/app';
</style>
