<template>
  <div class="about">
    <h1>This is an about page</h1>

    5555
    <hr>
    <button @click="handleAbout">about</button>
    <button @click="handleBlue">blue</button>

    <router-view></router-view>
    <VirtualList></VirtualList>
  </div>
</template>
<script>
  import VirtualList from "./VirtualList";
  import VueRouter from "vue-router";
  export default {
    data() {
      return {
        list:[],
        id:this.$route.params.id
      };
    },
    mounted() {

    },
    router:new VueRouter({
      mode: "abstract",
      base: "/",
      routes:[
        {
          path: '/blue',
          name: 'Blue',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ '@/views/Center.vue')
        },
        {
          path: '/about',
          name: 'About',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ '@/views/Red.vue')
        },
      ],
    }),
    methods: {
        handle(){

          let iframe=document.getElementById('iframe')
          // iframe.height=iframe.contentDocument.documentElement.scrollHeight

          var iwindow = iframe.contentWindow;
          var idoc = iwindow.document;
          iframe.height = idoc.documentElement.scrollHeight;
        },
      handleAbout(){
        this.$router.push('/about')
      },
      handleBlue(){
        this.$router.push('/blue')
      },

    },
    components:{
      VirtualList
    }
  }
</script>
<style>
  .main{
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
 .left{
   background: red;
   height: 50px;
 }
  .right{
    background: black;
    height: 50px;
  }
</style>
