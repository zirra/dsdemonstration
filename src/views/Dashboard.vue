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
        title: 'Scans by Brand'
      },
      item_3: {
        title: 'Redeemed Offers'
      },
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
  width: 32%;
  height: 500px;
  float: left;
  background-color: #fff;
  border-radius: 15px;
}
</style>
