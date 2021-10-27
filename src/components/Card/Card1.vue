<template>
    <Card
      :title="title"
      :description="description"
      :cardImg="cardImg"
      :class="'animationDelay' + animateDaley"
    >
        <img :src="decorate1Img" class="decorate11" alt="">
        <div class="circle">
          <img :src="decorate2Img" class="decorate12" alt="">
        </div>
    </Card>
</template>
<script>
import cardImg from './images/card1.png';
import decorate1Img from './images/card1-1.png';
import decorate2Img from './images/card1-2.png';
import Card from './Card.vue';

export default {
  data() {
    return {
      cardImg,
      decorate1Img,
      decorate2Img,
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

.decorate11{
  position: absolute;
  z-index: 2;
  height:49px;
  left:-24px;
  bottom:10px;
  // animation: left-right 2s ease 1s infinite;
}

.circle{
  position: absolute;
  width: 65px;
  height: 65px;
  z-index: 3;
  left: -31px;
  bottom: 4px;
  transform: rotate(150deg);
  // animation: circleRoate 5s linear infinite;
  .decorate12{
    height:19px;
  }
}

@keyframes left-right {
  0%   {left:-24px;}
  50%  {left:0px;}
  100% {left:-24px}
}

@keyframes circleRoate{
    from{transform: rotate(0deg);}
    to{transform: rotate(360deg);}
}
</style>
