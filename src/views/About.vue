<template>
  <div class="chart-container">
    <BarChart
      height="100%"
      width="100%"
    />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import BarChart from '@/components/charts/BarChart.vue'
export default defineComponent({
  components: {
    BarChart
  }
})
</script>
