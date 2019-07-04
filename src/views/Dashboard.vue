<template>
  <div class="content-container">  
    <div class="pillbox-container">
      <pillbox-view style="margin-right:2%;"/>
      <pillbox-view style="margin-right:2%;" />
      <pillbox-view />
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
}
</style>
