<template>
  <b-container>
    <b-row>
      <b-col>
        <h1>magmishibai</h1>
        <TaskContainer :cadence="'Daily'" />
        <TaskContainer :cadence="'Weekly'" />
        <TaskContainer :cadence="'Monthly'" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import TaskContainer from "@/components/TaskContainer/TaskContainer"

export default {
  components: {
    TaskContainer,
  },
  created() {
    this.$store.dispatch("kamishibai/loadTasks")
  },
}
</script>

<style></style>
