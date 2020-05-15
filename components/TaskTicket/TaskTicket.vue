<template>
  <div>
    <TaskTicketModal
      :task-id="taskId"
      :headline="headline"
      :description="description"
    />
    <b-card :id="taskId" class="task">
      <TaskDoneButton :task-id="taskId" :done="done" />
      <svg
        class="bi bi-trash float-right"
        width="1.1em"
        height="1.1em"
        viewBox="0 0 16 16"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        @click="trash(taskId)"
      >
        <path
          d="M5.5 5.5A.5.5 0 016 6v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V6z"
        />
        <path
          fill-rule="evenodd"
          d="M14.5 3a1 1 0 01-1 1H13v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4h-.5a1 1 0 01-1-1V2a1 1 0 011-1H6a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM4.118 4L4 4.059V13a1 1 0 001 1h6a1 1 0 001-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
          clip-rule="evenodd"
        />
      </svg>
      <svg
        v-b-modal="'my-modal' + taskId"
        class="bi bi-arrows-angle-expand float-right"
        width="1.1em"
        height="1.1em"
        viewBox="0 0 16 16"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M1.5 10.036a.5.5 0 01.5.5v3.5h3.5a.5.5 0 010 1h-4a.5.5 0 01-.5-.5v-4a.5.5 0 01.5-.5z"
          clip-rule="evenodd"
        />
        <path
          fill-rule="evenodd"
          d="M6.354 9.646a.5.5 0 010 .708l-4.5 4.5a.5.5 0 01-.708-.708l4.5-4.5a.5.5 0 01.708 0zm8.5-8.5a.5.5 0 010 .708l-4.5 4.5a.5.5 0 01-.708-.708l4.5-4.5a.5.5 0 01.708 0z"
          clip-rule="evenodd"
        />
        <path
          fill-rule="evenodd"
          d="M10.036 1.5a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v4a.5.5 0 11-1 0V2h-3.5a.5.5 0 01-.5-.5z"
          clip-rule="evenodd"
        />
      </svg>
      <b-card-text>
        {{ headline
        }}<!-- --- {{ ticket }} -->
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
import { mapMutations } from "vuex"
import TaskDoneButton from "@/components/TaskDoneButton/TaskDoneButton"
import TaskTicketModal from "@/components/TaskTicketModal/TaskTicketModal"
export default {
  components: {
    TaskDoneButton,
    TaskTicketModal,
  },
  props: {
    taskId: {
      type: String,
      required: true,
    },
    headline: {
      type: String,
      required: true,
    },
    done: {
      type: Boolean,
      required: true,
    },
    description: {
      type: String,
      required: false,
      default: "No description entered",
    },
    ticket: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapMutations("taskticket", ["delTodo"]),

    trash(id) {
      this.delTodo(id)
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
