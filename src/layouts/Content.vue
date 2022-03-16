<template>
  <v-app>
    <!-- <vertical-nav-menu :is-drawer-open.sync="isDrawerOpen"></vertical-nav-menu> -->
    <v-app-bar app flat:color="!$vuetify.theme.dark ? 'white' : '#28243D'">
    <div style="display: flex; height: 64px; justify-content: space-between !important; width: 100%;">
      <div class="vertical-nav-header d-flex items-center ps-6 pe-5 pt-5 pb-2">
        <router-link to="/" class="d-flex align-center text-decoration-none">
          <v-img
            :src="$vuetify.theme.dark?  require('@/assets/logo/logo-white.svg'): require('@/assets/logo/logo.svg')" max-height="30px" max-width="30px"
            alt="logo"
            contain
            eager
            class="app-logo me-3"
          ></v-img>
          <h2 class="app-title text--primary">VueKart</h2>
        </router-link>
      </div>
      <div class="boxed-container" style="margin: 0px">
        <div class="d-flex align-center mx-12">

          <v-spacer></v-spacer>

          <theme-switcher style="padding: 20px"></theme-switcher>

          <router-link tag="button" v-on="on" to="/cart" icon style="padding: 20px">
            <v-badge :content="cart" :value="cart" overlap>
              <v-icon>{{ icons.mdiCartVariant }}</v-icon>
            </v-badge>
          </router-link>
          <app-bar-user-menu style="padding: 20px"></app-bar-user-menu>
        </div>
      </div>

    </div>
    </v-app-bar>

    <v-main>
      <div class="app-content-container boxed-container pa-6">
        <slot></slot>
      </div>
    </v-main>

    <v-footer app inset color="transparent" absolute height="56" class="px-0">
      <div class="boxed-container w-full">
        <div class="mx-6 d-flex justify-space-between">
          <span>
            &copy; Conestoga college
            <a target="_blank">VueKart</a></span
          >
        </div>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
import { ref } from '@vue/composition-api'
import { mdiMagnify, mdiBellOutline, mdiGithub, mdiCartVariant } from '@mdi/js'
import VerticalNavMenu from './components/vertical-nav-menu/VerticalNavMenu.vue'
import ThemeSwitcher from './components/ThemeSwitcher.vue'
import AppBarUserMenu from './components/AppBarUserMenu.vue'

export default {
  components: {
    VerticalNavMenu,
    ThemeSwitcher,
    AppBarUserMenu,
  },
  setup() {
    const isDrawerOpen = ref(null)

    return {
      isDrawerOpen,

      // Icons
      icons: {
        mdiMagnify,
        mdiBellOutline,
        mdiGithub,
        mdiCartVariant,
      },
    }
  },
  computed: {
    cart() {
      return this.$store.state.session.cart.length
    },
  },
}
</script>

<style lang="scss" scoped>
.v-app-bar ::v-deep {
  .v-toolbar__content {
    padding: 0;

    .app-bar-search {
      .v-input__slot {
        padding-left: 18px;
      }
    }
  }
}

.boxed-container {
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
}
</style>
