<template>
  <div>
    <b-modal
      :id="'delete-modal' + taskId"
      title="Delete Task"
      @ok="trash(task)"
    >
      <p>
        <strong>{{ task.headline }}</strong>
      </p>
      <p>Do you want to permanently delete this task?</p>
      <template v-slot:modal-footer="{ ok, cancel }">
        <b-button variant="second" @click="cancel()"> Cancel </b-button>
        <b-button variant="danger" @click="ok()"> Confirm </b-button>
      </template>
    </b-modal>
    <b-icon-trash v-b-modal="'delete-modal' + taskId" scale="1.2" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"
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
  methods: {
    ...mapActions("kamishibai", ["deleteTask"]),

    trash(id) {
      this.deleteTask(id)
    },
  },
}
</script>

<style lang="css" scoped>
.bi {
  color: black;
}
</style>
