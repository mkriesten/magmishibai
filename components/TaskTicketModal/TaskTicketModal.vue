<template>
  <b-modal :id="'my-modal' + taskId" :title="task.headline">
    <p class="my-4">
      {{ task.description }}
    </p>
  </b-modal>
</template>

<script>
import { mapGetters } from "vuex"
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
}
</script>

<style scoped></style>
