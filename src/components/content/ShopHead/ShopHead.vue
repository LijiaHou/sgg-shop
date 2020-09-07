<template>
  <div id="ShopHead">
    <div class="shop-head-bg">
      <img :style="{'background-image': headBackground}" />
    </div>
    <div class="shop-head-click" @click="toggleShowBrief">
      <div class="shop-head-details">
        <div class="head-img">
          <img :src="info.avatar">
        </div>
        <div class="head-name">
          <span>品牌</span>
          <h2>{{info.name}}</h2>
          <i class="icon-arrow"></i>
        </div>
        <div class="head-describe">
          <span>{{info.score}}</span>
          <span>月售{{info.sellCount}}单</span>
          <span>{{info.description}} 约{{info.deliveryTime}}分钟</span>
          <span>距离{{info.distance}}</span>
        </div>
      </div>
    </div>
    <!-- 当模板中使用了异步加载的数据，三段及以上(a.b.c)表达式会出问题，二段(a.b)不会，可以用v-if解决 -->
    <div class="shop-head-discount" v-if="info.supports" @click="toggleShowActivity">
      <div class="discount-left">
        <span class="discount-name" :class="supportsClasses[info.supports[0].type]">{{info.supports[0].name}}</span>
        <span>{{info.supports[0].content}}</span>
      </div>
      <div class="discount-right">
        <span class="right">{{info.supports.length}}个优惠</span>
        <i class="icon-arrow"></i>
      </div>
    </div>

    <!-- Vue 提供了 transition 的封装组件,给任何 v-if v-show 动态组件 组件根节点 的元素和组件添加进入/离开过渡 -->
    <transition name="fade">
      <div class="shop-brief-model" v-show="showBrief">
        <div class="brief-model-content">
          <div class="model-name">
            <span>品牌</span>
            <h2>{{info.name}}</h2>
          </div>
          <div class="model-describe">
            <ul class="describe-list">
              <li class="describe-item">
                <span>{{info.score}}</span>
                <span>评分</span>
              </li>
              <li class="describe-item">
                <span>{{info.sellCount}}单</span>
                <span>月售</span>
              </li>
              <li class="describe-item">
                <span>{{info.description}}</span>
                <span>约{{info.deliveryTime}}分钟</span>
              </li>
              <li class="describe-item">
                <span>{{info.deliveryPrice}}元</span>
                <span>配送费用</span>
              </li>
              <li class="describe-item">
                <span>{{info.distance}}</span>
                <span>距离</span>
              </li>
            </ul>
          </div>
          <div class="model-notice">
            <h3><span>公告</span></h3>
            <p>{{info.bulletin}}</p>
          </div>
          <div class="mask-footer" @click="toggleShowBrief">
            <i class="iconfont icon-close"></i>
          </div>
        </div>
      </div>
    </transition>
    
    <transition name="fade">
      <div class="shop-activity-sheet" v-show="showActivity">
        <div class="activity-conten">
          <h3>优惠活动</h3>
          <div class="activity-list">
            <ul>
              <li v-for="(spt, index) in info.supports" :key="index">
                <span class="discount-name" :class="supportsClasses[spt.type]">{{spt.name}}</span>
                <span>{{spt.content}}</span>
              </li>
            </ul>
          </div>
          <div class="mask-footer" @click="toggleShowActivity">
            <i class="iconfont icon-close"></i>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ShopHead',
  data() {
    return {
      supportsClasses: ['active-green', 'active-red', 'active-orange'],
      showBrief: false,
      showActivity: false
    }
  },
  computed: {
    ...mapState(['info']),
    headBackground() {
      return "url(" + this.info.bgImg + ")"
    }
  },
  methods: {
    toggleShowBrief() {
      this.showBrief = !this.showBrief
    },
    toggleShowActivity() {
      this.showActivity = !this.showActivity
    }
  },
  mounted() {
    this.$store.dispatch('getShopInfo')
  },
}
</script>

<style lang="less" scoped>
  #ShopHead {
    .shop-head-bg {
      img {
        width: 100%;
        height: 50px;
        background-size:cover;
        background-repeat: no-repeat;
      }
    }

    .shop-head-details {
      .head-img {
        height: 35px;
        img {
          width: 66px;
          height: 66px;
          box-shadow: 0 0 2px rgba(0,0,0,0.2);
          border-radius: 2px;
          margin-left: 50%;
          transform: translateX(-50%) translateY(-60%);
        }
      }
      .head-name {
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;

        span {
          background-color: #ffd930;
          display: inline-block;
          font-size: 12px;
          font-weight: 600;
          line-height: 12px;
          color: #333;
          padding: 3px 5px;
          border-radius: 2px;
          margin-right: 10px;
          // vertical-align: text-bottom;
        }
        h2 {
          display: inline-block;
          // width: 120px;
          font-size: 20px;
          font-weight: 900;
          vertical-align: text-bottom;
        }
        .icon-arrow::after {
          content: "";
          display: inline-block;
          width: 10px;
          height: 0;
          border: solid 7px rgba(50, 50, 50, 0);
          border-left-color: #333;
          position: relative;
          left: 10px;
        }
      }
      .head-describe {
        padding: 8px 0;
        font-size: 11px;
        color: #333;
        text-align: center;

        span {
          margin-right: 10px;
        }
      }
    }

    .shop-head-discount {
      font-size: 11px;
      color: #666;
      margin: 0 30px;
      padding: 5px 7px;
      border: 1px solid #eee;
      display: flex;
      justify-content: space-between;
      
      .discount-left {
        .discount-name {
          font-size: 9px;
          font-weight: 600;
          color: #fff;
          padding: 3px 5px;
          margin-right: 5px;
        }
        
      }
      .discount-right {
        position: relative;
        span {
          margin-right: 12px;
        }
        .icon-arrow {
          &::after {
            content: "";
            display: inline-block;
            width: 0;
            height: 1px;
            border: solid 4px rgba(50, 50, 50, 0);
            border-top-color: #666;
            position: absolute;
            right: 0;
            top: 30%;
          }
          
        }
      }
      .active-green {
        background-color: #70bc46;
      }
      .active-red {
        background-color: #f07373;
      }
      .active-orange {
        background-color: #f1884f;
      }
    }

    .shop-brief-model {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(50, 50, 50, 0.5);
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      z-index: 1;

      &.fade-enter-active, &.fade-leave-active {
        transition: opacity .5s;
      }
      &.fade-enter, &.fade-leave-to {
        opacity: 0;
      }
      .brief-model-content {
        position: relative;
        width: 80%;
        background-color: #fff;
        padding: 25px 20px;
        border-radius: 5px;

        .model-name {
          text-align: center;
          
          span {
            background-color: #ffd930;
            display: inline-block;
            font-size: 12px;
            font-weight: 600;
            line-height: 12px;
            color: #333;
            padding: 3px 5px;
            border-radius: 2px;
            margin-right: 10px;
            // vertical-align: text-bottom;
          }
          h2 {
            display: inline-block;
            // width: 120px;
            font-size: 20px;
            font-weight: 900;
            vertical-align: text-bottom;
          }
        }
        .model-describe {
          .describe-list {
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            margin-top: 20px;

            .describe-item {
              display: flex;
              flex-flow: column;
              justify-content: center;
              align-items: center;

              span:nth-child(1) {
                font-size: 15px;
                font-weight: 600;
                color: #333;
                margin-bottom: 8px;
              }
              span:nth-child(2) {
                font-size: 12px;
                color: #999;
              }
            }
          }
        }
        .model-notice {
          h3 {
            width: 30%;
            margin: 15px auto;
            background-image:linear-gradient(90deg, #fff, #999, #fff);
            background-size: 100% 1px;
            background-repeat: no-repeat;
            background-position: 50%;
            text-align: center;

            span {
              font-size: 12px;
              padding: 0 6px;
              color: #999;
              background-color: #fff;
            }
          }
          p {
              font-size: 13px;
              line-height: 1.54;
              color: #333;
            }
        }
        .mask-footer {
          position: absolute;
          bottom: -50px;
          left: 50%;
          transform: translateX(-50%);
          border: 1px solid rgba(255, 255, 255, 0.7);
          border-radius: 50%;
          padding: 6px;

          i {
            font-size: 16px;
            color: rgba(255, 255, 255, 0.7);
          }
        }
      }
    }

    .shop-activity-sheet {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(50, 50, 50, 0.5);
      display: flex;
      flex-flow: column;
      justify-content: flex-end;
      align-items: center;
      z-index: 1;

      &.fade-enter-active, &.fade-leave-active {
        transition: opacity .5s;
      }
      &.fade-enter, &.fade-leave-to {
        opacity: 0;
      }
      .activity-conten {
        position: relative;
        width: 90%;
        background-color: #fff;
        padding: 25px 20px;
        border-radius: 5px;

        h3 {
          text-align: center;
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 20px;
        }
        .activity-list {
          background-color: rgb(250, 250, 250);
          height: 150px;
          overflow: auto;
          padding: 5px;
          
          li {
            margin-bottom: 12px;
            font-size: 13px;
            color: #333;
          }
          .discount-name {
            font-size: 12px;
            font-weight: 600;
            color: #fff;
            padding: 3px 5px;
            margin-right: 5px;

            &.active-green {
              background-color: #70bc46;
            }
            &.active-red {
              background-color: #f07373;
            }
            &.active-orange {
              background-color: #f1884f;
            }
          }
        }
        .mask-footer {
          position: absolute;
          top: 10px;
          right: 10px;
          color: #999;
        }
      }
    }
  }
</style>
