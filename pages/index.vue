<template>
  <b-container>
    <b-row>
      <b-col>
        <h1>magmishibai</h1>
        <TaskContainer />
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
}
</script>

<style></style>
