<template>
  <div class="content-container">
    <dough-nut :chart-data="chartData" />
  </div>
</template>

<script>
import Doughnut from '@/utils/analytics/Doughnut'
export default {
  name: 'dashboard-main',
  data () {
    return {
      chartData: {
      datasets: [{
        data: ['10', '20', '30']
      }],
      labels: [
        'Red',
        'Yellow',
        'Blue'
      ]
    },
    }
  },
  components: {
    'dough-nut': Doughnut
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style>

</style>
