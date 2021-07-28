<template>
  <main>
    <el-button type="primary" @click="openModal">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
  </main>
  <wt-card title="综合风险统计">
    <div class="grid grid-flow-col grid-cols-3">
      <div>
        <wt-title title="全市当前风险点情况统计"> </wt-title>
        <PieChart id="1" />
      </div>
      <div>
        <wt-title title="全市当前风险点情况统计"> </wt-title>
        <LineChart id="2" />
      </div>
      <div >
        <wt-title title="全市当前风险点情况统计"> </wt-title>
        <LineChart id="3"/>
      </div>
    </div>
  </wt-card>
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
  <wt-modal title="管线综合统计" v-if="showModal" @close="showModal = false">
    <p class="text-sm text-gray-500" v-for="item in 100">
      Are you sure you want to deactivate your account? All of your data will be
      permanently removed.
    </p>
  </wt-modal>
</template>
<script>
import { defineComponent } from 'vue'
import LineChart from '@/components/charts/LineChart.vue'
import PieChart from '@/components/charts/PieChart.vue'
export default defineComponent({
  components: { LineChart,PieChart },
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