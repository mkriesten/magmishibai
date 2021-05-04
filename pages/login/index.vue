<template>
  <b-container>
    <b-row>
      <b-col class="mt-5">
        <b-alert v-model="loginError" variant="danger" fade dismissible
          >Login failed. Wrong username or password.</b-alert
        >
        <h3>Please log in to proceed</h3>
        <b-form>
          <b-form-group label="E-Mail" label-for="username">
            <b-form-input
              id="email"
              v-model="loginData.email"
              required
              invalid-feedback="Username is required"
            />
          </b-form-group>
          <b-form-group label="Password" label-for="password">
            <b-form-input
              id="password"
              v-model="loginData.password"
              type="password"
              required
              invalid-feedback="Password is required"
            />
          </b-form-group>
          <b-button @click="submitForm(loginData)"> Login </b-button>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      loginData: {
        email: "",
        password: "",
      },
      loginError: false,
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
        this.loginError = true
        console.log(error)
      }
    },
  },
}
</script>

<style scoped></style>
