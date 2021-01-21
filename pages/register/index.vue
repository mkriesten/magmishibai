<template>
  <b-container>
    <b-row>
      <b-col class="mt-5">
        <h3>User registration</h3>
        <b-form>
          <b-form-group label="Name" label-for="name">
            <b-form-input
              id="name"
              v-model="userData.name"
              required
              invalid-feedback="Name is required"
            />
          </b-form-group>
          <b-form-group label="E-Mail" label-for="email">
            <b-form-input
              id="email"
              v-model="userData.email"
              required
              invalid-feedback="Email address is required"
            />
          </b-form-group>
          <b-form-group label="Password" label-for="password">
            <b-form-input
              id="password"
              v-model="userData.password"
              type="password"
              required
              invalid-feedback="Password is required"
            />
          </b-form-group>
          <b-button @click="registerUser(userData)">Register</b-button>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      userData: {
        email: "",
        password: "",
      },
    }
  },
  methods: {
    async registerUser(userData) {
      try {
        // send registration to backend
        let response = await this.$axios.$post("/users/register", {
          name: userData.name,
          email: userData.email,
          password: userData.password,
        })
        console.log(response)

        // log in right away with the data provided during registration
        let login = await this.$auth.loginWith("local", {
          data: userData,
        })
        console.log(login)
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style scoped></style>
