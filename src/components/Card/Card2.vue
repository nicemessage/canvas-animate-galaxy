<template>
    <Card
      :title="title"
      :description="description"
      :cardImg="cardImg"
      :class="'card2 animationDelay' + animateDaley"
    >
        <img :src="decorate1Img" class="decorate21" alt="">
        <img :src="decorate2Img" class="decorate22" alt="">
        <img :src="decorate3Img" class="decorate23" alt="">
    </Card>
</template>
<script>
import cardImg from './images/card2.png';
import decorate1Img from './images/card2-1.png';
import decorate2Img from './images/card2-2.png';
import decorate3Img from './images/card2-3.png';
import Card from './Card.vue';

export default {
  data() {
    return {
      cardImg,
      decorate1Img,
      decorate2Img,
      decorate3Img,
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
.card2:hover{
  .decorate22{
    animation: card2-meteor1 2s linear;
  }
  .decorate21{
    animation: card2-meteor2 2s linear;
  }
}

.decorate21{
  position: absolute;
  z-index: 2;
  height:64px;
  bottom:60px;
  right:0px;
}
.decorate22{
  position: absolute;
  z-index: 2;
  height:33px;
  top:16px;
  right:24px;
  opacity:0;
}
.decorate23{
  position: absolute;
  z-index: 2;
  height:40px;
  top:10px;
  right:10px;
}

@keyframes card2-meteor1 {
  from{top:16px;right:24px;opacity:0;}
  to{top:130px;right:265px;opacity:1;}
}
@keyframes card2-meteor2 {
  from{bottom:60px;right:0px;}
  to{bottom:-25px;right:145px;}
}
</style>
