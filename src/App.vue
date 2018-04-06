<template>
    <div>
      <b-loading :is-full-page="true" :active.sync="loading"></b-loading>
      <navbar></navbar>
      <div class="container">
          <b-notification type="is-info" v-if="user && !user.emailVerified" style="margin-top:20px;">
              Hey! Você ainda não verificou o seu e-mail! Enviamos uma confirmação para <strong>{{user.email}}</strong>.
          </b-notification>
      </div>
      <router-view/>
      <footer></footer>
    </div>
</template>

<script>
import Footer from '@/components/Global/Footer'
import Navbar from '@/components/Global/Navbar'
export default {
  name: 'App',
  components: {Navbar, Footer},
  methods: {
  },
  watch: {
    user (value) {
      if (value !== null && value !== undefined) {
        this.$router.push('/')
      }
    }
  },
  computed: {
    user () {
      return this.$store.getters.getUser
    },
    loading () {
      return this.$store.getters.loading
    },
    error () {
      return this.$store.getters.error
    }
  }
}
</script>
