<template>
   <div >
       1 <br>
       <button id="button">button</button><br>
       <ul id="container"></ul>
   </div>

</template>

<script>

    export default {
        data() {
            return {
            }
        },
        mounted() {
            document.getElementById('button').addEventListener('click',function(){
                // 记录任务开始时间
                let now = Date.now();
                // 插入一万条数据
                const total = 10000;
                // 获取容器
                let ul = document.getElementById('container');
                // 将数据插入容器中
                for (let i = 0; i < total; i++) {
                    let li = document.createElement('li');
                    li.innerText = ~~(Math.random() * total)
                    ul.appendChild(li);
                }
                console.log('JS运行时间：',Date.now() - now);
                setTimeout(()=>{
                    console.log('总运行时间：',Date.now() - now);
                },0)

                // print JS运行时间：38
                // print 总运行时间：957
            })


        },
        methods: {


        },
        watch: {

        },
    }
</script>
<style>
    .dialog{
        width: 100px;
        height: 200px;
        background: red;
        position: fixed;
        left: 50%;
        top: 30%;
    }
    #container{
        height: 200px;
        overflow: scroll;
    }
</style>
