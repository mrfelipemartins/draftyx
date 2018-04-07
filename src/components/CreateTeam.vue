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
          <b-loading :active.sync="loading"></b-loading>
          <div class="field">
            <label class="label is-large">Nome do Time</label>
            <input type="text" name="" v-model="name" value="" class="input is-large" placeholder="Ex: Red Canids">
          </div>
          <div class="field">
            <label class="label is-large">Escudo do Time</label>
            <badge-designer @saveBadge="saveBadge" :name="name" v-if="!badge"></badge-designer>
            <img :src="badge" width="200" height="200" alt="" v-else>
            <button type="button" class="button is-small is-info" name="button">Alterar Escudo</button>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import BadgeDesigner from './BadgeDesigner.vue'
import html2canvas from 'html2canvas'
export default {
  name: 'CreateTeam',
  components: {BadgeDesigner},
  data () {
    return {
      name: '',
      badge: '',
      loading: false
    }
  },
  computed: {
    user () {
      return this.$auth.user
    }
  },
  methods: {
    saveBadge () {
      document.querySelector('#badge').style.background = 'transparent'
      document.querySelector('#badge').style.border = 'none'
      this.loading = true
      html2canvas(document.querySelector('#badge')).then(canvas => {
        this.badge = canvas.toDataURL('image/png', 1)
        this.loading = false
      })
      console.clear()
    }
  }
}
</script>
