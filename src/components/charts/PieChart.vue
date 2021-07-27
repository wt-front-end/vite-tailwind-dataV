<!--
 * @Description: 折线图
 * @Author: xkloveme
 * @Date: 2021-01-14 15:10:44
 * @LastEditors: xkloveme
 * @LastEditTime: 2021-07-27 18:30:35
-->
<template>
  <div
    :id="id"
    :class="className"
    :style="{ height: height, width: width, minHeight: minHeight }"
  />
</template>

<script lang="ts">
import {
  defineComponent,
  onActivated,
  onBeforeUnmount,
  onDeactivated,
  onMounted,
  nextTick,
} from 'vue'
import resize from './mixins/resize'
import { init, EChartsOption } from 'echarts'
import * as echarts from 'echarts'
export default defineComponent({
  props: {
    className: {
      type: String,
      default: 'chart',
    },
    id: {
      type: String,
      default: 'lineChartsCompoents' + new Date(),
    },
    width: {
      type: String,
      default: '100%',
    },
    height: {
      type: String,
      default: '200px',
    },
    minHeight: {
      type: String,
      default: '200px',
    },
  },
  setup(props) {
    const { mounted, chart, beforeDestroy, activated, deactivated } = resize()
    const initChart = () => {
      const barChart = init(document.getElementById(props.id) as HTMLDivElement)
      const mockData = [
        { total: '550', detail: '高风险',color:'#d40000' },
        { total: '106', detail: '中风险',color:'#f1924e'  },
        { total: '275', detail: '已降级',color:'#1492ff'  },
        { total: '222', detail: '已消除',color:'#11a144' },
      ]
      let datas = []
      mockData.map((item) => {
        datas.push({
          value: item.total,
          name: item.detail,
          color:item.color
        })
      })
      barChart.setOption({
        backgroundColor: '#fff',
        tooltip: {
          show: true,
        },
        legend: {
          right: '0%',
          top: '15%',
          left: '50%',
          bottom: '10%',
          data: mockData.map((item) => item.detail),
          icon: 'circle',
          formatter: (params) => {
            const dataAll = mockData.map((item) => Number(item.total))
            const total = dataAll.reduce(
              (x, y) => parseInt(x, 10) + parseInt(y, 10)
            )
            const value = Number(
              mockData.filter((item) => item.detail === params)[0].total
            )
            if (total === 0) {
              return `{a|${params}：}{b|0个}`
            }
            const name = params
            return `{a|${name}：}{b|${value}个}`
          },
          textStyle: {
            rich: {
              a: {
                color: '#120000',
                width: 70,
                fontSize: 14,
                fontWeight: 'bold',
                align: 'left',
              },
              b: {
                color: '#18355C',
                fontSize: 14,
                fontWeight: 'bold',
              },
            },
          },
          selectorPosition: 'start',
          align: 'left',
          itemHeight: 8,
          itemWidth: 8,
          itemGap: 30,
        },
        series: [
          {
            type: 'pie',
            radius: ['40%', '65%'],
            center: ['20%', '50%'],
            hoverAnimation: true,
            z: 10,
            itemStyle: {
              normal: {
                borderWidth: 5,
                borderColor: '#003359',
              },
            },
            label: {
              show: false,
            },
            data: datas,
            labelLine: {
              show: false,
            },
          },
        ],
      } as EChartsOption)
      chart.value = barChart
    }

    onMounted(() => {
      mounted()
      nextTick(() => {
        initChart()
      })
    })

    onBeforeUnmount(() => {
      beforeDestroy()
    })

    onActivated(() => {
      activated()
    })

    onDeactivated(() => {
      deactivated()
    })

    return {}
  },
})
</script>
