import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'

import { storage } from '../../utils/storage'

Vue.use(Vuex)

const state = {
  appBucketRoot: 'https://ds-stadium-bucket.s3.us-east-2.amazonaws.com/stock',
  userlist: [
    {username: 'admin', password: 'admin'},
    {username: 'admin@digitalseat.com', password: 'admintest'},
    {username: 'msullivan@digitalseat.com', password: 'test'},
    {username: 'cfowler@digitalseat.com', password: 'test'}
  ],
  user: null,
  isLoggedIn: false,
  navCurrent : null,
  navItems : [
    { name : 'dashboard', label : 'DASH' },
    { name : 'analytics', label : 'ANALYTICS'},
    { name : 'controller', label : 'CONTROLLER'},
    { name : 'logout', label: 'LOGOUT'}
  ],
  sponsors: [
    {name: 'Bacardi', img: 'https://ds-stadium-bucket.s3.us-east-2.amazonaws.com/stock/icons/bacardi.png', color: 'background-color: rgba(75, 192, 192, 0.2);'},
    {name: 'Gamestop', img: 'https://ds-stadium-bucket.s3.us-east-2.amazonaws.com/stock/icons/gamestop.png', color: 'background-color: rgba(255, 206, 86, 0.2);'},
    {name: 'StateFarm', img: 'https://ds-stadium-bucket.s3.us-east-2.amazonaws.com/stock/icons/statefarm.png', color: 'background-color: rgba(54, 162, 235, 0.2)'},
    {name: 'Draftkings', img: 'https://ds-stadium-bucket.s3.us-east-2.amazonaws.com/stock/icons/draftkingz.png', color: 'background-color: rgba(255, 99, 132, 0.2);'},
    {name: 'Nissan', img: 'https://ds-stadium-bucket.s3.us-east-2.amazonaws.com/stock/icons/nissan.png', color: 'background-color: rgba(153, 102, 255, 0.2);'}
  ]
}

const mutations = {
  setCurrentNav (state, target) {
    state.navCurrent = target
  },
  setLoginState (state, target) {
    if (!target) {
      storage.clearValue('user')
    }
    state.isLoggedIn = target
    if (target) {
      router.push({name: 'dashboard'})
    }
  }
}
const actions = {
  setCurrentNav (state, target) {
    state.commit('setCurrentNav', target)
    storage.storeValue('current', target)
  },
  setLogin (state, bool) {
    state.commit('setLoginState', bool)
  },
  loginUser ({getters, commit}, user) {
    // axios post to login
    let ulist = getters.userlist
    let valid = false
    for (let i = 0; i < ulist.length; i++) {
      if(ulist[i].username === user.username && ulist[i].password === user.password) {
        valid = true
      }
    }
    if (valid) {
      storage.storeValue('user', user.username)
      commit('setLoginState', true)
    } else {
      alert('LOGIN FAILURE')
    }
  }
}

const getters = {
  appName (state) {
    return state.appName
  },
  navItems (state) {
    return state.navItems.reverse()
  },
  navCurrent (state) { 
    if (state.navCurrent === null) {
      return storage.getValue('current')
    } else {
      return state.navCurrent
    }
  },
  isLoggedIn (state) {
    return state.isLoggedIn
  },
  appBucketRoot (state) {
    return state.appBucketRoot
  },
  userlist (state) { 
    return state.userlist
  },
  user (state) {
    if (state.user === null) {
      return storage.getValue('user')
    } else {
      return state.user
    }
  },
  sponsors: state => { return state.sponsors}
}

export default {
  state,
  actions,
  mutations,
  getters
}
