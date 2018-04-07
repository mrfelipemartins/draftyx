<template>
  <div class="columns">
    <div class="column is-4 is-offset-4">
      <div>
        <section class="hero">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">
                Login
              </h1>
              <h2 class="subtitle">
                Identifique-se
              </h2>
            </div>
          </div>
        </section>
        <b-notification type="is-danger" v-if="error">
          {{errorMessage}}
        </b-notification>
        <div class="box">
          <b-field label="E-mail">
            <b-input type="email" v-model="email"></b-input>
          </b-field>
          <b-field label="Senha">
            <b-input type="password" v-model="password"></b-input>
          </b-field>
          <vue-recaptcha sitekey="6LdR91AUAAAAAB0DBUGHowd67pMtAH2okxhBGJEI"  @verify="signIn()" @expired="isLoading = false"><button type="button" @click="isLoading = true" :class="(isLoading) ? 'button is-success is-loading' : 'button is-success'" name="button">Entrar</button></vue-recaptcha>
        </div>
        <p>Não possui uma conta? <router-link to="/register">Cadastre-se</router-link> </p>
      </div>
    </div>
  </div>
</template>

<script>
import VueRecaptcha from 'vue-recaptcha'
export default {
  name: 'Login',
  components: { VueRecaptcha },
  data () {
    return {
      email: 'webmaster@savvystudios.com.br',
      password: '8889dx75',
      isLoading: false,
      error: false,
      errorMessage: ''
    }
  },
  methods: {
    signIn: function () {
      var _this = this
      this.$auth.login({
        params: {
          email: _this.email,
          password: _this.password
        },
        success: function () {
        },
        error: function (resp) {
          _this.isLoading = false
          _this.error = true
          if (resp.response) {
            _this.errorMessage = resp.response.data.msg
          } else {
            _this.errorMessage = 'Ocorreu um erro ao conectar-se ao servidor. Tente novamente. Se o problema persistir, verifique se não há uma manutenção em andamento.'
          }
        },
        rememberMe: true,
        redirect: '/',
        fetchUser: true
      })
    }
  }
}
</script>
