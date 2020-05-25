<template>
  <div>
    <b-icon-check-circle
      v-if="task.done"
      class="taskbutton taskbutton-done"
      font-scale="1.2"
      @click="toggle(task)"
    />
    <b-icon-circle-fill
      v-else
      class="taskbutton taskbutton-open"
      font-scale="1.2"
      @click="toggle(task)"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"
export default {
  props: {
    taskId: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapGetters("kamishibai", ["getTaskTicketById"]),
    task() {
      return this.getTaskTicketById(this.taskId)
    },
  },
  methods: {
    toggle(task) {
      this.toggleStatus(task)
    },
    ...mapActions("kamishibai", ["toggleStatus"]),
  },
}
</script>

<style scoped>
.taskbutton {
  float: right;
  cursor: pointer;
}

.taskbutton-done {
  color: darkgreen;
}

.taskbutton-open {
  color: lightcoral;
}
</style>
