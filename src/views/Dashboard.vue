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
        <div class="brand-item" v-for="item in sponsors" v-bind:key="item._id" :style="getColor(item.color)" @click="analyze(item.name)">
          <img :src="item.img" style="height:94px;"/>
        </div>
      </div>
    </div>
    <div style="clear:both; float:none; padding-bottom:5%;"></div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import PillBox from '@/components/analytics/PillBox'
import DashboardMain from '@/components/analytics/DashboardMain'
export default {
  name: 'dashboard-view',
  components: {
    'pillbox-view': PillBox,
    'dashboard-main': DashboardMain
  },
  mounted () {
    this.setCurrentNav(this.$route.name) 
  },
  data () {
    return {
      item_1: {
        title: 'Total Scans',
        value: '45k'
      },
      item_2: {
        title: 'Top Scanned',
        value: '12.5k'
      },
      item_3: {
        title: 'Redeemed Offers',
        value: '43.2k'
      }
    }
  },
  methods: {
    getColor (name) {
      return name
    },
    analyze (name) {
      let lname = name.toLowerCase()
      this.$router.push(`/analytics/${lname}`)
    },
    ...mapActions([
      'setCurrentNav'
    ])
  },
  computed: {
    ...mapGetters([
      'sponsors'
    ])
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
  height: 500px;
  background-color: #fff;
  /* border-radius: 10px; */
}
.dashboard-maingraph {
  width: 66%;
  margin-right: 2%;
  float: left;
  height: 500px;
  background-color: #fff;
  /* border-radius: 10px; */
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
