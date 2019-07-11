<template>
  <div class="content-container">
    <div style="width:50; background-color: #fff;">
      <stadium-controller @select-seat="callOut" />
    </div>    
    <div style="clear:both; float:none; padding:1%;"></div>
    <div style="width:100%; background-color:#fff;">
      <div style="margin:8px;">
        <h3 class="cherry">Sample Controller</h3>
        <p>Instruction for the controller module.</p>
        <p>
          <ol>
            <li>Select a module on the left</li>
            <li>Select a target option from the map or hit Send All</li>
          </ol>
        </p>
      </div>
    </div>
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
