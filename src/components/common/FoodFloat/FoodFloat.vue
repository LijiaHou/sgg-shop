<template>
  <div id="FoodFloat">
    <div class="float-image">
      <img :src="food.image" />
      <span>{{food.info}}</span>
      <i class="iconfont icon-arrow_left" @click="$emit('close-float')"></i>
    </div>
    <div class="float-title">
      <div class="float-name">{{food.name}}</div>
      <div class="float-rating">
        <span>月售{{food.sellCount}}</span>
        <span>好评率{{food.rating}}%</span>
      </div>
    </div>
    <div class="float-control">
      <span>￥{{food.price}}</span>
      <cart-control :food="food" />
    </div>
  </div>
</template>

<script>
import CartControl from 'components/common/CartControl/CartControl'

export default {
  name: 'FoodFloat',
  components: {
    CartControl
  },
  props: {
    food: Object,
  }
}
</script>

<style lang="less" scoped>
  #FoodFloat {
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 5px;
    overflow: hidden;

    .float-image {
      height: 70%;
      position: relative;
      // z-index: 100;

      img {
        width: 100%;
        height: 100%;
      }
      span {
        font-size: 10px;
        color: #ddd;
        position: absolute;
        left: 5px;
        bottom: 7px;
      }
      .icon-arrow_left {
        position: absolute;
        left: 5px;
        top: 10px;
        font-size: 25px;
        color: #ffffff;
      }
    }
    .float-title {
      margin: 18px;

      .float-name {
        margin: 2px 0 8px 0;
        font-size: 14px;
        font-weight: 700;
        line-height: 14px;
        color: #07111b;
      }
      .float-rating {
        font-size: 10px;
        color: #93999f;
        margin-right: 12px;

        & span:nth-child(1) {
          margin-right: 10px;
        }
      }
    }
    .float-control {
      margin: 10px 18px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      span {
        font-size: 14px;
        color: #f01414;
      }
      .icon-add_circle {
        color: #02a774;
        font-size: 25px;
      }
    }
    .float-cover {
      position: absolute;
      top: 0;
      left: 0;
      
      background-color: rgba(80, 80, 80, 1);
    }
  }
</style>
