1<template>
  <header>
    
    <div class="blue-bar-full">
      <div style="width:85%; text-align:left; margin: 0px auto;" @click="linkAction('dashboard')">
        <img src="https://ds-stadium-bucket.s3.us-east-2.amazonaws.com/manager/branding/logo.png" alt="Digital Seat" class="branding-logo"/>
      </div>
    </div>
    
    <div class="grey-bar-full">
      <div style="width:85%; text-align:center; margin: 0px auto; ">
        <div style="height:32px; text-align:right; width:100%;">
          <div class="nav-contain" v-if="isLoggedIn">
            <div v-for="item in navItems" v-bind:key="item.name" :class="isActive(item.name)">
              <a @click="linkAction(item.name)">{{ item.label }}</a>
            </div>
          </div>
          <div class="nav-contain" v-else>
            <div class="nav-item-selected">
              Sign In
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
  </header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'navigation-main',
  computed: {
    ...mapGetters([
      'navItems',
      'navCurrent',
      'isLoggedIn'
    ])
  },
  methods: {
    ...mapActions([
      'setCurrentNav',
      'setLogin'
    ]),
    isActive: function (menuItem) {
     if (this.navCurrent === menuItem) {
       return 'nav-item-selected'
     } else {
       return 'nav-item'
     }
    },
    linkAction (target) {
      if(target !== 'logout') {
        this.setCurrentNav(target)
        this.$router.push({name: target})
      } else {
        this.setLogin(false)
        this.$router.push({name: 'dashboard'})
      }
    }
  }
}
</script>

<style>
header {
  width: 100%;
}

.blue-bar-full {
  width: 100%;
  height: 65px;
  background-color: #4069FF;
}

.grey-bar-full {
  width: 100%;
  height: 34px;
  background-color: #404040;
  text-align: right;
}

.branding-logo {
  padding: 5px 18px 20px 18px;
  width: 80px;
  border-bottom:solid 4px #404040;
  background-color: #fff;
  margin-top: 8px;
  text-align: left;
}
.nav-contain {
  height: 32px;
  text-align: right;
}
.nav-item {
  float: right;
  background-color: #4069FF;
  color: #fff;
  padding: 5px 9px;
  border-bottom: solid 2px #4069FF;
}

.nav-item-selected {
  float: right;
  background-color: #efefef;
  border-left: solid 2px #4069FF;
  border-right: solid 2px #4069FF;
  color: #f19648;
  padding: 5px 8px;
  border-bottom: solid 2px #efefef;
}

</style>
