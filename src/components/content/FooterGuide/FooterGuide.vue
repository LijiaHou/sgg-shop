<template>
  <div>
    <tab-bar>
      <tab-bar-item slot="first" itemName="外卖" iconClass="icon-waimai" link="/msite" activeColor="#02a774"></tab-bar-item>
      <tab-bar-item slot="second" itemName="搜索" iconClass="icon-search" link="/search" activeColor="#02a774"></tab-bar-item>
      <tab-bar-item slot="third" itemName="订单" iconClass="icon-dingdan" link="/order" activeColor="#02a774"></tab-bar-item>
      <tab-bar-item slot="fourth" itemName="我的" iconClass="icon-geren" link="/profile" activeColor="#02a774"></tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from 'components/common/TabBar/TabBar'
import TabBarItem from 'components/common/TabBar/TabBarItem'

export default {
  name : 'FooterGuide',
  components : {
    TabBar,
    TabBarItem
  }
}
</script>

<style lang="less">
  
</style>
