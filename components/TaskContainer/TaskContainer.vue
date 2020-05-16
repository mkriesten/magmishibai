<template>
  <b-container class="kamishibai-section">
    <b-row>
      <b-col>
        <h2>Tickets</h2>
      </b-col>
      <b-col>
        <AddButton class="float-right" />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-card-group columns>
          <TaskTicket
            v-for="ticket in tickets.all"
            :key="ticket.taskId"
            :task-id="ticket.taskId"
          />
        </b-card-group>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import TaskTicket from "@/components/TaskTicket/TaskTicket"
import AddButton from "@/components/AddButton/AddButton"
export default {
  components: {
    TaskTicket,
    AddButton,
  },
  computed: {
    tickets() {
      return this.$store.state.taskticket
    },
  },
}
</script>

<style scoped>
h2 {
  color: white;
}

.kamishibai-section {
  background-color: #3e676f;
  border-radius: 8px 8px;
  width: 100%;
  padding-top: 1rem;
}
</style>
