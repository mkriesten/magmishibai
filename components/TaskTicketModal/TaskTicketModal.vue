<template>
  <b-modal :id="'my-modal'+taskId" :title="headline">
    <p
      class="my-4"
    >
      {{ description }}
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
    },
    description: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
