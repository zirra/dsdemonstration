<template>
  <div class="content-container">
    <dough-nut :chart-data="chartData" :options="options"/>
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
          data: ['10', '20', '30','50','15']
        }],
        labels: [
          'Draft Kings',
          'Nissan',
          'State Farm',
          'Bacardi',
          'Gamestop'
        ],
        backgroundColors: [
          '#0074D9', 
          '#FF4136', 
          '#2ECC40', 
          '#FF851B', 
          '#7FDBFF'
        ]
      },
      options: {cutoutPercentage: 20}
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
