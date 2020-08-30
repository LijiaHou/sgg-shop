<template>
  <div @click="handleClick" class="TabBarItem">
    <i class="iconfont" v-bind:class="iconClass" :style="{color: finalColor}"></i>
    <span :style="{color: finalColor}">{{itemName}}</span>
  </div>
</template>

<script>
export default {
  name : 'TabBarItem',
  data() {
    return {
      // activeColor : '#0'
    }
  },
  computed: {
    finalColor(){
      return this.$route.fullPath == this.link ? this.activeColor : '#999'
    }
  },
  props : {
    itemName : {
      type : String,
      default : '名字',
      required : true
    },
    iconClass : {
      type : String,
      default : 'someClassName',
      required : true
    },
    link : {
      type : String,
      default : '/'
    },
    activeColor : {
      type : String,
      default : 'red'
    }
  },
  methods: {
    handleClick(){
      this.$router.replace(this.link)
    }
  }
}
</script>

<style scoped lang="less">
  .TabBarItem {
    width: 100%;
    flex-grow: 1;
    margin: 0 3px;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;

    i {
      font-size: 22px;
      margin-bottom: 5px;
    }
    span {
      font-size: 12px;
      position: relative;
      bottom: 0px;
      text-align: center;
    }
  }
  
</style>