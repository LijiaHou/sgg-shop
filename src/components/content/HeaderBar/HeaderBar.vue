<template>
  <div id="HeaderBar">
    <nav-bar>
      <i v-if="sides" class="left iconfont icon-sousuo" slot="left" ></i>
      <span class="center ellipsis" slot="center">{{content}}</span>
      <span v-if="sides" class="right" slot="right">登录|注册</span>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/NavBar/NavBar'

export default {
  name : 'HeaderBar',
  components : {
    NavBar
  },
  props : {
    content : {
      type : String,
      default : '标题内容'
    },
    sides : {
      type : Boolean,
      default : false
    }
  }
}
</script>

<style lang="less">
  #HeaderBar {
    width: 100%;
    background-color: #02a774;
    color: #fff;

    .left {
      width: 100%;
      font-size: 25px;
      position: relative;
      right: 5px;
    }
    .right {
      width: 100%;
      font-size: 14px;
    }
    .center {
      width: 100%;
      font-size: 20px;
      display: block;
      width: 170px;
    }
  }
  
</style>
