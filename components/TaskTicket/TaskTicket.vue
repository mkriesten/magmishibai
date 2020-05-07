<template>
  <div>
    <TaskTicketModal :task-id="taskId" :headline="headline" :text="text" />
    <b-card
      :id="taskId"
      class="task"
    >
      <TaskDoneButton
        :task-id="taskId"
        :done="done"
      />
      <svg
        class="bi bi-arrows-angle-expand float-right"
        width=".9em"
        height=".9em"
        viewBox="0 0 16 16"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        @click="$bvModal.show('my-modal'+taskId)"
      >
        <path fill-rule="evenodd" d="M1.5 10.036a.5.5 0 01.5.5v3.5h3.5a.5.5 0 010 1h-4a.5.5 0 01-.5-.5v-4a.5.5 0 01.5-.5z" clip-rule="evenodd" />
        <path fill-rule="evenodd" d="M6.354 9.646a.5.5 0 010 .708l-4.5 4.5a.5.5 0 01-.708-.708l4.5-4.5a.5.5 0 01.708 0zm8.5-8.5a.5.5 0 010 .708l-4.5 4.5a.5.5 0 01-.708-.708l4.5-4.5a.5.5 0 01.708 0z" clip-rule="evenodd" />
        <path fill-rule="evenodd" d="M10.036 1.5a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v4a.5.5 0 11-1 0V2h-3.5a.5.5 0 01-.5-.5z" clip-rule="evenodd" />
      </svg>
      <b-card-text>{{ headline }}<!-- --- {{ ticket }} --></b-card-text>
    </b-card>
  </div>
</template>

<script>
import TaskDoneButton from '@/components/TaskDoneButton/TaskDoneButton'
import TaskTicketModal from '@/components/TaskTicketModal/TaskTicketModal'
export default {
  components: {
    TaskDoneButton,
    TaskTicketModal
  },
  props: {
    taskId: {
      type: Number,
      required: true
    },
    headline: {
      type: String,
      required: true
    },
    done: {
      type: Boolean,
      required: true
    },
    text: {
      type: String,
      required: false,
      default: 'No description entered'
    },
    ticket: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
  .card-body {
    padding: .2rem;
    padding-left: .5rem;
  }

  .task {
    background-color: #022d30;
    border-radius: 8px 8px;
    color: white;
    font-size: 1rem;
    height: 6rem;
    overflow: hidden;
  }

  .bi-arrows-angle-expand {
    margin-right: .2rem;
    cursor: pointer;
  }

</style>
