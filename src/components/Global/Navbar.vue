<template>
<nav class="navbar is-black" role="navigation" aria-label="main navigation">
  <div class="container">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/">
        DRAFTY
      </router-link>

      <div class="navbar-burger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div class="navbar-menu">
      <div class="navbar-start">
        <router-link to="/" class="navbar-item">Home</router-link>
        <router-link to="/" class="navbar-item">Meu Draft</router-link>
        <router-link to="/" class="navbar-item">Meu Time</router-link>
      </div>

      <div class="navbar-end" v-if="!user">
        <router-link class="navbar-item" to="/login"><span>Entrar</span></router-link>
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control"><router-link class="button is-white" to="/register"><span>Cadastrar</span></router-link></p>
          </div>
        </div>
      </div>
      <div class="navbar-end" v-else>
        <div class="navbar-item has-dropdown is-hoverable">
          <a href="#" class="navbar-link">
            <figure class="image is-32x32 is-square">
              <img src="http://via.placeholder.com/150x150">
            </figure>
          </a>
          <div class="navbar-dropdown">
            <a class="navbar-item" href="#" v-if="isAdmin">Admin</a>
            <a @click="logOut()" href="#" class="navbar-item">Sair</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>
<script>
export default {
  name: 'Navbar',
  computed: {
    user () {
      return this.$store.getters.getUser
    },
    isAdmin () {
      return this.user.email === 'webmaster@savvystudios.com.br'
    }
  },
  methods: {
    logOut () {
      this.$store.dispatch('signOut')
    }
  }
}
</script>
