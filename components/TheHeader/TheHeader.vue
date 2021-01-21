<template>
  <header class="main-header">
    <nav class="main-nav">
      <ul class="nav-links">
        <nuxt-link tag="li" to="/" class="nav-link">
          <a>Board</a>
        </nuxt-link>
        <nuxt-link tag="li" to="/about" class="nav-link">
          <a>About</a>
        </nuxt-link>
        <nuxt-link
          v-if="$auth.loggedIn"
          tag="li"
          to="/profile"
          class="nav-link"
        >
          <div v-if="$auth.loggedIn">
            <a>{{ $auth.user.email }}</a>
          </div>
        </nuxt-link>
        <nuxt-link v-else tag="li" to="/login" class="nav-link">
          <a>Login</a>
        </nuxt-link>
        <nuxt-link v-if="$auth.loggedIn" tag="li" to="/login" class="nav-link">
          <a @click="logoutUser()">Logout</a>
        </nuxt-link>
        <nuxt-link v-else tag="li" to="/register" class="nav-link">
          <a>Register</a>
        </nuxt-link>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  methods: {
    async logoutUser() {
      try {
        await this.$auth.logout()
        this.$router.push("/login")
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

.nav-link a {
  display: block;
  text-decoration: none;
  color: white;
}

.nav-link a:hover,
.nav-link a:active,
.nav-link.nuxt-link-exact-active a {
  color: white;
}
</style>
