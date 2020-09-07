<template>
  <div id="Shop">
    <i class="iconfont icon-arrow_left" @click="$router.replace('/msite')"></i>
    <div class="shop-head-wrapper">
      <shop-head></shop-head>
      <div class="shop-head-linkto">
        <router-link class="shop-link-btn" to="/shop/shopgoods">
          <div class="link-item" :class="{'active': $route.path === '/shop/shopgoods'}">点餐</div>
        </router-link>
        <router-link class="shop-link-btn" to="/shop/shoprating">
          <div class="link-item" :class="{'active': $route.path === '/shop/shoprating'}">评价</div>
        </router-link>
        <router-link class="shop-link-btn" to="/shop/shopinfos">
          <div class="link-item" :class="{'active': $route.path === '/shop/shopinfos'}">商家</div>
        </router-link>
      </div>
    </div>

    <keep-alive>
      <router-view></router-view>
    </keep-alive>

  </div>
</template>

<script>
import ShopHead from 'components/content/ShopHead/ShopHead'
import { mapState } from 'vuex'

export default {
  name: 'Shop',
  mounted() {
    // this.$store.dispatch('getShopGoods')
    this.$store.dispatch('getShopRatings')
  },
  computed: {
    ...mapState(['info'])
  },
  components: {
    ShopHead
  }
}
</script>

<style lang="less" scoped>
  #Shop {
    i.icon-arrow_left {
      position: absolute;
      top: 10px;
      left: 10px;
      color: #fff;
      font-size: 25px;
    }
    a {
      text-decoration: none;
      color: currentColor;
    }

    .shop-head-wrapper {
      width: 100%;
      border-bottom: #eee 1px solid;
      background-color: #fff;
      
      .shop-head-linkto {
        width: 100%;
        height: 40px;
        font-size: 14px;
        display: flex;
        justify-content: stretch;

        .shop-link-btn {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items:stretch;

          .link-item {
            line-height: 40px;
            border-bottom: 3px solid rgba(2, 167, 116, 0);
          }
          .active {
            color: #02a774;
            border-bottom-color: #02a774;
          }
        }
        
      }
    }
  }
</style>
