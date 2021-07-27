<!--
 * @Author: xkloveme
 * @Date: 2021-07-27 14:36:53
 * @LastEditTime: 2021-07-27 16:18:34
 * @LastEditors: xkloveme
 * @Description: 弹窗
 * @FilePath: /shijianwei-dx-hidden-danger/src/packages/wt-modal/wt-modal.vue
 * @Copyright © xkloveme
-->
<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div
    class="fixed z-10 inset-0 overflow-y-auto"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="
        flex
        items-end
        justify-center
        min-h-screen
        pt-4
        px-4
        pb-20
        text-center
        sm:block
        sm:p-0
      "
    >
      <div
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      ></div>

      <!-- This element is to trick the browser into centering the modal contents. -->
      <span
        class="hidden sm:inline-block sm:align-middle sm:h-screen"
        aria-hidden="true"
        >&#8203;</span
      >
      <div
        class="
          w-full
          h-full
          inline-block
          align-bottom
          bg-white
          rounded-lg
          text-left
          overflow-hidden
          shadow-xl
          transform
          transition-all
          sm:align-middle
          sm:max-w-lg
          sm:w-full
        "
      >
        <div class="bg-white px-4 pt-1 pb-4 sm:p-6 sm:pb-4 border-2 border-blue-300">
          <h1>
            <span class="text-lg leading-6 font-medium text-gray-900">{{ title }}</span>
            <button
              type="button"
              @click="close"
              class="
                px-1
                py-0.5
                w-full
                float-right
                text-medium
                inline-flex
                justify-center
                items-center
                rounded-md
                border border-gray-100
                shadow-sm
                bg-white
                text-base
                font-medium
                text-gray-700
                hover:bg-gray-50
                focus:outline-none
                focus:ring-2 focus:ring-offset-2 focus:ring-blue
                sm:mt-0
                sm:w-auto
                sm:text-sm
              "
            >
              <i class="el-icon-caret-left"></i>
              返回
            </button>
          </h1>

          <div class="sm:flex sm:items-start">
            <div class="text-center sm:mt-0 sm:text-left">
              <div class="mt-2">
                <slot/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'wt-modal',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  methods:{
    close(){
      this.$emit('close',false)
    }
  }
})
</script>