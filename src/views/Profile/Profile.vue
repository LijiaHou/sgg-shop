<template>
  <div id="Profile">
    <div class="profile-header-wrapper"><header-bar content="我的"></header-bar></div>
    <router-link class="profile-login-wrapper" to="/login"><login-bar></login-bar></router-link>
    <div class="profile-value-display">
      <a href="javascript:;"><square-info-item color="#f90" unit="元" title="我的余额" :fixed="2"></square-info-item></a>
      <a href="javascript:;"><square-info-item color="#ff5f3e" unit="个" title="我的优惠"></square-info-item></a>
      <a href="javascript:;"><square-info-item  color="#6ac20b" unit="分" title="我的积分"></square-info-item></a>
    </div>
    <div class="profile-order">
      <a href="javascript:;"><item-link-bar brand="icon-order-s" color="#02a774" title="我的订单"></item-link-bar></a>
      <a href="javascript:;"><item-link-bar brand="icon-jifen" color="#ff5f3e" title="积分商城"></item-link-bar></a>
      <a href="javascript:;"><item-link-bar brand="icon-vip" color="#f90" title="会员专享特权"></item-link-bar></a>
    </div>
    <div class="profile-serve">
      <a href="javascript:;"><item-link-bar brand="icon-fuwu" color="#02a774" title="服务中心"></item-link-bar></a>
    </div>
  </div>
</template>

<script>
import HeaderBar from 'components/content/HeaderBar/HeaderBar'
import LoginBar from 'components/content/LoginBar/LoginBar'
import SquareInfoItem from 'components/common/SquareInfoItem/SquareInfoItem'
import ItemLinkBar from 'components/common/ItemLinkBar/ItemLinkBar'

export default {
  name : "Profile",
  components : {
    HeaderBar,
    LoginBar,
    SquareInfoItem,
    ItemLinkBar
  }
}
</script>

<style lang="less">
  #Profile {
    a {
      text-decoration: none;
    }

    .profile-header-wrapper {
      width: 100%;
      position: fixed;
      top: 0;
    }
    .profile-login-wrapper {
      display: block;
      margin-top: 45px;
      color: #fff;
      padding: 20px 10px;
      background-color: #02a774;
    }
    .profile-value-display {
      display: flex;
      padding-bottom: 10px;

      a {
        width: 100%;
        flex-grow: 1;
        border-right: 1px solid #e9e9e9;
        border-bottom: 1px solid #e9e9e9;
        padding-top: 15px;
        padding-bottom: 10px;
      }
    }
    .profile-order {
      border-top: #e9e9e9 solid 2px;
      padding-bottom: 10px;
    }
    .profile-serve {
      border-top: #e9e9e9 solid 2px;
    }
  }
</style>
