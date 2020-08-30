<template>
  <div id="LoginBar">
    <div class="login-bar-left">
      <i class="iconfont icon-person"></i>
      <div class="bar-login">
        <h3>登录/注册</h3>
        <div class="login-bar-mobile">
          <i class="iconfont icon-shouji icon-mobile"></i>
          <span>暂无绑定手机号</span>
        </div>
      </div>
    </div>
    <div class="login-bar-right">
      <i class="iconfont icon-jiantou1"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginBar'
}
</script>

<style lang="less">
  #LoginBar {
    width: 100%;
    height: 60px;
    background-color: #02a774;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .login-bar-left {
      display: flex;

      .bar-login {
        margin-left: 15px;
        display: flex;
        flex-flow: column;
        justify-content: flex-end;

        h3 {
          display: inline;
          font-size: 18px;
          font-weight: bolder;
        }
        .login-bar-mobile {
          position: relative;
          right: 15px;
          margin-bottom: -3px;
          margin-top: 3px;

          i {
            vertical-align: middle;
            font-size: 30px;
          }
          span {
            font-size: 14px;
            vertical-align: middle;
            position: relative;
            right: 10px;
          }
        }
      }
      .icon-person {
        background-color: #e4e4e4; 
        font-size: 62px;
        overflow: hidden;
        border-radius: 50%;
      } 
    }
    .login-bar-right {
      i {
        font-size: 5px;
        margin-right: 10px;
      }
    }
    
  }
</style>
