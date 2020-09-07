<template>
  <div id="HeaderBar">
    <nav-bar>
      <router-link class="left" to="/search" slot="left"><i v-if="sides" class="iconfont icon-sousuo"></i></router-link>
      <span class="center ellipsis" slot="center">{{content}}</span>
      <router-link  v-if="sides" class="right" slot="right" :to="userInfo._id ? '/userinfo' : '/login'">
        <span v-if="!userInfo._id">登录|注册</span>
        <i class="iconfont icon-person" v-else></i>
      </router-link >
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/NavBar/NavBar'
import {mapState} from 'vuex'

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
  },
  computed: {
    ...mapState(['userInfo'])
  },
}
</script>

<style lang="less">
  #HeaderBar {
    width: 100%;
    background-color: #02a774;
    color: #fff;
    a {
      text-decoration: none;
      color: currentColor
    }

    .left {
      width: 100%;
      text-align: left;

      & i {
        font-size: 25px;
        margin-left: 15px;
      }
    }
    .right {
      width: 100%;
      text-align: right;

      & span {
        margin-right: 15px;
        font-size: 14px;
      }
      & i {
        font-size: 20px;
        margin-right: 15px;
      }
    }
    .center {
      width: 90%;
      font-size: 20px;
      display: inline-block;
    }
  }
  
</style>
