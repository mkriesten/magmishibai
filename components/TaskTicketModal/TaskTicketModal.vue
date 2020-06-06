<template>
  <div>
    <b-icon-chat-dots v-b-modal="'my-modal' + taskId" scale="1.2" />
    <b-modal :id="'my-modal' + taskId" :title="task.headline">
      <p class="my-4">
        {{ task.text }}
      </p>
    </b-modal>
  </div>
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
    ...mapGetters("kamishibai", ["getTaskTicketById"]),
    task() {
      return this.getTaskTicketById(this.taskId)
    },
  },
}
</script>

<style scoped>
.bi {
  color: black;
}
</style>
