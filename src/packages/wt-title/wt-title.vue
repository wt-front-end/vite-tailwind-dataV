<!--
 * @Author: xkloveme
 * @Date: 2021-07-27 17:21:13
 * @LastEditTime: 2021-07-27 17:46:02
 * @LastEditors: xkloveme
 * @Description: title组件
 * @FilePath: /shijianwei-dx-hidden-danger/src/packages/wt-title/wt-title.vue
 * @Copyright © xkloveme
-->
<template>
  <div>
    <span class="text-Gray-700 border-l-4 border-blue pl-2"> {{ title }}</span>
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
  },
})
</script>
