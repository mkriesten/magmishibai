<template>
  <div v-if="(loginError = true)">
    <b-alert variant="danger" dismissible show>{{ message }}</b-alert>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Boolean,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped></style>
