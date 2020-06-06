<template>
  <b-card :id="taskId" class="task shadow">
    <b-row>
      <b-col>
        <b-card-text>
          {{ task.headline }}
        </b-card-text>
      </b-col>
      <b-col>
        <TaskButtonDone :task-id="taskId" />
        <br />
        <TaskButtonDelete :task-id="taskId" />
        <br />
        <TaskTicketModal :task-id="taskId" />
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import { mapGetters } from "vuex"
import TaskButtonDone from "@/components/TaskButtonDone/TaskButtonDone"
import TaskButtonDelete from "@/components/TaskButtonDelete/TaskButtonDelete"
import TaskTicketModal from "@/components/TaskTicketModal/TaskTicketModal"
export default {
  components: {
    TaskButtonDone,
    TaskTicketModal,
    TaskButtonDelete,
  },
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
.card-body {
  padding: 0.2rem;
  padding-left: 0.5rem;
}

.task {
  color: black;
  font-size: 1rem;
  height: 6rem;
  overflow: hidden;
}

.bi {
  color: black;
}
</style>
