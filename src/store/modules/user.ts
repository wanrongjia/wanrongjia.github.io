import { defineStore } from 'pinia'

export default defineStore('user', {
  state: () => {
    return {
      count: 0
    }
  },
  getters: {
    double() {
      return this.count * 2
    },
  }
})