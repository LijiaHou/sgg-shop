<template>
  <div class="NavBar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name : 'NavBar',
  // props : {
  //   themeColor : {
  //     type : String,
  //     default : '#aee'
  //   }
  // }
}
</script>

<style scoped>
.NavBar {
  width: 100%;
  display: flex;
  height: 44px;
  line-height: 44px;
}
.left, .right {
  width: 80px;
  text-align: center;
}
.center {
  width: 200px;
  /* 相当于felx-grow */
  text-align: center;
}

</style>