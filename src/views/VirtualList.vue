<!--
同时渲染大量数据会造成页面卡顿  解决办法：虚拟列表 -> 按需渲染
模拟滚动
我们这里的滚动列表不是真正的滚动列表，而是根据滚动的位置重新渲染可见的列表元素。当这个操作时间跨度足够小时，它看起来就像是在滚动一样。
这有点像我们在画帧动画一样，每次用户滑动造成偏移量改变，我们都会根据这个偏移量去渲染新的列表元素。就像是在一帧一帧的播放动画一样，当两帧间隔足够小时，动画看起来就会很流畅，就像是在滚动一样。


占位高度  list.length * itemHeight
偏移量   scrollTop - scrollTop % itemHeight   （截取scrollTop相对于itemHeight的整数倍）
可视数量  Math.ceil(clientHeight/itemHeight)
开始索引  Math.floor(scrollTop/itemHeight)
结束索引  开始索引+可视数量
-->
<template>
    <div ref="list" class="infinite-list-container" @scroll="scrollEvent()">
        <router-link to="/blue">blue</router-link>
        <router-link to="/about">about</router-link>
        <div
                class="infinite-list-phantom"
                :style="{ height: listHeight + 'px' }"
        ></div>
        <div class="infinite-list" :style="{ transform: getTransform }">
            <div
                    ref="items"
                    class="infinite-list-item"
                    v-for="item in visibleData"
                    :key="item.id"
                    :style="{ height: itemHeight + 'px', lineHeight: itemHeight + 'px' }"
            >
                {{ item.value }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "VirtualList",
        props: {
            //所有列表数据
            listData: {
                type: Array,
                default: () => [],
            },
            //每项高度
            itemHeight: {
                type: Number,
                default: 80,
            },
        },
        computed: {
            //列表总高度
            listHeight() {
                return this.listData.length * this.itemHeight;
            },
            //可视数量
            visibleCount() {
                return Math.ceil(this.screenHeight / this.itemHeight);
            },
            //偏移量对应的style
            getTransform() {
                return `translate3d(0,${this.offset}px,0)`;
            },
            //获取真实显示列表数据
            visibleData() {
                return this.listData.slice(this.start, this.end);
            },
        },
        mounted() {
            this.screenHeight = this.$el.clientHeight;
            this.start = 0;
            this.end = this.start + this.visibleCount;
        },
        data() {
            return {
                //可视区域高度
                screenHeight: "",
                //偏移量
                offset: "",
                //起始索引
                start: "",
                //结束索引
                end: "",
            };
        },
        methods: {
            scrollEvent() {
                //当前滚动位置
                let scrollTop = this.$refs.list.scrollTop;
                //此时的开始索引
                this.start = Math.floor(scrollTop / this.itemHeight);
                //此时的结束索引
                this.end = this.start + this.visibleCount;
                //此时的偏移量
                this.offset = scrollTop - (scrollTop % this.itemHeight);
            },
        },
    };
</script>

<style scoped>
    .infinite-list-container {
        border: 1px solid red;
        height: 500px;
        overflow: scroll;
        position: relative;
        box-sizing: content-box;
        margin-top: 100px;
    }

    .infinite-list {
        left: 0;
        width: 100%;
        top: 0;
        position: absolute;
        text-align: center;
    }

    .infinite-list-item {
        padding: 10px;
        color: #555;
        box-sizing: border-box;
        border-bottom: 1px solid #999;
    }
</style>
