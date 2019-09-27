<template>
  <div class="content-container">
    <div class="brand-container" >
      <div v-for="item in sponsors" v-bind:key="item.id">
        <div :class="getClass(item.name)" @click="setBrand(item.name)" v-bind:key="actingBrand">
          <img :src="item.img" style="height:94px; padding:0px;"/>
        </div>
      </div>
    </div>
    <div v-if="hasBrand">
      <br/>
      <div class="pillbox-container">
        <pillbox-view style="margin-right:2%;" :item="item_1" v-bind="item_1"/>
        <pillbox-view style="margin-right:2%;" :item="item_2" v-bind="item_2"/>
        <pillbox-view :item="item_3" v-bind="item_3"/>
      </div>
      <div style="clear:both; float:none; padding:1%;"></div>
      <div style="width:100%;">
        <div style="width:265px; margin-right:20px; background-color:#fff; float:left; text-align:center;">
          <h3>Items pushed</h3>
          <dough-nut :chart-data="mydata_one" :options="dummydata.options" />
        </div>
        <div style="width:265px; margin-right:20px; background-color:#fff; float:left; text-align:center;">
          <h3>Engagement by game</h3>
          <line-chart :chart-data="mydata_two" :options="lineOpts" />
        </div>

        <div style="width:265px; margin-right:20px; background-color:#fff; float:left; text-align:center;">
          <h3>Offers Engaged</h3>
          <bar-chart :chart-data="mydata_three" :options="barOpts" />
        </div>

        <div style="width:265px; background-color:#fff; float:left; text-align:center;">
          <h3>Promos Sent</h3>
          <bar-chart :chart-data="mydata_four" :options="barOpts" />
        </div>
      </div>
      
      <div style="clear:both; float:none; padding:1%;"></div>

      <div style="width:100%; margin-top:20px; background-color:#fff; padding: 4px; margin: 4px;">
        <h3>Sample Dashboard</h3>
        <p>This is the Digital Seat sample demonstration dashboard, our application collects data ranging from user device information to application engagement.</p>
      </div>

    </div>
    <div v-else style="width:98%; background-color:#fff; padding:1%;">
      <h3 class="med-blue">Select a brand to view data</h3>
    </div>
  </div>
</template>

<script>
import { api } from '@/utils/api'
import Doughnut from '@/utils/analytics/Doughnut'
import LineChart from '@/utils/analytics/LineChart'
import Bar from '@/utils/analytics/HBar'
import PillBox from '@/components/analytics/PillBox'
import moment from 'moment'

import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'analytics-view',
  data () {
    return {
      offer: 0,
      promo: 0,
      item_1: {
        title: 'Date',
        value: moment().format('MM/YY')
      },
      item_2: {
        title: 'Offers',
        value: 0
      },
      item_3: {
        title: 'Promos',
        value: 0
      },
      data_one: [this.getRandom(50), this.getRandom(50), this.getRandom(50), this.getRandom(50), this.getRandom(50)],
      data_two: [this.getRandom(50), this.getRandom(50), this.getRandom(50), this.getRandom(50), this.getRandom(50)],
      data_three: [this.getRandom(50), this.getRandom(50), this.getRandom(50), this.getRandom(50), this.getRandom(50)],
      data_four: [this.getRandom(50), this.getRandom(50), this.getRandom(50), this.getRandom(50), this.getRandom(50)],
      hasBrand: false,
      currentBrand: null,
      actingBrand: null,
      lineOpts: {
        legend: {
          display: false
        }
      },
      barOpts: {
        legend: {
          display: false
        },
      scales: {
          yAxes: [{
            barPercentage: 0.5,
            barThickness: 6,
            maxBarThickness: 8,
            minBarLength: 2,
            gridLines: {
                offsetGridLines: true
            }
          }]
        }
      }
    }
  },
  components: {
    'pillbox-view': PillBox,
    'dough-nut': Doughnut,
    'line-chart': LineChart,
    'bar-chart': Bar
  },
  mounted () {
    this.setCurrentNav('analytics')
    if(this.$route.params.id) {
      this.hasBrand = true
      this.currentBrand = this.$route.params.id
      api.getRawSpec(`https://socket.digitalseat.io/v1/data/totals/${this.currentBrand}`)
        .then( response => {
          this.item_2.value = response.data.offcount
          this.item_3.value = response.data.procount
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
    } else {
      this.hasBrand = false
    }
  },
  methods: {
    getRandom (max) {
      return Math.floor(Math.random() * Math.floor(max))+50
    },
    getClass (name) {
      let lname = name.toLowerCase()
      if (lname === this.currentBrand) {
        return 'brand-item-horizontal-selected'
      } else {
        return 'brand-item-horizontal'
      }
    },
    setBrand (name) {
      this.data_one = [this.getRandom(50), this.getRandom(50), this.getRandom(50), this.getRandom(50), this.getRandom(50)]
      this.data_two = [this.getRandom(50), this.getRandom(50), this.getRandom(50), this.getRandom(50), this.getRandom(50)]
      this.data_three = [this.getRandom(50), this.getRandom(50), this.getRandom(50), this.getRandom(50), this.getRandom(50)]
      this.data_four = [this.getRandom(50), this.getRandom(50), this.getRandom(50), this.getRandom(50), this.getRandom(50)]

      let lname = name.toLowerCase()

      this.hasBrand = true
      this.currentBrand = lname
      this.actingBrand = lname

      api.getRawSpec(`https://socket.digitalseat.io/v1/data/totals/${lname}`)
        .then( response => {
          this.item_2.value = response.data.offcount
          this.item_3.value = response.data.procount
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
    },
    ...mapActions([
      'setCurrentNav'
    ])
  },
  computed: {
    mydata_one () {
      let chartData= {
        labels: ['Draft Kings', 'State Farm', 'GameStop', 'Bacardi', 'Nissan'],
        datasets: [{
            data: this.data_one,
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
      }
      return chartData
    },
    mydata_two () {
      let chartData= {
        labels: ['Draft Kings', 'State Farm', 'GameStop', 'Bacardi', 'Nissan'],
        datasets: [{
            data: this.data_two,
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
      }
      return chartData
    },
    mydata_three () {
      let chartData= {
        labels: ['Draft Kings', 'State Farm', 'GameStop', 'Bacardi', 'Nissan'],
        datasets: [{
            data: this.data_three,
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
      }
      return chartData
    },
    mydata_four () {
      let chartData= {
        labels: ['Draft Kings', 'State Farm', 'GameStop', 'Bacardi', 'Nissan'],
        datasets: [{
            data: this.data_four,
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
      }
      return chartData
    },
    ...mapGetters([
      'sponsors',
      'dummydata'
    ])
  }
}
</script>

<style>
.brand-container{
  /* border-top-left-radius:10px;
  border-top-right-radius:10px; */
  width:100%;
  height:100px;
  background-color: #48A8FF;
  float:none;
}
.brand-item-horizontal{
  text-align: center;
  float: left;
  height:100px;
  width: 20%;
}
.brand-item-horizontal-selected{
  text-align: center;
  float: left;
  width: 20%;
  height:100px;
  background-color: #fff;
}
</style>