<template>
  <b-container>
    <b-row>
      <b-col>
        <TheHeadline />
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
import TheHeadline from "@/components/TheHeadline/TheHeadline"

export default {
  components: {
    TaskContainer,
    TheHeadline,
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
