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
    <b-icon-trash
      v-b-modal="'delete-modal' + taskId"
      class="taskbutton float-right"
      font-scale="1.2"
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
