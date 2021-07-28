<template>
  <wt-card title="综合风险统计">
    <div class="grid grid-flow-col grid-cols-3">
      <div>
        <wt-title title="全市当前风险点情况统计" needClick @handleClick="showModal=true"> </wt-title>
        <PieChart id="1" />
      </div>
      <div>
        <wt-title title="高中风险数量点演变统计(以月为单位) "> </wt-title>
        <LineChart id="2" />
      </div>
      <div>
        <wt-title title="高、中风险路段公里数"> </wt-title>
        <LineChart id="3" />
      </div>
    </div>
  </wt-card>
  <wt-card title="各部门月度处置情况统计">
    <h2>各部门处置次数总计121次</h2>
    <div class="grid grid-flow-col grid-cols-3"></div>
  </wt-card>
  <wt-card title="体系内运行数据概览">
    <div class="grid grid-flow-col grid-cols-2">
      <div>
        <wt-title title="全市当前风险点情况统计"> </wt-title>
        <PieChart id="4"/>
      </div>
      <div>
        <wt-title title="高中风险数量点演变统计(以月为单位) " needClick @handleClick="showModal=true">
        </wt-title>
        <LineChart />
      </div>
    </div>
  </wt-card>
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
  components: { LineChart, PieChart },
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