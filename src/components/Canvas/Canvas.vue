<template>
  <div class="canvas-overlay">
    <canvas id="cas" height="800" width="100%"></canvas>
  </div>
</template>
<script>

import CanvasAnimate from '@/util/canvas';

export default {
  data() {
    return {
    };
  },
  mounted() {
    this.canvasAnimate = new CanvasAnimate('cas');
    this.canvasAnimate.draw();
  },
  destroyed() {
    this.canvasAnimate.destroy();
    cancelAnimationFrame(this.timeId);
  },
  methods: {
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
}
</style>
