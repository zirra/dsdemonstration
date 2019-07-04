<template>
  <div class="content-container">
    <h3>Advertiser Engagement</h3>
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
        labels: ['Draft Kings', 'State Farm', 'GameStop', 'Bacardi', 'Nissan'],
        datasets: [{
            data: [12, 19, 3, 5, 2],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)'
            ],
            hoverBackgroundColor: [
              'rgba(255, 99, 132, 0.8)',
              'rgba(54, 162, 235, 0.8)',
              'rgba(255, 206, 86, 0.8)',
              'rgba(75, 192, 192, 0.8)',
              'rgba(153, 102, 255, 0.8)'
            ],
            borderColor: [
            ],
            borderWidth: 1
        }]
    },
      options: {
        cutoutPercentage: 20,
        legend: {
          display: false
        }
      }
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
