<template>
  <div >
    我是water~~~
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    props: ['name'],
    created() {

    },
    mounted() {

    },
    data() {
      return {
        myname:this.name,
      };
    },
    methods: {

    },
    computed:{

    },
    watch: {

    },

  }
</script>
