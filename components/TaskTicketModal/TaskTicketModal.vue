<template>
  <b-modal id="my-modal" title="Task Details">
    <p
      class="my-4"
    >
      {{ taskId }}: {{ headline }}
    </p>
  </b-modal>
</template>

<script>
export default {
  props: {
    taskId: {
      type: String,
      required: true
    },
    headline: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
</style>
