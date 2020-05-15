export const state = () => ({
  cadence: 'Daily',
  all: [
    {
      taskId: '1',
      headline: 'Write Tests',
      text: 'Don\'t be like me. Do yourself a favor and write testcases before writing code',
      done: false
    },
    {
      taskId: '2',
      headline: 'Write code',
      done: true
    },
    {
      taskId: '3',
      headline: 'Read scientific stuff about your most pressing issue',
      done: false
    },
    {
      taskId: '4',
      headline: 'Be kind',
      done: false
    },
    {
      taskId: '5',
      headline: 'Relax, nothing is under control',
      done: true
    }
  ],
  currentTask: {}
})

export const mutations = {
  toggleStatus (state, id) {
    const task = state.all.find((task) => {
      return task.taskId === id
    })
    task.done ? task.done = false : task.done = true
  },
  setCurrentTask (state, task) {
    state.currentTask = task
  },
  addTodo (state, task) {
    state.all.push(task)
  },
  delTodo (state, id) {
    const deltask = state.all.findIndex(x => x.taskId === id)
    state.all.splice(deltask, 1)
  },
  // i stopped here. what I'm trying to accomplish: finding a task, replacing all data with the task I submitted into the function
  updateTask: (state, { id, task }) => {
    const newtask = state.all.find(task => task.id === id)
    Object.assign(newtask, task)
  }
}

export const getters = {
  getTaskTicketById: state => (id) => {
    return state.all.find(TaskTicket => TaskTicket.taskId === id)
  }
}
