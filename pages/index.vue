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
  </b-container>
</template>

<script>
import TaskContainer from '@/components/TaskContainer/TaskContainer'

export default {
  components: {
    TaskContainer
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
