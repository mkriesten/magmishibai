<template>
  <b-container>
    <b-row>
      <b-col class="mt-5">
        <div v-if="$auth.loggedIn == false">
          <h3>Logout succesful</h3>
          Thank you for using magmishibai.
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      loginData: {
        email: "markus.kriesten@telekom.de",
        password: "password",
      },
    }
  },
  methods: {
    async submitForm(loginData) {
      try {
        let response = await this.$auth.loginWith("local", {
          data: loginData,
        })
        // after log in, go to board
        this.$router.push("/")
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style scoped></style>
