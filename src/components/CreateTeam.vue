<template>
  <div>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Crie o seu time
          </h1>
          <h2 class="subtitle">
            Dê seu primeiro passo rumo ao topo!
          </h2>
        </div>
      </div>
    </section>
      <div class="container">
        <div class="box">
          <div class="field">
            <label class="label is-large">Nome do Time</label>
            <input type="text" name="" v-model="name" value="" class="input is-large" placeholder="Ex: Red Canids">
          </div>
          <div class="field">
            <label class="label is-large">Escudo do Time</label>
            <badge-designer :name="name"></badge-designer>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import BadgeDesigner from './BadgeDesigner.vue'
export default {
  name: 'CreateTeam',
  components: {BadgeDesigner},
  data () {
    return {
      name: ''
    }
  },
  computed: {
    user () {
      return this.$auth.user
    }
  },
  methods: {
  }
}
</script>
