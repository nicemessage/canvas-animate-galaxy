<template>
  <div id="app">
    {{val1}}
    <br>
    {{val2}}
    <br>
    <router-link to="/blue/water">水</router-link>
    <span @click="$router.replace({path:'/blue/water'})">水2</span>

    <router-link to="/blue">blue</router-link>
    <router-link to="/about">about</router-link>
    <router-view></router-view>

    <el-menu  class="el-menu-demo"  :hasCollapseBtn="true"  :default-openeds="['2']" @select="handleSelect"  :router="true">
      <el-menu-item index="/center">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="/plat/moon">月亮</el-menu-item>
        <el-menu-item index="/plat/sun">太阳</el-menu-item>
        <el-submenu index="/plat/sky">
          <template slot="title">天空</template>
          <el-menu-item index="/plat/sky/bird">鸟</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="/info">消息中心</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import TablePanel from "./components/TablePanel/TablePanel";
import axios from 'axios'
import Cookies from 'js-cookie'

Cookies.set('foo', 'ni de shi jie~~')

export default {
  name: 'app',
  data() {
    return {
      generalAttrs: [],
      val:'',
      val1:top.location.href,
      val2:location.href
    }
  },
  created() {
    // fetch('http://localhost:3000').then(function(data) {
    //   return data.text();  // 通过调用text返回promise对象
    // }).then((data) =>{
    //   this.sth=data// 得到真正的结果
    // })
    axios.get('http://localhost:3000/api/getname').then(val1=>console.log(val1.data,'yyyyyyy'))
    console.log(top.location.href,'1');
    console.log(location.href,'2');
  },
  methods: {
    // 事实表、应用表结构设计左边字段拖拽事件
    dragStartHandler(e, item) {
      e.dataTransfer.setData('application/json', JSON.stringify(item));
    },
    drag(){
      console.log(999);
    },
    handleSelect(index,indexPath){
      console.log(index,indexPath);
    }
  },
  components: {
    TablePanel
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
