<template>
  <b-container>
    <b-row>
      <b-col>
        <TaskButtonBar />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <TaskContainer :cadence="'Daily'" />
        <TaskContainer :cadence="'Weekly'" />
        <TaskContainer :cadence="'Monthly'" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import TaskContainer from "@/components/TaskContainer/TaskContainer"
import TaskButtonBar from "@/components/TaskButtonBar/TaskButtonBar"

export default {
  components: {
    TaskContainer,
    TaskButtonBar,
  },
  created() {
    this.$store.dispatch("kamishibai/loadTasks")
  },
}
</script>

<style>
.bi {
  cursor: pointer;
  color: white;
  float: right;
}
</style>
