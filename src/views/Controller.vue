<template>
  <div class="content-container">
    <stadium-controller @select-seat="callOut" />
  </div>
</template>

<script>
import StadiumControl from '@/components/navigation/StadiumControl'
export default {
  name: 'controller-view',
  components: {
    'stadium-controller': StadiumControl
  },
  methods : {
    callOut (id) {
      console.log(id)
    }
  },
  sockets: {
    connect () {
      this.isConnected = true
      console.log('server connected')
    },

    disconnect () {
      this.isConnected = false
      console.log('server disconnected')
    }
  }
}
</script>

<style>

</style>
