<template>
  <div class="content-container" style="background-color: #fff;">
    <div class="brand-container" >
      <div v-for="item in sponsors" v-bind:key="item.id">
        <div :class="getClass(item.name)" @click="setBrand(item.name)" v-bind:key="actingBrand">
          <img :src="item.img" style="height:94px; padding:3px;"/>
        </div>
      </div>
    </div>
    <div v-if="hasBrand">
      I haz a brand to display {{currentBrand}}
    </div>
    <div v-else style="width:98%; background-color:#fff; padding:1%;">
      <h3 class="med-blue">Select a brand to view data</h3>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'analytics-view',
  data () {
    return {
      hasBrand: false,
      currentBrand: null,
      actingBrand: null
    }
  },
  mounted () {
    this.setCurrentNav('analytics')
    if(this.$route.params.id) {
      this.hasBrand = true
      this.currentBrand = this.$route.params.id
    } else {
      this.hasBrand = false
    }
  },
  methods: {
    getClass (name) {
      let lname = name.toLowerCase()
      if (lname === this.currentBrand) {
        return 'brand-item-horizontal-selected'
      } else {
        return 'brand-item-horizontal'
      }
    },
    setBrand (name) {
      let lname = name.toLowerCase()
      this.hasBrand = true
      this.currentBrand = lname
      this.actingBrand = lname
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
  width: 20%;
}
.brand-item-horizontal-selected{
  text-align: center;
  float: left;
  width: 20%;
  background-color: #fff;
}
</style>
