<template>
  <div>

  </div>
</template>

<script>
export default {
  name: 'Index',
  computed: {
    user () {
      return this.$auth.user
    }
  },
  created () {
    if (!this.user.team) {
      this.$router.push('/create-team')
    }
  }
}
</script>
<style lang="scss">
@import './src/assets/scss/main.scss'
</style>
