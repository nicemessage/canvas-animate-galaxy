<template>
  <div class="home" style="border: 1px solid red">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  mounted() {
    console.log(document.documentElement.clientHeight,'height');
    window.parent.postMessage(document.documentElement.scrollHeight,'*')
  }
}
</script>
