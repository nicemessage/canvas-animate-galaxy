<template>
  <div class="particle-wrap" :style="{ width: width + 'px' }">
    <canvas
      ref="myCanvas"
      class="myCanvas"
      :width="width"
      :height="height"
     ></canvas>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 700,
    },
    height: {
      type: Number,
      default: 200,
    },
  },
  data() {
    return {
      TO_RAD: Math.PI / 180,
      FX: {
        particles: [],
      },
      lastUpdate: null,
      ctx: null,
    };
  },
  mounted() {
    window.requestAnimFrame = window.requestAnimationFrame
    || window.webkitRequestAnimationFrame
    || window.mozRequestAnimationFrame
    || window.oRequestAnimationFrame
    || window.msRequestAnimationFrame
    || this.requestAnimFrame;
    const canvas = this.$refs.myCanvas;
    this.ctx = canvas.getContext('2d');
    this.lastUpdate = new Date();
    this.loop();
  },
  methods: {
    requestAnimFrame(callback) {
      window.setTimeout(callback, 1000 / 60);
    },
    randMinMax(min, max, round) {
      let val = min + (Math.random() * (max - min));
      if (round) {
        val = Math.round(val);
      }
      return val;
    },
    buttonEffect(left, top, width, height) {
      let x;
      let y;
      let degree;
      for (let i = 0; i < 20; i++) {
        if (Math.random() < 0.5) {
          y = this.randMinMax(top, top + height);
          if (Math.random() < 0.5) {
            x = left;
            degree = this.randMinMax(-45, 45);
          } else {
            x = left + width;
            degree = this.randMinMax(135, 225);
          }
        } else {
          x = this.randMinMax(left, left + width);
          if (Math.random() < 0.5) {
            y = top;
            degree = this.randMinMax(45, 135);
          } else {
            y = top + height;
            degree = this.randMinMax(-135, -45);
          }
        }
        this.createParticle({
          x,
          y,
          degree,
          speed: this.randMinMax(100, 150),
          vs: this.randMinMax(-4, -1),
        });
      }
    },
    createParticle(args) {
      const options = {
        color: 'rgb(122,122,168)',
        degree: this.randMinMax(0, 360),
        speed: this.randMinMax(300, 350),
        vd: this.randMinMax(-90, 90),
        vs: this.randMinMax(-8, -5),
        ...args,
      };
      this.FX.particles.push(options);
    },
    loop() {
      const thisUpdate = new Date();
      const delta = (this.lastUpdate - thisUpdate) / 1000;
      const size = 2;
      let p;
      this.ctx.save();
      this.ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
      this.ctx.globalCompositeOperation = 'destination-in';
      this.ctx.fillRect(0, 0, this.width, this.height);
      this.ctx.restore();
      for (let i = 0; i < this.FX.particles.length; i++) {
        p = this.FX.particles[i];
        p.degree += (p.vd * delta);
        p.speed += (p.vs);
        if (p.speed >= 0) {
          p.x += Math.cos(p.degree * this.TO_RAD) * (p.speed * delta);
          p.y += Math.sin(p.degree * this.TO_RAD) * (p.speed * delta);
          this.ctx.save();
          this.ctx.translate(p.x, p.y);
          this.ctx.rotate(p.degree * this.TO_RAD);
          this.ctx.fillStyle = p.color;
          this.ctx.fillRect(-size, -size, size * 2, size * 2);
          this.ctx.restore();
        }
      }
      this.lastUpdate = thisUpdate;
      this.requestAnimFrame(this.loop);
    },
  },
};
</script>

<style scoped lang="scss">
.particle-wrap {
  position: relative;
  margin: 0 auto;
}
</style>
