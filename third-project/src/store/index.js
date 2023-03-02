import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0,
    transaction: null,
    nums: [1, 2, 3, 4, 5, 6]
  },
  getters: {
    getBigger3(state) {
      return state.nums.filter((nums) => nums > 3)
    }
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    setTras(state, transactionPayLoad) {
      state.transaction = transactionPayLoad
    }
  },
  actions: {
    fetchTransaction(ctx, { transaction }) {
      ctx.commit("setTras", transaction)
    }
  },
  modules: {
  }
},

)
