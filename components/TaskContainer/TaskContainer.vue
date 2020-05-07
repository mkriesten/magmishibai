<template>
  <b-container fluid class="kamishibai-section">
    <b-row>
      <b-col>
        <h2>{{ ticketStore.cadence }} Tickets</h2>
      </b-col>
    </b-row>
    <b-row>
      <b-card-group columns>
        <TaskTicket
          v-for="ticket in ticketStore.all"
          :key="ticket.taskId"
          :task-id="ticket.taskId"
          :headline="ticket.headline"
          :done="ticket.done"
          :ticket="ticket"
          :text="ticket.text"
        />
      </b-card-group>
    </b-row>
  </b-container>
</template>

<script>
import TaskTicket from '@/components/TaskTicket/TaskTicket'
export default {
  components: {
    TaskTicket
  },
  props: {
    ticketStore: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
h2 {
    color: white;
}

.kamishibai-section {
    background-color: #3e676f;
    border-radius: 8px 8px;
    padding-top: 1rem;
    padding-left: 2rem;
    padding-right: 2rem;
    width: 100%;
    margin-bottom: 2rem;
}
</style>
