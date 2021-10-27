<template>
  <div class="canvas-overlay">
    <canvas id="cas" height="800" width="100%"></canvas>
    <!-- <div class="meteor-container">
      <img v-for="item in starData"
        :src="meteors[item.index]"
        :key="item.key"
        :style="{ left: item.left, top: item.top, animationDelay: item.delay }"
        alt=""
      />
    </div> -->
  </div>
</template>
<script>
import meteor1Img from '@/assets/images/meteor1.png';
import meteor2Img from '@/assets/images/meteor2.png';
import meteor3Img from '@/assets/images/meteor3.png';
import meteor4Img from '@/assets/images/meteor4.png';
import meteor5Img from '@/assets/images/meteor5.png';

import CanvasAnimate from '@/util/canvas';

export default {
  data() {
    return {
      meteors: {
        0: meteor1Img,
        1: meteor2Img,
        2: meteor3Img,
        3: meteor4Img,
        4: meteor5Img,
      },
      starData: [],
    };
  },
  mounted() {
    this.canvasAnimate = new CanvasAnimate('cas');
    this.canvasAnimate.draw();

    this.date = Date.now();
    // 处理流星
    // this.startMeteors();
  },
  destroyed() {
    this.canvasAnimate.destroy();
    cancelAnimationFrame(this.timeId);
  },
  methods: {
    randomStartData() {
      const datas = [];
      const num = Math.round(Math.random() * 2) + 1;
      // const num = 1;
      for (let i = 0; i < num; i++) {
        datas.push({
          // right: `${Math.floor(Math.random() * 200)}px`,
          left: `${Math.random() * 50 + 50}%`,
          top: `${Math.floor(Math.random() * 50)}px`,
          delay: `${Math.random()}s`,
          index: Math.round(Math.random() * 4),
          key: Date.now(),
        });
      }
      this.starData = datas;
    },
    startMeteors() {
      this.timeId = requestAnimationFrame(() => {
        const d = Date.now();
        const interval = 4000 + Math.floor(Math.random() * 5) * 1000;
        if ((d - this.date) / interval > 1) {
          this.date = d;
          this.randomStartData();
        }
        this.startMeteors();
      });
    },
  },
};
</script>
<style lang="scss">
.canvas-overlay{
  width: 100%;
  height: 900px;
  position: absolute;
  top:0;
  left:0;
  z-index: -1;
  #cas{
    width: 100%;
  }
  .meteor-container {
    overflow: hidden;
    position: absolute;
    z-index: 999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    img {
      position: absolute;
      animation: star-animate 4s ease;
      opacity: 0;
    }
}
}
@keyframes star-animate {
  0% {
    opacity: 1;
    transform:scale(0) translate(0,0);
  }
  100% {
    opacity: 0.8;
    transform:scale(0.9) translate(-1000px,1000px);
  }
}
</style>
