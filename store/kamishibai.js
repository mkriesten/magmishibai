import axios from "axios"
export const state = () => ({
  cadence: "Daily",
  tasks: [],
  currentTask: {},
})

export const mutations = {
  TOGGLE_STATUS(state, item) {
    const task = state.tasks.find((t) => {
      return t._id === item._id
    })
    task.done = item.done
  },
  setCurrentTask(state, task) {
    state.currentTask = task
  },
  ADD_TASK(state, task) {
    state.tasks.push(task)
  },
  // i stopped here. what I'm trying to accomplish: finding a task, replacing all data with the task I submitted into the function
  updateTask: (state, { id, task }) => {
    const newtask = state.tasks.find((task) => task._id === id)
    Object.assign(newtask, task)
  },
  SAVE_TASKS: (state, tasks) => {
    state.tasks = tasks
  },
  DELETE_TASK: (state, task) => {
    const deltask = state.tasks.findIndex((x) => x._id === task._id)
    state.tasks.splice(deltask, 1)
  },
}

export const actions = {
  async loadTasks({ commit }) {
    await axios
      .get(this.$axios.defaults.baseURL + "/tasks")
      .then((result) => {
        commit("SAVE_TASKS", result.data)
      })
      .catch((error) => {
        throw new Error(`API ${error}`)
      })
  },

  async addTask({ commit }, data) {
    await axios
      .post(this.$axios.defaults.baseURL + "/task/new", data)
      .then((result) => {
        commit("ADD_TASK", result.data)
      })
      .catch((error) => {
        throw new Error(`API ${error}`)
      })
  },

  async deleteTask({ commit }, payload) {
    await axios
      .delete(this.$axios.defaults.baseURL + "/task/" + payload._id)
      .then((result) => {
        commit("DELETE_TASK", result.data)
      })
      .catch((error) => {
        throw new Error(`API ${error}`)
      })
  },

  async toggleStatus({ commit }, payload) {
    let newDone = false
    payload.done ? (newDone = false) : (newDone = true)

    await axios
      .put(this.$axios.defaults.baseURL + "/task/" + payload._id, {
        done: newDone,
      })
      .then((result) => {
        commit("TOGGLE_STATUS", result.data)
      })
      .catch((error) => {
        throw new Error(`API ${error}`)
      })
  },
}

export const getters = {
  getTaskTicketById: (state) => (id) => {
    return state.tasks.find((TaskTicket) => TaskTicket._id === id)
  },

  getTaskTicketByCadence: (state) => (cadence) => {
    return state.tasks.filter((TaskTicket) => TaskTicket.cadence === cadence)
  },
}
