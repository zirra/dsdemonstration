
import Vue from 'vue'
import Vuex from 'vuex'

// import { storage } from '../../utils/storage'

Vue.use(Vuex)

const dummydata = {
  chartData: {
    labels: ['Draft Kings', 'State Farm', 'GameStop', 'Bacardi', 'Nissan'],
    datasets: [{
        data: [26, 44, 32, 52, 32],
        backgroundColor: [
          'rgba(77, 111, 237, 1)',
          'rgba(72, 168, 255, 1)',
          'rgba(110, 207, 255, 1)',
          'rgba(44, 62, 80, 1)',
          'rgba(64, 105, 255, 1)'
        ],
        hoverBackgroundColor: [
          'rgba(77, 111, 237, 0.5)',
          'rgba(72, 168, 255, 0.5)',
          'rgba(110, 207, 255, 0.5)',
          'rgba(44, 62, 80, 0.5)',
          'rgba(64, 105, 255, 0.5)'
        ],
        borderColor: [
        ],
        borderWidth: 1
    }]
  },
  options: {
    cutoutPercentage: 20,
    legend: {
      display: false
    }
  },

  chartData2: {
    labels: ['Draft Kings', 'State Farm', 'GameStop', 'Bacardi', 'Nissan'],
    datasets: [{
        data: [26, 44, 32, 52, 32],
        backgroundColor: [
          'rgba(77, 111, 237, 1)',
          'rgba(72, 168, 255, 1)',
          'rgba(110, 207, 255, 1)',
          'rgba(44, 62, 80, 1)',
          'rgba(64, 105, 255, 1)'
        ],
        hoverBackgroundColor: [
          'rgba(77, 111, 237, 0.5)',
          'rgba(72, 168, 255, 0.5)',
          'rgba(110, 207, 255, 0.5)',
          'rgba(44, 62, 80, 0.5)',
          'rgba(64, 105, 255, 0.5)'
        ],
        borderColor: [
        ],
        borderWidth: 1
    }]
  }
}

const state = {
  dummydata
}

const mutations = {
}

const actions = {
}

const getters = {
  dummydata: state => { return state.dummydata}
}

export default {
  state,
  actions,
  mutations,
  getters
}