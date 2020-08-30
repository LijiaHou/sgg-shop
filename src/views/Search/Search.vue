<template>
  <div id="Search">
    <div class="search-header-wrapper"><header-bar content="搜索"></header-bar></div>
    <form class="search-form">
      <input type="text" placeholder="请输入商家名称"/>
      <input type="submit" value="提交查询"/>
    </form>
  </div>
</template>

<script>
import HeaderBar from 'components/content/HeaderBar/HeaderBar'

export default {
  name : 'Search',
  components : {
    HeaderBar
  }
}
</script>

<style lang="less">
  #Search {
    .search-header-wrapper {
      width: 100%;
      position: fixed;
      top: 0;
    }
    .search-form {
      width: 100%;
      margin-top: 60px;
      text-align: center;

      input[type=text] {
        width: 70%;
        height: 35px;
        background-color: #f2f2f2;
        border: none;
        font-size: 14px;
        font-weight: 900;
        text-indent: 1em;
        color: #333;
      }
      input[type=submit] {
        // width: 20%;
        height: 35px;
        background-color: #02a774;
        border: 0;
        border-radius: 2px;
        color: #fff;
        font-size: 16px;
        font-weight: 900;
        margin-left: 10px;
      }
    }
  }
</style>
