<template>
  <div>
    <TaskTicketModal :task-id="taskId" />
    <b-card :id="taskId" class="task">
      <TaskDoneButton :task-id="taskId" />
      <b-icon-chat-dots
        v-b-modal="'my-modal' + taskId"
        class="float-right"
        font-scale="1.1"
      />
      <DeleteTaskIcon :task-id="taskId" />
      <b-card-text>
        {{ task.headline }}
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import TaskDoneButton from "@/components/TaskDoneButton/TaskDoneButton"
import DeleteTaskIcon from "@/components/DeleteTaskIcon/DeleteTaskIcon"
import TaskTicketModal from "@/components/TaskTicketModal/TaskTicketModal"
export default {
  components: {
    TaskDoneButton,
    TaskTicketModal,
    DeleteTaskIcon,
  },
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

<style scoped>
.card-body {
  padding: 0.2rem;
  padding-left: 0.5rem;
}

.task {
  background-color: #022d30;
  border-radius: 8px 8px;
  color: white;
  font-size: 1rem;
  height: 6rem;
  overflow: hidden;
}

.bi {
  margin-right: 0.2rem;
  cursor: pointer;
}
</style>
