<template>
  <div id="NearbyShops">
    <div class="NearbyShops-head">
      <i class="iconfont icon-xuanxiang"></i>
      <span>附近商家</span>
    </div>
    <a v-for="(item, index) in shopList" :key="index" class="NearbyShops-content" href="javascript:;">
      <shop-item :shopName="item.name" :imgLink="item.imglink" :grade="item.grade" :salesVolume="item.sales" :minPrice="item.minprice"></shop-item>
    </a>
  </div>
</template>

<script>
import ShopItem from 'components/common/ShopItem/ShopItem'

export default {
  name: 'NearbyShops',
  data() {
    return {
      shopList: [
        { name: '大碗兰州拉面', imglink: './shop/1.jpg', grade: 3.5, sales: 1060, minprice: 15 },
        { name: '肉蟹煲', imglink: './shop/3.jpg', grade: 4.5, sales: 4999, minprice: 30 },
        { name: '旋转寿司', imglink: './shop/2.jpg', grade: 4.0, sales: 2360, minprice: 20 },
        { name: '淮南牛肉汤', imglink: './shop/6.jpg', grade: 4.3, sales: 3060, minprice: 9 },
        { name: '大自然烧烤', imglink: './shop/5.jpg', grade: 3.5, sales: 1060, minprice: 15 },
        { name: '绿色牛肉面', imglink: './shop/4.jpg', grade: 1.5, sales: 50, minprice: 15 },
        { name: '旋转小火锅', imglink: './shop/7.jpg', grade: 3.5, sales: 1060, minprice: 15 },
        { name: '黄萌鸡米饭', imglink: './shop/9.jpg', grade: 3.5, sales: 1060, minprice: 15 },
        { name: '二大妈', imglink: './shop/8.jpg', grade: 3.5, sales: 1060, minprice: 15 },
      ]
    }
  },
  components : {
    ShopItem
  }
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
