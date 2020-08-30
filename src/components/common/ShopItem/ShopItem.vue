<template>
  <div class="ShopItem">
    <div class="ShopItem-left">
      <img :src="imgLink">
    </div>
    <div class="ShopItem-right">
      <div class="ShopItem-info-header">
        <div class="ShopItem-info-name">
          <span>品牌</span>
          <h4 class="ellipsis">{{shopName}}</h4>
        </div>
        <div class="ShopItem-info-ontime">
          <span>保</span><span>准</span><span>票</span>
        </div>
      </div>
      <div class="ShopItem-info-evaluation">
        <div class="ShopItem-info-stars">
          <span class="star-item" v-for="(item, index) in gradeToList" :class="item" :key="index"></span>
          <span class="star-item-grade">{{grade.toFixed(2)}}</span>
          <div class="info-sales">月售<b>{{salesVolume}}</b>单</div>
        </div>
        <div class="ShopItem-info-delivery">
          <span>大何村专卖</span>
        </div>
      </div>
      <div class="ShopItem-info-price">
        <div class="ShopItem-info-dliveryprice">
          <p>￥{{minPrice}}起送<span>/</span>配送费约￥{{deliveryFee}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopItem',
  props: {
    shopName: {
      type: String,
      default: '商家名称'
    },
    salesVolume: {
      type: Number,
      default: 999
    },
    minPrice: {
      type: Number,
      default: 25
    },
    deliveryFee: {
      type: Number,
      default: 5
    },
    imgLink: String,
    grade: {
      type: Number,
      default: 5.0,
      validator: function (value) {
        return value >=0 && value <= 5
      }
    }
  },
  computed: {
    gradeToList() {
      let arr = []
      let level = this.grade
      while(level--){
        if(level > 0) {
          arr.push('on')
        }else if(level === 0) {
          arr.push('on')
          break
        }else {
          arr.push('half')
          break
        }
      }
      arr.length = 5
      for(let i=4; i>=0; i--){
        if(arr[i] == undefined){
          arr[i] = 'off'
        }
      }
      return arr
    }
  },
}
</script>

<style lang="less">
  .ShopItem {
    width: 100%;
    display: flex;

    .ShopItem-left {
      width: 20%;
      flex-grow: 1;
      padding-right: 10px;

      img {
        width: 100%;
        height: 75px;
      }
    }
    .ShopItem-right {
      width: 80%;
      flex-grow: 1;
      display: flex;
      flex-flow: column;
      justify-content: space-between;

      .ShopItem-info-header {
        display: flex;
        justify-content: space-between;

        .ShopItem-info-name {
          & :nth-child(1) {
            background-color: #ffd930;
            display: inline-block;
            font-size: 11px;
            font-weight: 900;
            line-height: 11px;
            color: #333;
            padding: 2px;
            border-radius: 2px;
            margin-right: 5px;
            vertical-align: text-bottom;
          }
          & :nth-child(2) {
            display: inline-block;
            width: 120px;
            font-size: 16px;
            font-weight: 900;
            vertical-align: text-bottom;
          }
        }
        .ShopItem-info-ontime {
          span {
            font-size: 10px;
            color: #999;
            border: 1px solid #f1f1f1;
            padding: 0 2px;
            border-radius: 2px;
          }
        }
      }
      .ShopItem-info-evaluation {
        display: flex;
        justify-content: space-between;

        .ShopItem-info-stars {
          display: flex;
          justify-content: flex-start;
          align-items: flex-end;

          .star-item {
            display: block;
            width: 10px;
            height: 10px;
            background-size: contain;
            margin-right: 3px;

          }
          .star-item-grade {
            display: block;
            font-size: 10px;
            color: #ff6000;
            margin-right: 3px;
          }
          .info-sales {
            font-size: 8px;
            color: #666;
          }
        }
        .ShopItem-info-delivery {
          font-size: 9px;
          padding: 1px;
          border: 1px solid #02a774;
          border-radius: 2px;
          color: #02a774;
        }
      }
      .ShopItem-info-price {
        .ShopItem-info-dliveryprice {
          p {
            font-size: 12px;
            color: #666;

            span {
              color: #ccc;
              margin: 0 3px;
            }
          }
        }
      }
    }

    .star-item.on {
      background-image: url("/stars/star24_on@2x.png");
    }
    .star-item.off {
      background-image: url("/stars/star24_off@2x.png");
    }
    .star-item.half {
      background-image: url("/stars/star24_half@2x.png");
    }

  }
</style>
