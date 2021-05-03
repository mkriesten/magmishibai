<template>
  <header class="main-header">
    <nav class="main-nav">
      <ul class="nav-links">
        <b-link tag="li" to="/" class="nav-link"> Board </b-link>
        <b-link tag="li" to="/about" class="nav-link"> About </b-link>
        <b-link v-if="$auth.loggedIn" tag="li" to="/profile" class="nav-link">
          <div v-if="$auth.loggedIn">
            {{ $auth.user.email }}
          </div>
        </b-link>
        <b-link v-else tag="li" to="/login" class="nav-link"> Login </b-link>
        <b-link
          v-if="$auth.loggedIn"
          tag="li"
          to="/logout"
          class="nav-link"
          @click="logoutUser()"
        >
          Logout
        </b-link>
        <b-link
          v-if="$auth.loggedIn == false"
          tag="li"
          to="/register"
          class="nav-link"
        >
          Register
        </b-link>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  methods: {
    async logoutUser() {
      try {
        console.log("Logging out")
        await this.$auth.logout()
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style scoped>
.main-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: lightseagreen;
  height: 4.5rem;
}

.main-nav {
  height: 100%;
}

.nav-links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.nav-link {
  display: block;
  text-decoration: none;
  color: white;
  cursor: pointer;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 1rem;
  padding: 0.3rem;
}

.nav-link.nuxt-link-exact-active {
  border-bottom: 3px solid white;
}

.nav-link:hover,
.nav-link:active,
.nav-link.nuxt-link-exact-active {
  color: white;
}
</style>
