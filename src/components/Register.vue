<template>
  <div class="columns">
    <div class="column is-4 is-offset-4">
      <div>
        <section class="hero">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">
                Cadastre-se
              </h1>
              <h2 class="subtitle">
                É gratis e sempre será
              </h2>
            </div>
          </div>
        </section>
        <b-notification type="is-danger" v-if="error">
          {{errorMessage}}
        </b-notification>
        <div class="box">
          <div class="columns">
            <div class="column">
              <b-field label="Nome">
                <b-input type="text" v-model="firstName"></b-input>
              </b-field>
            </div>
            <div class="column">
              <b-field label="Sobrenome">
                <b-input type="text" v-model="lastName"></b-input>
              </b-field>
            </div>
          </div>
          <b-field label="E-mail">
            <b-input type="email" v-model="email"></b-input>
          </b-field>
          <div class="field">
            <label class="label">Sexo</label>
            <div class="select is-fullwidth">
              <select v-model="gender">
                <option value="female">Feminino</option>
                <option value="male">Masculino</option>
                <option value="indifferent">Indiferente</option>
                <option value="notset">Prefiro não dizer</option>
              </select>
            </div>
          </div>
          <b-field label="Data de Nascimento">
            <b-datepicker
                placeholder="Selecionar"
                icon="calendar-today"
                v-model="birthday">
            </b-datepicker>
          </b-field>
          <b-field label="Senha">
            <b-input type="password" v-model="password"></b-input>
          </b-field>
          <vue-recaptcha sitekey="6LdR91AUAAAAAB0DBUGHowd67pMtAH2okxhBGJEI"  @verify="signUp()" @expired="isLoading = false"><button @click="isLoading = true" type="button" :class="(isLoading) ? 'button is-success is-loading' : 'button is-success'" name="button">Cadastrar</button></vue-recaptcha>
        </div>
        <p>Já possui uma conta? <router-link to="/login">Entre aqui</router-link> </p>
      </div>
    </div>
  </div>
</template>

<script>
import VueRecaptcha from 'vue-recaptcha'
export default {
  name: 'Register',
  components: { VueRecaptcha },
  data () {
    return {
      email: '',
      password: '',
      firstName: '',
      gender: '',
      birthday: null,
      lastName: '',
      error: false,
      isLoading: false,
      errorMessage: ''
    }
  },
  computed: {
    fullName () {
      return `${this.firstName} ${this.lastName}`
    }
  },
  methods: {
    signUp: function () {
      this.$store.dispatch('signUp', {email: this.email, password: this.password})
    }
  }
}
</script>
