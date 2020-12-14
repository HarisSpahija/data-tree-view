<template>
  <div>
    <div class="header">
        <div class="header-app-name">Tree Visualization</div>
        <div class="header-links">
          <router-link to="/">D3 Tree</router-link>
          <router-link to="/about">Tree</router-link>
        </div>
        <div class="header-mobile-nav-button" @click="toggleNavigation">
        <div></div>
        <div></div>
        <div></div>
        </div>
    </div>
    <div v-if="showNavigationMenu" class="header-mobile-menu">
      <Backdrop :close="toggleNavigation" />
      <div :class="{'open': showNavigationMenu, 'close': !showNavigationMenu}"
        class="header-mobile-nav-container" @click="toggleNavigation">
        <router-link to="/">D3 Tree</router-link>
        <router-link to="/about">Tree</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';

import Backdrop from '../UI/Backdrop/Backdrop.vue';

export default Vue.extend({
  name: 'Header',
  data() {
    return {
      showNavigationMenu: false,
    };
  },
  components: {
    Backdrop,
  },
  created() {
    window.addEventListener('resize', this.handleResize);
  },
  methods: {
    toggleNavigation() {
      this.showNavigationMenu = !this.showNavigationMenu;
    },
    handleResize() {
      if (window.innerWidth > 500) {
        this.showNavigationMenu = false;
      }
    },
  },
});
</script>

<style lang="scss" scoped>
  @import './header.scss';
</style>
