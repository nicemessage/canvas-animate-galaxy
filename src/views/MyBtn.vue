<template>
    <el-button v-bind="$attrs"></el-button>
</template>

<script>
    export default {
        name: "MyBtn",
        // inheritAttrs:false,
        props:['round']
    }
</script>

<style scoped>

</style>
