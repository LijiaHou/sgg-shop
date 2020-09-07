<template>
  <div id="CartControl">
    <transition name="move">
      <i class="iconfont icon-remove_circle_outline" @click.stop="updateFoodCount(0)" v-show="food.count"></i>
    </transition>
    <div class="cart-count" v-show="food.count">{{food.count}}</div>
    <i class="iconfont icon-add_circle" @click.stop="updateFoodCount(1)"></i>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'CartControl',
  props: {
    food: Object
  },
  computed: {
    ...mapState(['goods'])
  },
  methods: {
    // count放到vuex中管理
    updateFoodCount(flag) {
      // flag：0减 1加
      this.$store.dispatch('updateFoodCount', {flag, food: this.food})
    }
  },
}
</script>

<style lang="less" scoped>
  #CartControl {
    display: flex;
    align-items: center;

    i {
      color: #02a774;
      font-size: 24px;
      line-height: 24px;
      padding: 6px;
    }
    .icon-remove_circle_outline {
      // v-enter --> v-enter-to --> v-leave --> v-leave-to
      &.move-enter  {
        opacity: 0;
        transform: translateX(20px) rotateZ(180deg);
      }
      &.move-leave-to {
        opacity: 0;
        transform: translateX(20px) rotateZ(180deg);
      }
      &.move-enter-active {
        transition: all 500ms;
      }
      &.move-leave-active {
        transition: all 500ms;
      }
    }
    .cart-count {
      font-size: 10px;
      color: #666;
      text-align: center;
      line-height: 24px;
      width: 12px;
    }
  }
</style>
