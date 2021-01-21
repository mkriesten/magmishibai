<template>
  <b-container>
    <b-row>
      <b-col class="mt-5">
        <h3>User profile</h3>
        Name: {{ $auth.user.name }} <br />Email: {{ $auth.user.email }}
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {}
</script>

<style scoped></style>
