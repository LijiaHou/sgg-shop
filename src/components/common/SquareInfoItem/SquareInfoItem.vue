<template>
  <div class="SquareInfoItem">
    <div class="square-value">
      <span :style="{color: color}">{{value.toFixed(fixed)}}<b>{{unit}}</b></span>
    </div>
    <div class="square-title">
      {{title}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'SquareInfoItem',
  props: {
    value: {
      type: Number,
      default: 0
    },
    color: {
      type: String,
      default: 'red'
    },
    unit: {
      type: String,
      default: '克拉'
    },
    title: {
      type: String,
      default: '我的标题'
    },
    fixed: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="less">
  .SquareInfoItem {
    text-align: center;
    .square-value {
      span {
        font-size: 30px;
        font-weight: 900;
        font-family: Tahoma, sans-serif;

        b {
          font-size: 14px;
          font-weight: 500;
          color: #666;
        }
      }
    }
    .square-title {
      font-size: 14px;
      margin-top: 10px;
      color: #666;
    }
  }
</style>
