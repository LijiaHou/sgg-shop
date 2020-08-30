<template>
  <div class="ItemLinkBar">
    <div class="linkbar-brand" >
      <i class="iconfont" :class="brand" :style="{color: color}"></i>
    </div>
    <div class="linkbar-cotent">
      <span>{{title}}</span>
      <i class="iconfont icon-jiantou1"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemLinkBar',
  props: {
    brand: String,
    title: {
      type: String,
      default: '标题'
    },
    color: {
      type: String,
      default: 'red'
    }
  },
  
}
</script>

<style lang="less">
  .ItemLinkBar {
    width: 100%;
    height: 52px;
    display: flex;

    .linkbar-brand {
      width: 10%;
      text-align: center;
      line-height: 48px;

      i {
        font-size: 30px;
      }
    }
    .linkbar-cotent {
      width: 90%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: solid 1px rgb(230, 230, 230);

      span {
        color: #333;
      }
      i {
        color: #bbb;
        font-size: 10px;
        margin-right: 10px;
      }
    }
  }
</style>
