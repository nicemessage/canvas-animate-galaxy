<template>
  <div >
    <div > {{name}}</div>
    <div > {{myname}}</div>


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
