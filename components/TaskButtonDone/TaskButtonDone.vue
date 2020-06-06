<template>
  <div>
    <b-icon-check-circle
      v-if="task.done"
      class="taskbutton-done"
      scale="1.2"
      @click="toggle(task)"
    />
    <b-icon-x-circle
      v-else
      class="taskbutton-open"
      scale="1.2"
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
.taskbutton-done {
  color: green;
}

.taskbutton-open {
  color: red;
}
</style>
