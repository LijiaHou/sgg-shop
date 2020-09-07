<template>
  <div class="swiper-container" v-if="categorysArr.length">
    <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(category, index) in categorysArr" :key="index">
          <a v-for="(item, index) in category" :key="index" href="javascript:;">
            <img :src="baseImgUrl + item.image_url">
            <span>{{item.title}}</span>
          </a>
        </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
  <div v-else>
    <img src="/msite_back.svg">
  </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/css/swiper.min.css'
import { mapState } from 'vuex';

export default {
  name : 'mySwiper',
  data() {
    return {
      baseImgUrl: 'https://fuss10.elemecdn.com',
      // baseImgUrl: '',
      // categorysArr: [[ 
      //   { image_url: './nav/1.jpg', title: '甜品饮品'},
      //   { image_url: './nav/2.jpg', title: '商超便利'},
      //   { image_url: './nav/3.jpg', title: '美食'},
      //   { image_url: './nav/4.jpg', title: '简餐'},
      //   { image_url: './nav/5.jpg', title: '新店特惠'},
      //   { image_url: './nav/6.jpg', title: '准时达'},
      //   { image_url: './nav/7.jpg', title: '预订早餐'},
      //   { image_url: './nav/8.jpg', title: '土豪推荐'},
      // ],
      // [ 
      //   { image_url: './nav/9.jpg', title: '川湘菜'},
      //   { image_url: './nav/10.jpg', title: '麻辣烫'},
      //   { image_url: './nav/11.jpg', title: '包子粥店'},
      //   { image_url: './nav/12.jpg', title: '鲜花蛋糕'},
      //   { image_url: './nav/13.jpg', title: '日韩料理'},
      //   { image_url: './nav/14.jpg', title: '果蔬生鲜'},
      //   { image_url: './nav/14.jpg', title: '汉堡薯条'},
      //   { image_url: './nav/14.jpg', title: '披萨意面'},
      // ]],
    }
  },
  
  computed: {
    ...mapState(['categorys']),

    // 根据一维数组categorys生成一个2维数组，第二维的数组大小最大为8
    categorysArr() {
      let resArr = []
      while(this.categorys.length > 0) {
        resArr.push(this.categorys.splice(0, 8))
      }
      // console.log(resArr);
      return resArr
    }

  },

  mounted() {

    // console.log(this.categorysArr);
    // setTimeout(() => {
    //       // 创建一个Swiper实例对象, 来实现轮播
    //       new Swiper('.swiper-container', {
    //         loop: true, // 可以循环轮播
    //         // 如果需要分页器
    //         pagination: {
    //           el: '.swiper-pagination',
    //         },
    //         autoplay: true
    //       })
    //     }, 2000)
  },

  watch: {
    // categorys变化了，说明请求到数据了
    categorys(value) {
      // 界面更新就立即创建Swiper
      // this.$nextTick(callback) 将回调延迟到下次DOM更新循环之后执行
      //  - 一般用在数据更新之后
      // (但是目前时机还是有点早，导致pagination失灵，有时间再调一调)
      this.$nextTick(() => {
        var mySwiper = new Swiper ('.swiper-container', {
          loop: true, 
          pagination: {
            el: '.swiper-pagination',
          },
          autoplay: true
        })
      })

    // setTimeout(() => {
    //       // 创建一个Swiper实例对象, 来实现轮播
    //       new Swiper('.swiper-container', {
    //         loop: true, // 可以循环轮播
    //         // 如果需要分页器
    //         pagination: {
    //           el: '.swiper-pagination',
    //         },
    //         autoplay: true
    //       })
    //     }, 2000)
    }
    
    
  },
}
 
</script>

<style lang="less">
.swiper-container {
  width: 100%;
  border-bottom: solid #e4e4e4 1px;
  height: 200px;
  margin-top: 15px;

  .swiper-slide {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;

    a {
      width: 25%;
      text-decoration: none;
      display: flex;
      flex-flow: column;
      align-items: center;

      img {
        width: 50px;
        height: 50px;
        margin-bottom: 10px;
      }
      span {
        font-size: 13px;
        widows: 100%;
        color: #666;
      }
    }
  }

  .swiper-pagination {
    .swiper-pagination-bullet-active {
      background-color: #02a774;
    }
  }
}
  
  
</style>
