<template>
  <div class="bg-transparent w-full h-full bg-blue-500">
    <div class="max-w-screen-xl mx-auto py-6 sm:px-6 lg:px-8">
      <router-link
        v-for="(link, i) in links"
        :key="i"
        :to="link.to"
        custom
        v-slot="{ navigate, href, isExactActive }"
      >
        <a
          :href="href"
          @click="navigate"
          class="px-3 py-2 rounded-md text-sm font-medium"
          :class="[
            isExactActive
              ? 'text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700'
              : 'text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700',
            i > 0 && 'ml-4',
          ]"
          >{{ link.text }}</a
        >
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  data: () => ({
    showMenu: false,
    showProfileMenu: false,
    links: [
      { text: 'Home', to: '/' },
      { text: 'Risk', to: '/risk' },
      { text: 'Test', to: '/test' },
    ],
  }),
})
</script>
