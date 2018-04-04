<template>
<nav class="navbar is-black" role="navigation" aria-label="main navigation">
  <div class="container">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        DRAFTY
      </a>

      <div class="navbar-burger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

      <div class="navbar-menu">
        <div class="navbar-start">
          <a href="#" class="navbar-item">Home</a>
          <a href="#" class="navbar-item">Meu Draft</a>
          <a href="#" class="navbar-item">Meu Time</a>
        </div>

      <div class="navbar-end" v-if="!user">
        <a class="navbar-item" href="#"><span>Entrar</span></a>
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control"><a class="button is-white" href="#"><span>Cadastrar</span></a></p>
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
    }
  },
  methods: {
    logOut () {
      this.$store.dispatch('signOut')
    }
  }
}
</script>
