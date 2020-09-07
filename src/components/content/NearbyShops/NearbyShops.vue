<template>
  <div id="NearbyShops">
    <div class="NearbyShops-head">
      <i class="iconfont icon-xuanxiang"></i>
      <span>附近商家</span>
    </div>
    <div v-if="shops.length">
      <a v-for="(shop, index) in shops" :key="index" class="NearbyShops-content" href="javascript:;" @click="$router.push('/shop')">
        <shop-item 
          :shopName="shop.name" 
          :grade="shop.rating" 
          :salesVolume="shop.recent_order_num"
          :minPrice="shop.float_minimum_order_amount"
          :deliveryFee="shop.float_delivery_fee"
        ></shop-item>
      </a>
    </div>
    <div v-for="back in 20" :key="back" v-else>
      <img src="/shop_back.svg">
    </div>
  </div>
</template>

<script>
import ShopItem from 'components/common/ShopItem/ShopItem'
import { mapState } from 'vuex';

export default {
  name: 'NearbyShops',
  data() {
    return {
      // shops: [
      //   { name: '大碗兰州拉面', imglink: './shop/1.jpg', grade: 3.5, sales: 1060, minprice: 15 },
      //   { name: '肉蟹煲', imglink: './shop/3.jpg', grade: 4.5, sales: 4999, minprice: 30 },
      //   { name: '旋转寿司', imglink: './shop/2.jpg', grade: 4.0, sales: 2360, minprice: 20 },
      //   { name: '淮南牛肉汤', imglink: './shop/6.jpg', grade: 4.3, sales: 3060, minprice: 9 },
      //   { name: '大自然烧烤', imglink: './shop/5.jpg', grade: 3.5, sales: 1060, minprice: 15 },
      //   { name: '绿色牛肉面', imglink: './shop/4.jpg', grade: 1.5, sales: 50, minprice: 15 },
      //   { name: '旋转小火锅', imglink: './shop/7.jpg', grade: 3.5, sales: 1060, minprice: 15 },
      //   { name: '黄萌鸡米饭', imglink: './shop/9.jpg', grade: 3.5, sales: 1060, minprice: 15 },
      //   { name: '二大妈', imglink: './shop/8.jpg', grade: 3.5, sales: 1060, minprice: 15 },
      // ]
    }
  },
  components : {
    ShopItem
  },
  computed: {
    ...mapState(['shops']),
  },
}
</script>

<style lang="less">
  #NearbyShops {
    border-top: solid #e4e4e4 1px;
    margin-top: 10px;
    margin-bottom: 50px;
    
    .NearbyShops-head {
      padding: 10px;
      i {

      }
      span {
        color: #999;
        font-size: 14px;
        margin-left: 5px;
      }
    }
    .NearbyShops-content {
      display: block;
      padding: 15px 8px;
      text-decoration: none;
      color: currentColor;
      border-bottom: solid rgb(243, 243, 243) 1px;
    }
  }
</style>
