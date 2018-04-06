<template>
  <div>
    <div class="columns">
      <div class="column is-4 is-offset-4">
        <div class="preview has-text-centered">
          <img src="http://via.placeholder.com/150x150" alt="">
        </div>
      </div>
    </div>
    <b-tabs type="is-toggle" expanded>
        <b-tab-item label="Formas" icon="shape"></b-tab-item>
        <b-tab-item label="Icones" icon="image-filter"></b-tab-item>
        <b-tab-item label="Adornos" icon="xmpp">
          <div class="columns">
            <div class="column" v-for="banner in banners.shapes">
              <img :src="banner.path + banner.file" alt="">
            </div>
          </div>
        </b-tab-item>
    </b-tabs>
  </div>
</template>

<script>
import Banners3D from '../assets/badges/json/banners-3d.JSON'
export default {
  name: 'BadgeDesigner',
  data () {
    return {
      banners: Banners3D
    }
  },
  mounted () {
    console.log(this.banners)
  }
}
</script>
