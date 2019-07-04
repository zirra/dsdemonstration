<template>
  <div class="content-container">  
    <div class="pillbox-container">
      <pillbox-view style="margin-right:2%;"/>
      <pillbox-view style="margin-right:2%;" />
      <pillbox-view/>
    </div>
    <div style="clear:both; float:none; padding:1%;"></div>
    <div class="dashboard-overview">
      <div class="dashboard-maingraph">
      </div>
      <div class="dashboard-sponsors">
      </div>
    </div>
  </div>
</template>

<script>
import PillBox from '@/components/analytics/PillBox'
export default {
  name: 'dashboard-view',
  components: {
    'pillbox-view': PillBox
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
  height: 480px;
  float: left;
  background-color: #fff;
  border-radius: 15px;
}
.dashboard-sponsors {
  width: 32%;
  height: 480px;
  float: left;
  background-color: #fff;
  border-radius: 15px;
}
</style>
