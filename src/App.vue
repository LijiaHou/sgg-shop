<template>
  <div id="app">
    <router-view />
    <div class="footer-wrapper" v-if="$route.meta.showFooter">
      <footer-guide />
    </div>
    
  </div>
</template>

<script>
import FooterGuide from 'components/content/FooterGuide/FooterGuide'
import { mapActions } from 'vuex'

export default {
  name: 'app',
  components: {
    FooterGuide
  },
  mounted() {
    // this.$store.dispatch('getAddress')
    this.getAddress()
    this.getUserInfo()
  },
  methods: {
    ...mapActions(['getAddress', 'getUserInfo'])
  },
}
</script>

<style lang="less">
  #app {
    width: 100%;

    .footer-wrapper {
      width: 100%;
      position: fixed;
      bottom: 0;
      border-top: #e4e4e4 1px solid;
    }
  }
</style>
