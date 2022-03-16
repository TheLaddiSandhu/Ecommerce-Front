<template>
  <v-card id="account-setting-card">
    <!-- tabs -->
    <v-tabs
      v-model="tab"
      show-arrows
    >
      <v-tab
        v-for="tab in tabs"
        :key="tab.icon"
      >
        <v-icon
          size="20"
          class="me-3"
        >
          {{ tab.icon }}
        </v-icon>
        <span>{{ tab.title }}</span>
      </v-tab>
    </v-tabs>

    <!-- tabs item -->
    <v-tabs-items v-model="tab">
      <v-tab-item>
        <profile-settings-account :account-data="accountSettingData"></profile-settings-account>
      </v-tab-item>

      <v-tab-item>
        <my-purchases></my-purchases>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import { mdiAccountOutline, mdiLockOpenOutline, mdiInformationOutline, mdiShoppingOutline } from '@mdi/js'
import { ref } from '@vue/composition-api'

// demos
import ProfileSettingsAccount from './ProfileSettingsAccount.vue'
import MyPurchases from './MyPurchases.vue'

export default {
  components: {
    ProfileSettingsAccount,
    MyPurchases,
  },
  setup() {
    const tab = ref('')

    // tabs
    const tabs = [
      { title: 'Account', icon: mdiAccountOutline },
      { title: 'My Purchases', icon: mdiShoppingOutline  },
      // { title: 'Info', icon: mdiInformationOutline },
    ]

    return {
      tab,
      tabs,
      icons: {
        mdiAccountOutline,
        mdiLockOpenOutline,
        mdiInformationOutline,
        mdiShoppingOutline
      },
    }
  },
  computed: {
    accountSettingData() {
      return this.$store.state.users.filter((user) => user.id = this.$store.state.session.userId)[0];
    }
  }
}
</script>
