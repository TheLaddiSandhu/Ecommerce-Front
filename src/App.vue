<template>
  <component :is="resolveLayout">
    <router-view></router-view>
  </component>
</template>

<script>
import { computed } from '@vue/composition-api'
import { useRouter } from '@/utils'
import LayoutBlank from '@/layouts/Blank.vue'
import LayoutContent from '@/layouts/Content.vue'
import UpgradeToPro from './components/UpgradeToPro.vue'

export default {
  components: {
    LayoutBlank,
    LayoutContent,
    UpgradeToPro,
  },
  setup() {
    const { route } = useRouter()

    const resolveLayout = computed(() => {
      // Handles initial route
      if (route.value.name === null) return null

      if (route.value.meta.layout === 'blank') return 'layout-blank'

      return 'layout-content'
    })

    return {
      resolveLayout,
    }
  },
}
</script>
<style>
.v-application .white--text {
    color: #726B83 !important;
    caret-color: #fff !important;
}

.v-application .white--text--dark {
    color: #726B83 !important;
    caret-color: #000 !important;
}

.v-application .subtitle-1 {
  font-size: 0.875rem !important;
}
.v-application .font-weight-thin{
  font-weight: 200 !important;
}
</style>
