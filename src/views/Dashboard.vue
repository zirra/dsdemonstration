<template>
  <div class="content-container">
    <div class="pillbox-container">
      <pillbox-view style="margin-right:2%;" :item="item_1"/>
      <pillbox-view style="margin-right:2%;" :item="item_2" />
      <pillbox-view :item="item_3"/>
    </div>
    <div style="clear:both; float:none; padding:1%;"></div>
    <div class="dashboard-overview">
      <div class="dashboard-maingraph">
        <dashboard-main />
      </div>
      <div class="dashboard-sponsors">
        <div class="brand-item" v-for="item in sponsors" v-bind:key="item._id" :style="getColor(item.color)">
          <img :src="item.img" style="height:100px;"/>
        </div>
      </div>
    </div>
    <div style="clear:both; float:none; padding-bottom:5%;"></div>
  </div>
</template>

<script>
import PillBox from '@/components/analytics/PillBox'
import DashboardMain from '@/components/analytics/DashboardMain'
export default {
  name: 'dashboard-view',
  components: {
    'pillbox-view': PillBox,
    'dashboard-main': DashboardMain
  },
  data () {
    return {
      item_1: {
        title: 'Total Scans'
      },
      item_2: {
        title: 'Top Scanned'
      },
      item_3: {
        title: 'Redeemed Offers'
      },
      sponsors: [
        {name: 'Bacardi', img: 'https://ds-stadium-bucket.s3.us-east-2.amazonaws.com/stock/icons/bacardi.png', color: 'background-color: rgba(75, 192, 192, 0.2);'},
        {name: 'Gamestop', img: 'https://ds-stadium-bucket.s3.us-east-2.amazonaws.com/stock/icons/gamestop.png', color: 'background-color: rgba(255, 206, 86, 0.2);'},
        {name: 'State Farm', img: 'https://ds-stadium-bucket.s3.us-east-2.amazonaws.com/stock/icons/statefarm.png', color: 'background-color: rgba(54, 162, 235, 0.2)'},
        {name: 'Draftkings', img: 'https://ds-stadium-bucket.s3.us-east-2.amazonaws.com/stock/icons/draftkingz.png', color: 'background-color: rgba(255, 99, 132, 0.2);'},
        {name: 'Nissan', img: 'https://ds-stadium-bucket.s3.us-east-2.amazonaws.com/stock/icons/nissan.png', color: 'background-color: rgba(153, 102, 255, 0.2);'}
        
      ]
    }
  },
  methods: {
    getColor (name) {
      console.log(name)
      return name
    }
  }
}
</script>

<style>
.pillbox-container {
  width:100%;
  clear: both;
  float: none;
  margin-bottom: 32px;
}
.dashboard-overview {
  width: 100%;
  clear: both;
  float: none;
}
.dashboard-maingraph {
  width: 66%;
  margin-right: 2%;
  float: left;
  height: 500px;
  background-color: #fff;
  border-radius: 10px;
}
.dashboard-sponsors {
  text-align: center;
  width: 32%;
  height: 500px;
  float: left;
  background-color: #fff;
}
.brand-item {
  height: 100px;
}
</style>
