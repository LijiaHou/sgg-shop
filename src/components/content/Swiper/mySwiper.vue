<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide">
          <a v-for="(item, index) in items1" :key="index" href="javascript:;">
            <img :src="item.link" :alt="item.name">
            <span>{{item.name}}</span>
          </a>
        </div>
        <div class="swiper-slide">
          <a v-for="(item, index) in items2" :key="index" href="javascript:;">
            <img :src="item.link" :alt="item.name">
            <span>{{item.name}}</span>
          </a>
        </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/css/swiper.min.css'

export default {
  name : 'mySwiper',
  data() {
    return {
      items1: [ 
        { link: './nav/1.jpg', name: '甜品饮品'},
        { link: './nav/2.jpg', name: '商超便利'},
        { link: './nav/3.jpg', name: '美食'},
        { link: './nav/4.jpg', name: '简餐'},
        { link: './nav/5.jpg', name: '新店特惠'},
        { link: './nav/6.jpg', name: '准时达'},
        { link: './nav/7.jpg', name: '预订早餐'},
        { link: './nav/8.jpg', name: '土豪推荐'},
      ],
      items2: [ 
        { link: './nav/9.jpg', name: '川湘菜'},
        { link: './nav/10.jpg', name: '麻辣烫'},
        { link: './nav/11.jpg', name: '包子粥店'},
        { link: './nav/12.jpg', name: '鲜花蛋糕'},
        { link: './nav/13.jpg', name: '日韩料理'},
        { link: './nav/14.jpg', name: '果蔬生鲜'},
        { link: './nav/14.jpg', name: '汉堡薯条'},
        { link: './nav/14.jpg', name: '披萨意面'},
      ]
    }
  },
  mounted() {
    var mySwiper = new Swiper ('.swiper-container', {
      loop: true, 
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      // autoplay: true
    })
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
