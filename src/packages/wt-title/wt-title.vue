<!--
 * @Author: xkloveme
 * @Date: 2021-07-27 17:21:13
 * @LastEditTime: 2021-07-28 16:22:40
 * @LastEditors: xkloveme
 * @Description: title组件
 * @FilePath: /shijianwei-dx-hidden-danger/src/packages/wt-title/wt-title.vue
 * @Copyright © xkloveme
-->
<template>
  <div class="my-2">
    <span class="text-Gray-700 border-l-4 border-blue pl-2"> {{ title }}</span>
    <div
      @click="handleClick"
      v-if="needClick"
      class="
        rounded
        float-right
        bg-green-100
        text-green
        px-2
        py-0.1
        mr-3
        cursor-pointer
      "
    >
      查看详情
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'wt-title',
  props: {
    title: {
      type: String,
      default: '',
    },
    needClick: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClick() {
      this.$emit('handleClick')
    },
  },
})
</script>
