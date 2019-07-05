<template>
  <div class="content-container">
    <div v-if="hasBrand">
      I haz a brand to display
    </div>
    <div v-else>
      I haz no brandz
    </div>
  </div>
</template>

<script>
export default {
  name: 'analytics-view',
  data () {
    return {
      hasBrand: false
    }
  },
  mounted () {
    if(this.$route.params.id) {
      this.hasBrand = true
    } else {
      this.hasBrand = false
    }
  }
}
</script>

<style>

</style>
