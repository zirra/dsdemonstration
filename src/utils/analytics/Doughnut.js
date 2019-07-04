import { Doughnut, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  extends: Doughnut,
  mixins: [reactiveProp],
  props: [
    {cutoutPercentage: '50'}
  ],
  mounted () {
    this.renderChart(this.chartData, this.options)
  }
}