<template>
  <div id="ShopInfos">
    <div class="delivery-info">
      <h3>配送信息</h3>
      <div class="delivery-brief">
        <span>{{info.description}}</span>
        由商家提供配送服务，约{{info.deliveryTime}}分钟送达，距离你{{info.distance}}
      </div>
      <div class="delivery-price">
        配送费￥{{info.deliveryPrice}}
      </div>
    </div>
    <div class="activity-and-service">
      <h3>活动与服务</h3>
      <div class="activity-list">
        <ul>
          <li v-for="(spt, index) in info.supports" :key="index">
            <span class="discount-name" :class="supportsClasses[spt.type]">{{spt.name}}</span>
            <span>{{spt.content}}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="activity-and-service">
      <h3>活动与服务</h3>
      <div class="activity-list">
        <ul>
          <li v-for="(spt, index) in info.supports" :key="index">
            <span class="discount-name" :class="supportsClasses[spt.type]">{{spt.name}}</span>
            <span>{{spt.content}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ShopInfos',
  data() {
    return {
      supportsClasses: ['active-green', 'active-red', 'active-orange'],
      showBrief: false,
      showActivity: false
    }
  },
  computed: {
    ...mapState(['info']),
  },
}
</script>

<style lang="less" scoped>
  #ShopInfos {
    background-color: #f3f5f7;
    position: absolute;
    top: 200px;
    left: 0;
    bottom: 0;
    width: 100%;
    overflow: auto;

    h3 {
      color: #000;
      font-weight: 700;
      font-size: 16px;
    }

    .delivery-info {
      background-color: #fff;
      color: #666;
      font-size: 13px;
      padding: 16px 14px 14px;
      border-bottom: 2px solid #eee;

      .delivery-brief {
        margin-top: 16px;

        span {
          background-color: #0097ff;
          color: #fff;
          font-size: 11px;
          padding: 4px 5px;
          border-radius: 4px;
          margin-right: 10px;
        }
      }
      .delivery-price {
        margin-top: 10px;
      }
    }
    .activity-and-service {
      margin-top: 20px;
      border-bottom: 2px solid #eee;
      border-top: 2px solid #eee;
      background-color: #fff;

      .activity-list {
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
    }
  }
</style>
