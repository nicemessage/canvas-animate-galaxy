<!--
不定高度
-->
<template>
    <div class="con" @wheel="handleW">
         <div  class="infinite-list" :style="{marginTop:-offset+'px'}" >
             <div class="infinite-list-item" v-for="(item,index) in visibleData">{{item.value}}</div>
         </div>
    </div>
</template>

<script>
    export default {
        name:'VirtualList',
        props: {
            //所有列表数据
            listData:{
                type:Array,
                default:()=>[]
            },
        },
        computed:{
        },
        mounted() {
            this.initShowContactsList();
        },
        data() {
            return {
                startIndex:0,
                visibleData:[],
                scrollTop:0,
                offset:''
            };
        },
        methods: {
            initShowContactsList(){
                this.visibleData = this.listData.slice(0, 10);
            },
            findIndexOverHeight(list, offset) {
                let currentHeight = 0
                for (let i = 0; i < list.length; i++) {
                    const { height } = list[i]
                    currentHeight += height

                    if (currentHeight > offset) {
                        return i
                    }
                }

                return list.length - 1
            },
            sumHeight(list, start = 0, end = list.length) {
                let height = 0
                for (let i = start; i < end; i++) {
                    height += list[i].height
                }

                return height
            },

            handleW(e) {
                e.preventDefault();
                // 滚动高度
                this.scrollTop += e.deltaY;


                if (this.scrollTop < 0){
                    this.scrollTop = 0;
                }
                if (this.scrollTop >this.sumHeight(this.listData,0,this.listData.length)-500){
                    this.scrollTop = this.sumHeight(this.listData,0,this.listData.length)-500;
                }
                let startIndex =this.findIndexOverHeight(this.listData,this.scrollTop)
                let endIndex =this.findIndexOverHeight(this.listData,this.scrollTop+500)

                this.offset= this.scrollTop-this.sumHeight(this.listData,0,startIndex)
                console.log(this.offset,'jjjjj');
                this.visibleData = this.listData.slice(startIndex, endIndex+1);
            }
        }
    };
</script>


<style scoped>
.con{
    overflow: hidden;
    height: 500px;
}
    .infinite-list {
        text-align: center;
        border: 1px solid red;
    }

    .infinite-list-item {
        height: 50px;
        line-height: 50px;
        color: #555;
        box-sizing: border-box;
        border-bottom: 1px solid #999;
    }
</style>
