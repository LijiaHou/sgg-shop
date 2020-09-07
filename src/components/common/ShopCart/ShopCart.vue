<template>
  <div>
    <div class="cart-list-wrapper" v-show="cartListShowed">
      <div class="list-head">
        <h4>购物车</h4>
        <span @click="clearCart">清空</span>
      </div>
      <div class="cart-list-content">
        <ul class="cart-list">
          <li v-for="(food, index) in cartFoods" :key="index">
            <span>{{food.name}}</span>
            <div class="control-wrapper">
              <span>￥{{food.price}}</span>
              <cart-control :food="food" />
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="cart-list-mask" v-show="cartListShowed" @click="toggleCartList"></div>

    <div id="ShopCart">
      <div class="cart-left" @click="toggleCartList">
        <div class="cart-icon-wrapper">
          <i class="iconfont icon-shopping_cart " :class="{'highlight': totalCount}"></i>
          <span v-show="totalCount">{{totalCount}}</span>
        </div>
        <div class="cart-price">
          <span>￥{{totalPrice}}</span>
          <span>另需配送费￥{{info.deliveryPrice}}元</span>
        </div>
      </div>
      <div class="cart-right" :class="payClass">
        <span>{{payText}}</span>
      </div>
    </div>

  </div>
</template>

<script>
import { mapState, mapGetters} from 'vuex'
import CartControl from 'components/common/CartControl/CartControl'
import BScroll from '@better-scroll/core'

export default {
  name: 'ShopCart',

  data() {
    return {
      openCartList: false,
      bs: undefined
    }
  },

  computed: {
    ...mapState(['cartFoods', 'info']),

    ...mapGetters(['totalCount', 'totalPrice']),

    payClass() {
      return this.info.minPrice <= this.totalPrice ? 'enough' : 'not-enough'
    },

    payText() {
      let left = this.info.minPrice - this.totalPrice 
      return left<=0 ? `去结算` : `还差￥${left}元起送`
    },

    cartListShowed() {
      /*
        关于computed属性，对变量的检测，具有“短路特性”
          - 在不使用条件的时候，会监听任何一个所使用到的变量的变化，computed随之重新计算
          - 在使用条件的时候，比如下面的if，this.openCartList变量如果保持为false不变，
            就算其他所使用的变量发送了变化，computed也不会重新计算，也就是根据if逻辑一层一层监听变量
      */

      if(!this.openCartList){
        return false
      }
      if(this.totalCount === 0){
        this.openCartList = false
        return false
      }else {
        this.$nextTick(() => { //列表数据显示后执行
          if(!this.bs) {  // 保证BScroll是单例
            this._initScroll()
          }else {
            this.bs.refresh() // 无论是初始化BSCROOL还是刷新refresh，都得在nextTick异步后操作
          }
        })
        return true
      }
    },

  },

  components: {
    CartControl
  },

  methods: {
    _initScroll() {
      let bs = new BScroll('.cart-list-content', {
        scrollY: true,
        click: true, 
        probeType: 2
      })
      this.bs = bs
    },

    toggleCartList() {
      if(this.totalCount > 0) {
        this.openCartList = !this.openCartList
      }
    },

    clearCart() {
      this.$store.commit('clear_cart')
    },
  },
  
}
</script>

<style lang="less" scoped>

  .cart-list-wrapper {
    width: 100%;
    position: relative;
    top: 5px;
    // bottom: 50px;
    color: #07111b;
    background-color: #fff;
    z-index: 1;

    .list-head {
      height: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #f3f5f7;
      border-bottom: 1px solid rgba(7,17,27,0.1);
      padding: 0 18px;
      h4 {
        font-size: 14px;
      }
      span {
        font-size: 12px;
        color: #02a774;
      }
    }
    .cart-list-content {
      overflow: hidden;
      max-height: 200px;

      .cart-list {
        background-color: #fff;
        padding: 0 18px;
        li {
          padding: 7px 0;
          border-bottom: 1px solid rgba(7,17,27,0.1);
          display: flex;
          justify-content: space-between;
          align-items: center;
          span {
            font-size: 14px;
            line-height: 14px;
          }
          .control-wrapper {
            display: flex;
            align-items: center;
            span {
              font-size: 14px;
              color: #f01414;
              margin-right: 10px;
            }
          }
        }
      }
    }
  }

  .cart-list-mask {
    width: 100%;
    height: 100%; 
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(40, 40, 40, 0.5);
  }

  #ShopCart {
    width: 100%;
    height: 48px;
    background-color: #000;
    color: #fff;
    display: flex;
    justify-content: space-between;
    position: relative;
    z-index: 99;

    .cart-left {
      flex: 1 0;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      .cart-icon-wrapper {
        width: 48px;
        height: 48px;
        margin: 0 12px;
        padding: 6px;
        border-radius: 50%;
        background-color: #000;
        // background-color: salmon;
        position: relative;
        bottom: 5px;
        

        i {
          font-size: 24px;
          background-color: #333;
          color: #999;
          padding: 12px;
          border-radius: 50%;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);

          &.highlight {
            background-color: #02a774;
            color: #fff;
          }
        }
        
        span {
          width: 30px;
          height: 17px;
          background-color: red;
          border-radius: 16px;
          position: absolute;
          top: 0;
          right: 0;
          text-align: center;
          font-size: 12px;
          line-height: 15px;
          font-weight: 900;
          font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif ;
          box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
        }
      }
      .cart-price {
        height: 70%;
        display: flex;
        flex-flow: column;
        justify-content: flex-end;

        span:nth-child(1) {
          font-size: 18px;
          font-weight: 700;
          font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        }
        span:nth-child(2) {
          font-size: 10px;
          color: rgba(255, 255, 255, 0.6);
          margin-top: 5px;
        }
      }
    }

    .cart-right {
      width: 105px;
      background-color: #333;
      text-align: center;

      &.enough {
        background-color: #00b43c;
        span {
          color: #fff;
          font-weight: 700;
        }
      }
      span {
        color: #999;
        line-height: 48px;
        font-size: 12px;
      }
    }

    
  }
</style>
