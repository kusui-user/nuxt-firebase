export const state = () => ({
  todos: [],
})

export const getters = {
  todos: (state) => {
    return state.todos
  },
}

export const actions = {
  async submitTask({ dispatch }, { task, uid }) {
    try {
      await this.$fire.firestore.collection('task').doc().set({
        task,
        uid,
      })
      dispatch('getData')
    } catch (error) {
      console.log(error) //eslint-disable-line
    }
  },
  async getData({ commit }) {
    try {
      const user = this.$fire.auth.currentUser
      console.log(user.uid) //eslint-disable-line
      const querySnapshot = await this.$fire.firestore
        .collection('task')
        .where('uid', '==', user.uid)
        .get()
      const todos = []
      querySnapshot.forEach((doc) => {
        const data = doc.data()
        console.log(data) //eslint-disable-line
        todos.push(data)
      })
      commit('setData', todos)
    } catch (error) {
      console.log(error) //eslint-disable-line
    }
  },
}

export const mutations = {
  setData(state, data) {
    state.todos = data
  },
}
