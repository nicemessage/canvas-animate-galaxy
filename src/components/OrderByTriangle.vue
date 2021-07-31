<template>
    <div class="triangle-container">
       <span class="arrow-up" :class="{ active: value===0 }" @click="handleClick(0)"></span>
        <span class="arrow-down" :class="{ active: value===1 }" @click="handleClick(1)"></span>
    </div>
</template>

<script>
    export default {
        name: "OrderByTriangle",
        props:['value'],
        data() {
            return {
            }
        },
        methods: {
            handleClick(val) {
                this.$emit('input',val)
            }
        },

    }
</script>

<style lang="scss">
.triangle-container{
    display: inline-block;
    width: 8px;
    height: 10px;
    position: relative;
    cursor: pointer;
    span{
        transition: .3s;
    }
   .arrow-up{
       content: '';
       position: absolute;
       left: 0;
       top: -1px;
       border-bottom: 6px solid rgba(221,223,230,1);
       border-left: 5px solid transparent!important;
       border-right: 5px solid transparent!important;
   }
    .arrow-down{
        content: '';
        position: absolute;
        left: 0;
        top: 7px;
        border-top: 6px solid rgba(221,223,230,1);
        border-left: 5px solid transparent!important;
        border-right: 5px solid transparent!important;
    }
    .active{
        border-color: rgba(82,83,84,1);;
    }
}
</style>
