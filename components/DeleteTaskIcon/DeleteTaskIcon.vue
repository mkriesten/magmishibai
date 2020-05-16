<template>
  <div>
    <b-modal
      :id="'delete-modal' + taskId"
      title="Delete Task"
      @ok="trash(taskId)"
    >
      <p>
        <strong>{{ task.headline }}</strong>
      </p>
      <p>Do you want to permanently delete this task?</p>
      <template v-slot:modal-footer="{ ok, cancel }">
        <b-button variant="second" @click="cancel()">
          Cancel
        </b-button>
        <b-button variant="danger" @click="ok()">
          Confirm
        </b-button>
      </template>
    </b-modal>
    <svg
      v-b-modal="'delete-modal' + taskId"
      class="bi bi-trash taskbutton float-right"
      width="1.1em"
      height="1.1em"
      viewBox="0 0 16 16"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
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
    ...mapMutations("taskticket", ["delTodo"]),

    trash(id) {
      this.delTodo(id)
    },
  },
}
</script>

<style lang="css" scoped>
.taskbutton {
  float: right;
  cursor: pointer;
}

.bi {
  margin-right: 0.2rem;
}
</style>
