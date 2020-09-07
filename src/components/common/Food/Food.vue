<template>
  <div id="Food" @click="toggleShowFloat">
    <div class="food-left">
      <img :src="food.icon" />
    </div>
    <div class="food-right">
      <div class="food-name">{{food.name}}</div>
      <div class="food-describe">{{food.description}}</div>
      <div class="food-rating">
        <span>月售{{food.sellCount}}</span>
        <span>好评率{{food.rating == '' ? 100 : food.rating}}%</span>
      </div>
      <div class="food-price">
        <span>￥{{food.price}}</span>
        <cart-control :food="food" />
      </div>
    </div>
    
  </div>
</template>

<script>
import CartControl from 'components/common/CartControl/CartControl'

export default {
  name: 'Food',

  data() {
    return {
      showFloat: false
    }
  },

  components: {
    CartControl,
  },

  props: {
    food: Object,
  },

  methods: {
    toggleShowFloat() {
      // this.$parent.curFood = this.food
      // this.$parent.showFloat = !this.showFloat
      this.$emit('toggle-show-float', this.food)
    }
  },
}
</script>

<style lang="less" scoped>
  #Food {
    background-color: #fff;
    display: flex;

    .food-left {
      margin-right: 10px;
      img {
        width: 57px;
        height: 57px;
      }
    }
    .food-right {
      flex-grow: 1;
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-between;

      .food-name {
        margin: 2px 0 8px 0;
        font-size: 14px;
        line-height: 14px;
        color: #07111b;
      }
      .food-describe {
        font-size: 10px;
        color: #93999f;
        margin-bottom: 8px;

      }
      .food-rating {
        font-size: 10px;
        color: #93999f;
        margin-right: 12px;

        & span:nth-child(1) {
          margin-right: 10px;
        }
      }
      .food-price {
        width: 100%;
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
    }
    
  }
</style>
