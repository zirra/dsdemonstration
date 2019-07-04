import Vue from 'vue'
import Vuex from 'vuex'
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
    { name : 'controller', label : 'CONTROLLER'},
    { name : 'logout', label: 'LOGOUT'}
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
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
