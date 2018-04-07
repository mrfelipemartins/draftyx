<template>
  <div>
    <div class="columns">
      <div class="column is-2 is-offset-5">
        <div class="preview has-text-centered">
          <div id="badge" style="position:relative; width:200px; height:200px; margin: 0 auto; background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABV0RVh0Q3JlYXRpb24gVGltZQAyMS8yLzEzf4f4qwAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAA/SURBVDiNY3z37t1/BiQgKCjIgA+8f/8ehc+EVzURYOANYPz//z9KGKD7ER2gh9HAe2HUACoYwIIe7yMwLwAAjvsTsyOvNYsAAAAASUVORK5CYII=')">
            <img :src="activeShape" width="200" height="200" style="position: absolute; top:0; left:0; z-index:0">
            <vue-draggable-resizable :w="100" :h="100" :parent="true">
              <img :src="activeIcon" width="100" height="100" alt="" style="cursor: move; position:absolute; top:0; left:0; z-index:1">
            </vue-draggable-resizable>
            <vue-draggable-resizable :w="200" :h="50" :parent="true" :resizable="false">
              <img :src="activeBanner" width="200" alt="" style="cursor: move; position:absolute; top:0; left:0; z-index:5">
            </vue-draggable-resizable>
            <vue-draggable-resizable :w="200" :h="50" :parent="true" v-if="selectedBanner" :resizable="false">
              <div :style="'cursor: move; position:absolute; top:0; padding-left:20px; padding-right:20px; left:0; text-align: center; background:none; font-family: \'Oswald\', sans-serif; font-size:24px; width:200px; border:none; color:'+ textColor +'; z-index:7'">{{name}}</div>
            </vue-draggable-resizable>
          </div>
        </div>
      </div>
      <div class="column is-4">
        <div style="width:200px; margin:0 auto">
          <div class="field">
            <label>Cor da Forma:</label>
            <input type="color" class="input" name="" value="" v-model="shapeColor" @change="changeShape(selectedShape)">
          </div>
          <div class="field">
            <label>Cor do Icone:</label>
            <input type="color" class="input" name="" value="" v-model="iconColor" @change="changeIcon(selectedIcon)">
          </div>
          <div class="field">
            <label>Cor do Adorno:</label>
            <input type="color" class="input" name="" value="" v-model="bannerColor" @change="changeBanner(selectedBanner)">
          </div>
          <div class="field">
            <label>Cor Texto:</label>
            <input type="color" class="input" name="" value="" v-model="textColor">
          </div>
        </div>
      </div>
    </div>
    <b-tabs type="is-toggle" expanded>
        <b-tab-item label="Formas" icon="shape" style="max-height: 200px; overflow-x:hidden; overflow-y: auto">
          <div class="columns is-mobile" v-for="i in Math.ceil(shapes.shapes.length / 12)" :key="i">
            <div class="column is-1 is-4-mobile" v-for="shape in shapes.shapes.slice((i - 1) * 12, i * 12)" :key="shape.file" @click="changeShape(shape)">
              <div :class="(selectedShape == shape) ? 'badge-selection badge-selected' : 'badge-selection'">
                <img :src="badgeUrl(shape.path, shape.file, 'png')" alt="">
              </div>
            </div>
          </div>
        </b-tab-item>
        <b-tab-item label="Icones" icon="image-filter" style="max-height: 200px; overflow-x:hidden; overflow-y: auto">
            <div class="columns is-mobile" v-for="i in Math.ceil(icons.shapes.length / 12)" :key="i">
              <div class="column is-1 is-4-mobile" v-for="icon in icons.shapes.slice((i - 1) * 12, i * 12)" :key="icon.file" @click="changeIcon(icon)">
                <div :class="(selectedIcon == icon) ? 'badge-selection badge-selected' : 'badge-selection'">
                <img :src="badgeUrl(icon.path, icon.file, 'png')" alt="">
              </div>
            </div>
          </div>
        </b-tab-item>
        <b-tab-item label="Adornos" icon="xmpp" style="max-height: 200px; overflow-x:hidden; overflow-y: auto">
            <div class="columns is-mobile" v-for="i in Math.ceil(banners.shapes.length / 6)" :key="i">
              <div class="column is-2 is-4-mobile" v-for="banner in banners.shapes.slice((i - 1) * 6, i * 6)" :key="banner.file" @click="changeBanner(banner)">
                <div :class="(selectedBanner == banner) ? 'badge-selection badge-selected' : 'badge-selection'">
                <img :src="badgeUrl(banner.path, banner.file, 'png')" alt="">
              </div>
            </div>
          </div>
        </b-tab-item>
    </b-tabs>
    <button type="button" class="button is-success" name="button" @click="saveBadge()">Salvar Escudo</button>
  </div>
</template>

<script>
import VueDraggableResizable from 'vue-draggable-resizable'
import Banners from '../assets/badges/json/banners.json'
import Shapes from '../assets/badges/json/shapes.json'
import Icons from '../assets/badges/json/icons.json'
export default {
  name: 'BadgeDesigner',
  props: ['name'],
  components: {VueDraggableResizable},
  data () {
    return {
      banners: Banners,
      shapes: Shapes,
      icons: Icons,
      selectedShape: '',
      selectedIcon: '',
      selectedBanner: '',
      activeShape: '',
      activeBanner: '',
      activeIcon: '',
      shapeColor: 'black',
      iconColor: 'black',
      bannerColor: 'black',
      textColor: 'white'
    }
  },
  computed: {
    layer1 () { return this.$refs.layer1 },
    layer2 () { return this.$refs.layer2 },
    layer3 () { return this.$refs.layer3 }
  },
  methods: {
    saveBadge () {
      this.$emit('saveBadge')
    },
    badgeUrl (path, file, ext) {
      return `/static/${path}${file}.${ext}`
    },
    hex2dec (number) {
      if (!/^[0-9A-Fa-f]{1,10}$/.test(number)) return '#NUM!'
      var decimal = parseInt(number, 16)
      return (decimal >= 549755813888) ? decimal - 1099511627776 : decimal
    },
    changeColor (item, color, width, height) {
      var canvas = document.createElement('canvas')
      var context = canvas.getContext('2d')
      canvas.width = width
      canvas.height = height
      var image = new Image()
      image.src = this.badgeUrl(item.path, item.file, 'png')
      context.clearRect(0, 0, canvas.width, canvas.height)
      context.drawImage(image, 0, 0, canvas.width, canvas.height)
      var imageData = context.getImageData(0, 0, canvas.width, canvas.height)
      var pixels = imageData.data
      var i, l, r, g, b, a, average
      for (i = 0, l = pixels.length; i < l; i += 4) {
        a = pixels[i + 3]
        if (a === 0) {
          continue
        }
        r = pixels[i]
        g = pixels[i + 1]
        b = pixels[i + 2]

        average = (r + g + b) / 3 >>> 0
        pixels[i] = pixels[i + 1] = pixels[i + 2] = average
      }
      context.globalCompositeOperation = 'source-atop'
      context.globalAlpha = 0.7
      context.fillStyle = color
      context.fillRect(0, 0, canvas.width, canvas.height)
      context.globalCompositeOperation = 'source-over'
      context.globalAlpha = 1.0
      return canvas.toDataURL('image/png', 1)
    },
    changeShape (shape) {
      this.selectedShape = shape
      var newImage = this.changeColor(shape, this.shapeColor, 200, 200)
      this.activeShape = newImage
    },
    changeIcon (icon) {
      this.selectedIcon = icon
      var newImage = this.changeColor(icon, this.iconColor, 200, 200)
      this.activeIcon = newImage
    },
    changeBanner (banner) {
      this.selectedBanner = banner
      var newImage = this.changeColor(banner, this.bannerColor, 200, 50)
      this.activeBanner = newImage
    }
  },
  mounted () {
    console.log(this.banners)
  }
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Oswald:300,400,600');
@import './src/assets/scss/main.scss';
.shape-overlay {
  position: absolute;
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  mix-blend-mode: screen;
}
.icon-overlay {
  position: absolute;
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 4;
  mix-blend-mode: screen;
}
.banner-overlay {
  position: absolute;
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  mix-blend-mode: screen;
}
</style>
