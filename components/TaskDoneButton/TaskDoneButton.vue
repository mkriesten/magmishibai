<template>
  <svg
    v-if="done"
    class="bi bi-check-circle taskbutton taskbutton-done"
    width="1.1em"
    height="1.1em"
    viewBox="0 0 16 16"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    @click="toggle(taskId)"
  >
    <path
      fill-rule="evenodd"
      d="M15.354 2.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3-3a.5.5 0 11.708-.708L8 9.293l6.646-6.647a.5.5 0 01.708 0z"
      clip-rule="evenodd"
    />
    <path
      fill-rule="evenodd"
      d="M8 2.5A5.5 5.5 0 1013.5 8a.5.5 0 011 0 6.5 6.5 0 11-3.25-5.63.5.5 0 11-.5.865A5.472 5.472 0 008 2.5z"
      clip-rule="evenodd"
    />
  </svg>
  <svg
    v-else
    class="bi bi-circle-fill taskbutton taskbutton-open"
    width="1.1em"
    height="1.1em"
    viewBox="0 0 16 16"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    @click="toggle(taskId)"
  >
    <circle cx="8" cy="8" r="8" />
  </svg>
</template>

<script>
import { mapMutations } from "vuex"
export default {
  props: {
    taskId: {
      type: String,
      required: true,
    },
    done: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    toggle(id) {
      // toggle done / undone
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
