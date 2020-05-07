<template>
  <b-modal :id="'my-modal'+taskId" :title="headline">
    <p
      class="my-4"
    >
      {{ text }}
    </p>
  </b-modal>
</template>

<script>
export default {
  props: {
    taskId: {
      type: Number,
      required: true
    },
    headline: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
