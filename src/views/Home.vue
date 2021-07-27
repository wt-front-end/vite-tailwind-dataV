<template>
  <main>

    <el-button type="primary" @click="openModal">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
  </main>
  <wt-card title="baiti">11</wt-card>
      <div class="px-4 py-6 sm:px-0">
      <div
        class="
          border-4 border-dashed border-gray-200
          rounded-lg
          h-96
          p-4
          text-center text-gray-400
        "
      >
        Here goes your content. You can also go the About page.
      </div>
    </div>
  <wt-modal title="管线综合统计" v-if="showModal" @close="showModal=false">
    <p class="text-sm text-gray-500" v-for="item in 100">
      Are you sure you want to deactivate your account? All of your data will be
      permanently removed.
    </p>
  </wt-modal>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  data: () => ({
    showModal: false,
  }),
  methods: {
    openModal() {
      this.showModal = true
    },
  },
})
</script>