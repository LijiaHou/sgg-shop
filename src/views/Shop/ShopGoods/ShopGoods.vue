<template>
  <div id="ShopGoods">
    <div class="goods-leftlist-wrapper">
      <ul class="goods-leftlist" v-if="goods">
        <li class="leftlist-item" 
          v-for="(item, index) in goods" 
          :key="index"
          :class="{'current': index == currentIndex}"
          @click="selectGoodType(index)"
        >
          <span>
            <img :src="item.icon" v-if="item.icon" />
            {{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="goods-mainlist-wrapper">
      <ul ref="foodsList" class="goods-mainlist" v-if="goods">
        <li v-for="(type, index) in goods" :key="index" class="good-type">
          <h3>{{type.name}}</h3>
          <ul class="food-list clearfix">
            <li v-for="(food, index) in type.foods" :key="index" class="food-item">
              <food 
                :food="food"
                @toggle-show-float="toggleShowFloat"
                 />
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <!-- 放到里面fixed布局会因为滑动而出错 -->
    <transition name="fade">
      <div class="float-wrapper" v-if="showFloat" @click="toggleShowFloat">
        <div class="float-content" @click.stop>
          <food-float
            :food="curFood"
            @close-float="toggleShowFloat"
          ></food-float>
        </div>
      </div>
    </transition>

    <div class="shop-cart-wrapper">
      <shop-cart></shop-cart>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import Food from 'components/common/Food/Food'
import BScroll from '@better-scroll/core'
import FoodFloat from 'components/common/FoodFloat/FoodFloat'
import ShopCart from 'components/common/ShopCart/ShopCart'

export default {
  name: 'ShopGoods',

  data() {
    return {
      scrollY: 0,  // 目前滑动到的y坐标
      tops: [0],  // 右侧列表中每一个分类的起始y坐标
      bsLeft: {},
      bsRight: {},
      showFloat: false,
      curFood: Object
    }
  },

  mounted() {
    this.$store.dispatch('getShopGoods', () => {
      this.$nextTick(() => { //列表数据显示后执行
        this._initScroll()
        this._initTops()
      })
    })
  },

  methods: {
    // 初始化两个BScroll实例
    _initScroll() {
      // 列表显示后创建
      let bsLeft = new BScroll('.goods-leftlist-wrapper', {
        scrollY: true,
        click: true,  // 默认为false，阻止浏览器原生click事件
        probeType: 0
      })
      let bsRight = new BScroll('.goods-mainlist-wrapper', {
        scrollY: true,
        click: true,
        probeType: 3,  // 3会监听惯性的动画，2不会
      })
      // 监听滚动事件，更新scrollY
      bsRight.on('scroll', ({x,y}) => {
        this.scrollY = -y
      })
      this.bsLeft = bsLeft
      this.bsRight = bsRight
    },

    // 计算tops
    _initTops() {
      let liArr = this.$refs.foodsList.getElementsByClassName('good-type')
      let top = 0
      liArr.forEach((item, index) => {
        // console.log(index + ": " + item.offsetHeight);
        top += item.offsetHeight
        this.tops.push(top)
      })
    },

    // 点击左侧，右侧自动滑动
    selectGoodType(index) {
      // 由于监听了惯性动画，虽然scrollY先被我们改到目标值，但是调用scrollTo时执行了动画，
      //  使得scrollY立即被改回去，导致左侧切换缓慢，所以先暂时关掉监听，等动画结束再打开
      this.bsRight.off('scroll')
      const y = this.tops[index]
      this.scrollY = y
      this.bsRight.scrollTo(0, -y, 500)
      setTimeout(() => {
        this.bsRight.on('scroll', ({x,y}) => {
          this.scrollY = -y
        })
      }, 700)
    },

    toggleShowFloat(food) {
      if(food) {
        this.curFood = food
      }
      this.showFloat = !this.showFloat
    }
  },

  computed: {
    ...mapState(['goods']),
    
    currentIndex() {  // 执行时机：1.初始  2.内含的data变量发生变化
      const {scrollY, tops} = this
      // 计算当前分类的下标
      return tops.findIndex((top, index) => {
        return scrollY < tops[index+1]
      })
    }
  },

  components: {
    Food,
    FoodFloat,
    ShopCart
  },
}
</script>

<style lang="less" scoped>
  #ShopGoods {
    background-color: #f3f5f7;
    position: absolute;
    top: 200px;
    left: 0;
    bottom: 46px;
    width: 100%;
    overflow: hidden;
    display: flex;

    .goods-leftlist-wrapper {
      flex-shrink: 0;
      width: 80px;

      .goods-leftlist {
        background-color: #f3f5f7;
        width: 80px;

        li {
          padding: 0 12px;
          
          &.current {
            background-color: #fff;
            color: #02a774;
          }
        }
        span {
          display: table-cell;
          width: 56px;
          height: 54px;
          font-size: 12px;
          line-height: 12px;
          vertical-align: middle;
          position: relative;

          img {
            width: 12px;
            height: 12px;
            margin-right: 5px;
          }
          &::after {
            content: "";
            width: 100%;
            height: 0.5px;
            background-color: rgba(7,17,27,0.1);
            position: absolute;
            bottom: 0;
            left: 0;
          }
        }
      }
    }
    
    .goods-mainlist-wrapper {
      overflow: hidden;

      .goods-mainlist {
        background-color: #fff;
        
        .good-type {
          h3 {
            padding-left: 14px;
            height: 26px;
            line-height: 26px;
            border-left: 2px solid #d9dde1;
            font-size: 12px;
            color: #93999f;
            background-color: #f3f5f7;
          }
          .food-list {
            .food-item {
              margin: 18px;
              padding-bottom: 18px;
              border-bottom: 1px solid #ddd;
            }
          }
        }
      }
    }
    
    .float-wrapper {
      width: 100%;
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-color: rgba(80, 80, 80, 0.5);

      &.fade-enter, &.fade-leave-to {
        opacity: 0;
      }
      &.fade-enter-active, &.fade-leave-active {
        transition: opacity 0.5s;
      }
      .float-content {
        width: 80%;
        height: 65%;
        position: absolute;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
        left: 50%;
        z-index: 101;
      }
    }

    .shop-cart-wrapper {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }
</style>
