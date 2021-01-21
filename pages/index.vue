<template>
  <b-container>
    <b-row>
      <b-col class="mt-5">
        <h3>magmishibai</h3>
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

export default {
  middleware: "auth",
  components: {
    TaskContainer,
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
