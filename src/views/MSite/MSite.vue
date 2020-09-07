<template>
  <div id="MSite">
    <div class="header-bar-wrapper"><header-bar :content="address.name" :sides="true"></header-bar></div>
    <div class="my-swiper-wrapper"><my-swiper></my-swiper></div>
    <div class="nearby-shops-wrapper"><nearby-shops></nearby-shops></div>
  </div>
</template>

<script>
import HeaderBar from 'components/content/HeaderBar/HeaderBar'
import mySwiper from 'components/content/Swiper/mySwiper'
import NearbyShops from 'components/content/NearbyShops/NearbyShops'
import { mapState } from 'vuex'

export default {
  name : "MSite",
  components : {
    HeaderBar,
    mySwiper,
    NearbyShops
  },
  computed: {
    ...mapState(['address'])
  },
  mounted() {
    // 获取数据
    this.$store.dispatch('getCategorys')
    this.$store.dispatch('getShops')
    
  },
}
</script>

<style lang="less">
  #MSite {
    width: 100%;

    .header-bar-wrapper {
      width: 100%;
      position: fixed;
      top: 0;
      z-index: 100;
    }
    .my-swiper-wrapper {
      margin-top: 60px;
    }
  }
</style>
