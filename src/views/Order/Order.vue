<template>
  <div id="Order">
    <div class="order-header-wrapper">
      <header-bar content="订单"></header-bar>
    </div>
    <a class="order-cotent" href="javascript:;">
      <img src="/order/person.png" />
      <span>登录后查看外卖订单</span>
      <button>立即登录</button>
    </a>
  </div>
</template>

<script>
import HeaderBar from 'components/content/HeaderBar/HeaderBar'

export default {
  name : 'Order',
  components : {
    HeaderBar
  }
}
</script>

<style lang="less">
  #Order {
    width: 100%;
    a {
      text-decoration: none;
    }
    .profile-header-wrapper {
      width: 100%;
      position: fixed;
      top: 0;
    }
    .order-cotent {
      display: block;
      width: 60%;
      margin: 20% auto;
      // display: flex;
      // flex-flow: column;
      // justify-content: space-between;
      text-align: center;

      img {
        display: block;
        width: 100%;
        height: 30%;
      }
      span {
        display: block;
        font-size: 17px;
        color: #6a6a6a;
        margin: 10px 0;
      }
      button {
        display: inline-block;
        background-color: #02a774;
        font-size: 14px;
        color: #fff;
        border: 0;
        border-radius: 5px;
        padding: 10px 20px;
      }
    }
  }
  
</style>
