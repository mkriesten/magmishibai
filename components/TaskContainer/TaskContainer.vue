<template>
  <b-container class="kamishibai-section shadow">
    <b-row>
      <b-col>
        <h2>{{ cadence }} Tickets</h2>
      </b-col>
      <b-col>
        <AddButton class="float-right" :cadence="cadence" />
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
import AddButton from "@/components/AddButton/AddButton"

export default {
  components: {
    TaskTicket,
    AddButton,
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
h2 {
  color: white;
}

.kamishibai-section {
  background-color: lightseagreen;
  border-radius: 0.25rem;
  width: 100%;
  padding-top: 1rem;
  margin-bottom: 3rem;
}
</style>
