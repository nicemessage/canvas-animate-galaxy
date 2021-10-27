<template>
    <div class="card">
        <div class="card-img">
            <img :src="cardImg" alt="">
        </div>
        <div class="card-content">
            <div class="title">
                <span>{{title}}</span>
            </div>
            <div class="description">
                <span>{{description}}</span>
            </div>
        </div>
        <slot></slot>
    </div>
</template>
<script>

export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    cardImg: {
      type: String,
      default: './images/card1.png',
    },
  },
};
</script>
<style lang="scss">
.card{
    position: relative;
    cursor: pointer;
    animation-name: fadeInRight;
    animation-duration: 0.4s;
    animation-fill-mode: both;
    .card-img{
        height:300px;
        img{
            height: 100%;
        }
    }
    .card-content{
        position: absolute;
        top:0;
        left:0;
        width: 100%;
        z-index: 1;
        .title{
            font-size: 18px;
            padding: 25px;
            margin-top: 52px;
            text-align: center;
            font-weight:bold;
        }
        .description{
            line-height: 1.5em;
            font-size:14px;
            padding:0 29px;
            text-align: center;
            letter-spacing: 0.17px;
            font-family: PingFang-SC-Regular;
        }
    }
}
.animationDelay0 {
  animation-delay: 0s;
}
.animationDelay5 {
  animation-delay: 0.2s;
}
.animationDelay10 {
  animation-delay: 0.4s;
}
.animationDelay15 {
  animation-delay: 0.6s;
}
@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translate3d(150px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
</style>
