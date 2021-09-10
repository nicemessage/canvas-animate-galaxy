<template>
  <div >
   工作台
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
