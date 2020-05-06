<template>
  <b-container>
    <b-row>
      <b-col>
        <h1>magmishibai</h1>
      </b-col>
      <TaskContainer
        :ticket-store="tickets"
      />
    </b-row>
    <TaskTicketModal />
  </b-container>
</template>

<script>
import TaskContainer from '@/components/TaskContainer/TaskContainer'
// import TaskTicketModal from '@/components/TaskTicketModal/TaskTicketModal'

export default {
  components: {
    TaskContainer
    // TaskTicketModal
  },
  computed: {
    tickets () {
      return this.$store.state.taskticket
    }
  }
}
</script>

<style>
</style>
