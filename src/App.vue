<template>
  <div id="app">
    <navigation-view/>
    <div id="main" v-if="isLoggedIn">
      <div class="content-container">
        <h2 class="cherry">{{navCurrent}}</h2>
      </div>
      <router-view/>
    </div>
    <div v-else>
      <signin-view />
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/navigation/Navigation'
import SignIn from '@/components/SignIn'

import { mapMutations, mapGetters } from 'vuex'

export default {
  mounted () {
    if (this.user) {
      this.setLoginState(true)
    }
  },
  components: {
    'navigation-view': Navigation,
    'signin-view': SignIn
  },
  methods: {
    ...mapMutations([
      'setLoginState'
    ])
  },
  computed: {
    ...mapGetters([
      'navCurrent',
      'isLoggedIn',
      'user'
    ])
  }
}
</script>

<style>
html, body { width: 100%; padding: 0px; margin: 0px; background-color: #efefef;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin:0px;
  padding: 0px;
  width: 100%;
}

h1, h2, h3, h4 {
  margin-top: 12px;
  text-transform: uppercase;
  font-weight: 300;
}

.tech-blue { color: #4069FF; }
.med-blue { color: #48A8FF; }
.bright-blue { color: #6ECFFF;}
.green { color: #06ed94; }
.grey { color: #404040; }
.gold { color: #f5cc5d; }
.apricot { color: #f19648; }
.cherry { color: #ef5854; }
.magenta { color: #b3378a; }

#main {
  width: 100%;
  text-align: center;
  margin: 0px auto;
  margin-top: 24px
}
.content-container {
  width: 85%;
  text-align: left;
  margin: 0px auto;
}

.under {
  text-decoration: underline;
}

input {
  width: 90%;
  max-width: 320px;
  padding: 8px 5px;
  border: 0px;
  border-bottom: solid 1px #999;
  font-size: 1em;
  color: #989898;
}

select {
  width: 90%;
  max-width: 320px;
  padding: 8px 5px;
  background-color: rgba(0,0,0,0);
  border-bottom: solid 1px #999;
  font-size: 1em;
  color: #404040;
}

input:focus { 
  border: 0px;
  outline: none;
  background-color: #f5cc5d;
  border-bottom: solid 1px #999;
}

.btn-ds-main {
  padding: 8px 16px;
  font-size: 1em;
  border-radius: .6em;
  background-color: #48A8FF;
  border: solid 2px #fff;
  margin-bottom: 16px;
  color: #fff;
  outline: none;
}
</style>
