<template>
  <b-container>
    <b-row>
      <b-col>
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
          <b-button @click="submitForm(loginData)">
            Login
          </b-button>
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
        email: null,
        password: null,
      },
    }
  },
  methods: {
    async submitForm(loginData) {
      try {
        let response = await this.$auth.loginWith("local", {
          data: loginData,
        })
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style scoped></style>
