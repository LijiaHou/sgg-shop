<template>
  <div class="TabBar">
    <slot name="first"><span>{{msg}}1</span></slot>
    <slot name="second"><span>{{msg}}2</span></slot>
    <slot name="third"><span>{{msg}}3</span></slot>
    <slot name="fourth"><span>{{msg}}4</span></slot>
  </div>
</template>


<script>
export default {
  name: 'TabBar',
  data () {
    return {
      msg: 'TabBar!'
    }
  }
}
</script>


<style scoped>
.TabBar {
  width: 100%;
  height: 50px;
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
}

</style>
