<template>
  <div style="text-align:center;">
    <h3>Advertiser Engagement</h3>
    <div style="text-align:center; margin:0px auto;">
      <div style="max-width:425px; margin:0px auto;">
        <dough-nut :chart-data="chartData" :options="options"/>
      </div>
    </div>
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
            data: [this.getRandom(50), this.getRandom(50), this.getRandom(50), this.getRandom(50), this.getRandom(50)],
            backgroundColor: [
              'rgba(77, 111, 237, 1)',
              'rgba(72, 168, 255, 1)',
              'rgba(110, 207, 255, 1)',
              'rgba(44, 62, 80, 1)',
              'rgba(64, 105, 255, 1)'
            ],
            hoverBackgroundColor: [
              'rgba(77, 111, 237, 0.5)',
              'rgba(72, 168, 255, 0.5)',
              'rgba(110, 207, 255, 0.5)',
              'rgba(44, 62, 80, 0.5)',
              'rgba(64, 105, 255, 0.5)'
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
    getRandom (max) {
      return Math.floor(Math.random() * Math.floor(max))+50
    }
  }
}
</script>

<style>

</style>
