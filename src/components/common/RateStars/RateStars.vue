<template>
  <div :class="'RateStars-' + size">
    <span class="star-item" 
      v-for="(item, index) in gradeToList" 
      :class="item" 
      :key="index"
    ></span>
  </div>
</template>

<script>
export default {
  name: 'RateStars',
  props: {
    grade: {
      type: Number,
      default: 5.0,
      validator: function (value) {
        return value >=0 && value <= 5
      }
    },
    size: {
      type: String,
      default: '24',
    }
  },
  computed: {
    gradeToList() {
      let arr = []
      let level = this.grade
      while(level--){
        if(level > 0) {
          arr.push('on')
        }else if(level === 0) {
          arr.push('on')
          break
        }else {
          arr.push('half')
          break
        }
      }
      arr.length = 5
      for(let i=4; i>=0; i--){
        if(arr[i] == undefined){
          arr[i] = 'off'
        }
      }
      return arr
    }
  },
}
</script>

<style lang="less">
  // 2x图3x图有待解决，有待测试
  @media screen and (-webkit-min-device-pixel-ratio: 3) {
    .star-item.on {
      background-image: url("/stars/star24_on@3x.png");
    }
    .star-item.off {
      background-image: url("/stars/star24_off@3x.png");
    }
    .star-item.half {
      background-image: url("/stars/star24_half@3x.png");
    }
  }

  .base-RateStars {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;

    .star-item {
      display: block;
      width: 10px;
      height: 10px;
      background-size: contain;
      margin-right: 3px;
    }
  }
  
  .RateStars-24 {
    .base-RateStars();
    .star-item.on {
      background-image: url("/stars/star24_on@2x.png");
    }
    .star-item.off {
      background-image: url("/stars/star24_off@2x.png");
    }
    .star-item.half {
      background-image: url("/stars/star24_half@2x.png");
    }
  }
  .RateStars-36 {
    .base-RateStars();
    .star-item.on {
      background-image: url("/stars/star36_on@2x.png");
    }
    .star-item.off {
      background-image: url("/stars/star36_off@2x.png");
    }
    .star-item.half {
      background-image: url("/stars/star36_half@2x.png");
    }
  }
  .RateStars-48 {
    .base-RateStars();
    .star-item.on {
      background-image: url("/stars/star48_on@2x.png");
    }
    .star-item.off {
      background-image: url("/stars/star48_off@2x.png");
    }
    .star-item.half {
      background-image: url("/stars/star48_half@2x.png");
    }
  }
</style>
