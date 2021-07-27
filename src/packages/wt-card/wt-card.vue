<template>
  <div class="bg-white w-full rounded p-2">
<h1>{{title}}</h1>
    <div>
      <span class="text-Gray-700 border-l-4 border-blue pl-2"> {{ title }}</span>
    </div>
    <slot />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name:'wt-card',
  props: {
    title:{
      type:String,
      default:''
    },
  }
})
</script>
