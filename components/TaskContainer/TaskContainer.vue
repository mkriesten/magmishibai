<template>
  <b-container class="kamishibai-section shadow">
    <b-row>
      <b-col>
        <h4>{{ cadence }} Tickets</h4>
      </b-col>
      <b-col>
        <TaskButtonAdd class="float-right" :cadence="cadence" />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-card-group columns>
          <TaskTicket
            v-for="ticket in tasks"
            :key="ticket._id"
            :task-id="ticket._id"
          />
        </b-card-group>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters } from "vuex"
import TaskTicket from "@/components/TaskTicket/TaskTicket"
import TaskButtonAdd from "@/components/TaskButtonAdd/TaskButtonAdd"

export default {
  components: {
    TaskTicket,
    TaskButtonAdd,
  },
  props: {
    cadence: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapGetters("kamishibai", ["getTaskTicketByCadence"]),
    tasks() {
      return this.getTaskTicketByCadence(this.cadence)
    },
  },
}
</script>

<style scoped>
h4 {
  color: white;
}

.kamishibai-section {
  background-color: #6c757d;
  border-radius: 0.25rem;
  padding-top: 1rem;
  margin-bottom: 1rem;
}
</style>
