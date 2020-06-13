<template>
  <b-button-toolbar class="float-right" justify>
    <b-button-group class="mx-1">
      <b-button
        title="All tasks open"
        variant="dark"
        @click="allTasksOpen(tasks, true)"
      >
        <b-icon-check-all class="rounded-circle bg-danger" />
      </b-button>
      <b-button
        title="All tasks done"
        variant="dark"
        @click="allTasksOpen(tasks, false)"
      >
        <b-icon-check-all class="rounded-circle bg-success" />
      </b-button>
    </b-button-group>
    <b-button-group>
      <!-- 'Daily' set just to have a default... -->
      <TaskButtonAdd :cadence="cadence" />
    </b-button-group>
  </b-button-toolbar>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import TaskButtonAdd from "@/components/TaskButtonAdd/TaskButtonAdd"
export default {
  components: {
    TaskButtonAdd,
  },

  props: {
    cadence: {
      type: String,
      required: false,
      default: "all",
    },
  },

  computed: {
    ...mapGetters("kamishibai", ["getTaskTicketByCadence"]),
    tasks() {
      return this.getTaskTicketByCadence(this.cadence)
    },
  },

  methods: {
    ...mapActions("kamishibai", ["toggleStatus"]),

    async allTasksOpen(items, flag) {
      // create deep clone 'payload' so we don't try to mutate vuex store elements directly
      // when iterating over 'items' in the for loop below
      let payload = JSON.parse(JSON.stringify(items))
      for (let item of payload) {
        // modify all done attributes to 'flag', so we set
        // the same state for all items with 'toggleStatus'
        item.done = flag
        await this.toggleStatus(item)
      }
    },
  },
}
</script>

<style lang="css" scoped>
.buttonbar-section {
  background-color: rgba(255, 255, 255, 0);
  border-radius: 0.25rem;
}

h3 {
  color: black;
}
</style>
