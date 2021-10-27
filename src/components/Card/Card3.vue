<template>
    <Card
      :title="title"
      :description="description"
      :cardImg="cardImg"
      :class="'card3 animationDelay' + animateDaley"
    >
        <img :src="decorate1Img" class="decorate decorate31" alt="">
        <img :src="decorate2Img" class="decorate decorate32" alt="">
    </Card>
</template>
<script>
import cardImg from './images/card3.png';
import decorate1Img from './images/card3-1.png';
import decorate2Img from './images/card2-3.png';
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
.decorate31{
  position: absolute;
  z-index: 2;
  height:64px;
  top:0;
  right:0;
}
.decorate32{
  position: absolute;
  z-index: 2;
  height:25px;
  top:45px;
  right:155px;
}
</style>
