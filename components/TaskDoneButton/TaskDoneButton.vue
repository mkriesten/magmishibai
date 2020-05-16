<template>
  <div>
    <b-icon-check-circle
      v-if="task.done"
      class="taskbutton taskbutton-done"
      font-scale="1.2"
      @click="toggle(taskId)"
    />
    <b-icon-circle-fill
      v-else
      class="taskbutton taskbutton-open"
      font-scale="1.2"
      @click="toggle(taskId)"
    />
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex"
export default {
  props: {
    taskId: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapGetters("taskticket", ["getTaskTicketById"]),
    task() {
      return this.getTaskTicketById(this.taskId)
    },
  },
  methods: {
    toggle(id) {
      this.toggleStatus(id)
    },
    ...mapMutations("taskticket", ["toggleStatus"]),
  },
}
</script>

<style scoped>
.taskbutton {
  float: right;
  cursor: pointer;
}

.taskbutton-done {
  color: greenyellow;
}

.taskbutton-open {
  color: tomato;
}
</style>
