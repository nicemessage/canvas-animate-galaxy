<template>
    <Card
      :title="title"
      :description="description"
      :cardImg="cardImg"
      :class="'card4 animationDelay' + animateDaley"
    >
        <img :src="decorate1Img" class="decorate41" alt="">
        <img :src="decorate2Img" class="decorate42" alt="">
        <img :src="decorate3Img" class="decorate43" alt="">
        <img :src="decorate4Img" class="decorate44" alt="">
        <img :src="decorate5Img" class="decorate45" alt="">
    </Card>
</template>
<script>
import cardImg from './images/card4.png';
import decorate1Img from './images/card4-1.png';
import decorate2Img from './images/card4-2.png';
import decorate3Img from './images/card4-3.png';
import decorate4Img from './images/card4-4.png';
import decorate5Img from './images/card4-5.png';
import Card from './Card.vue';

export default {
  data() {
    return {
      cardImg,
      decorate1Img,
      decorate2Img,
      decorate3Img,
      decorate4Img,
      decorate5Img,
    };
  },
  components: {
    Card,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    animateDaley: {
      type: [String, Number],
      default: 0,
    },
  },
};
</script>
<style lang="scss">
.card4:hover{
  .decorate41{
      animation: meteor 2s linear 0.2s ;
  }
  .decorate42{
      animation: meteor2 2s linear 0.2s ;
  }
}
.decorate41{
  position: absolute;
  z-index: 2;
  height: 52px;
  top: 10px;
  right: 30px;
}
.decorate42{
  position: absolute;
  z-index: 2;
  height: 35px;
  top: 19px;
  right: 80px;
  opacity: 0;
}
.decorate43{
  position: absolute;
  z-index: 2;
  height: 30px;
  bottom:0px;
  left:23px;
  // animation: up-down2 2s ease  1s infinite;
}
.decorate44{
  position: absolute;
  z-index: 2;
  height: 80px;
  right:-45px;
  bottom:0;
  // animation: right-left 3s ease 0.5s infinite;
}
.decorate45{
  position: absolute;
  z-index: 2;
  height: 40px;
  right:14px;
  top:75px;
}
@keyframes up-down2 {
    0%   {bottom:0px;}
    50%  {bottom:13px;}
    100% {bottom:0px}
}

@keyframes right-left {
    0%   {left:-45px;}
    50%  {left:-20px;}
    100% {left:-45px}
}

@keyframes meteor {
  from{ top: 10px;right: 30px;}
  to{top: 120px;right: 250px;}
}

@keyframes meteor2 {
  0% { top: 19px;right: 80px;opacity: 0;}
  50% {top: 57px;right: 140px;opacity: 1;}
  100% {top: 95px;right: 200px;opacity: 0;}
}
</style>
