export const state = () => ({
  cadence: 'Daily',
  all: [
    {
      taskId: 1,
      headline: 'Write Tests',
      text: 'Don\'t be like me. Do yourself a favor and write testcases before writing code',
      done: true
    },
    {
      taskId: 2,
      headline: 'Write code',
      done: true
    },
    {
      taskId: 3,
      headline: 'Read scientific stuff about your most pressing issue',
      done: true
    },
    {
      taskId: 4,
      headline: 'Be kind',
      done: false
    },
    {
      taskId: 5,
      headline: 'Relax, nothing is under control',
      done: false
    }
  ],
  currentTask: {}
})

export const mutations = {
  toggleStatus (state, status) {
    state.currentTask.done = status
  },
  setCurrentTask (state, task) {
    state.currentTask = task
  }
}

export const getters = {
  getTaskTicketById: state => (id) => {
    return state.all.find(TaskTicket => TaskTicket.taskId === id)
  }
}
