<template>
  <div @click="$router.push('/blue')">
    流啊流啊流~~~

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
