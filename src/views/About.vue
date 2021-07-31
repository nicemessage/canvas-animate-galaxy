<template>
  <div class="about">
    <h1>This is an about page</h1>
    5555
    <MyBtn>你的名字</MyBtn>

  </div>
</template>
<script>
  import MyBtn from "./MyBtn";
  export default {
    data() {
      return {
        list:[],
        id:this.$route.params.id
      };
    },
    mounted() {
      let iframe=document.getElementById('iframe')
      window.addEventListener('message',function (e) {
        iframe.height=e.data
      })
    },
    methods: {
        handle(){

          let iframe=document.getElementById('iframe')
          // iframe.height=iframe.contentDocument.documentElement.scrollHeight

          var iwindow = iframe.contentWindow;
          var idoc = iwindow.document;
          iframe.height = idoc.documentElement.scrollHeight;
        }
    },
    components:{
      MyBtn
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
