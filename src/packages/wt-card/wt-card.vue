<template>
  <div class="w-full bg-transparent">
    <div class="bg-white m-2 rounded p-2">
      <h1 class="text-lg leading-6 font-medium text-gray-900 my-4">
        {{ title }}
      </h1>
      <!-- <div>
      <span class="text-Gray-700 border-l-4 border-blue pl-2">
        {{ title }}</span
      >
    </div> -->
      <slot />
    </div>
  </div>
  <div
    v-if="needTriangle"
    style="
      width: 0;
      height: 0;
      border-left: 40px solid transparent;
      border-right: 40px solid transparent;
      border-top: 50px solid #fff;
      margin: 0 auto;
      margin-top: -20px;
    "
  ></div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'wt-card',
  props: {
    title: {
      type: String,
      default: '',
    },
    needTriangle: {
      type: Boolean,
      default: false,
    },
  },
})
</script>
