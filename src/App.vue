<template>

        <div id="app">
          <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
            <el-radio-button :label="false">展开</el-radio-button>
            <el-radio-button :label="true">收起</el-radio-button>
          </el-radio-group>
            <el-menu
                    class="el-menu-vertical-demo"
                    router
                    :collapse="isCollapse"

            >
              <MenuList :items="menuData"></MenuList>

            </el-menu>

        </div>






</template>

<script>
import TablePanel from "./components/TablePanel/TablePanel";
import axios from 'axios'
import Cookies from 'js-cookie'
import MenuList from "./components/MenuList";


export default {
  name: 'app',
  data() {
    return {
      menuData: [
        {
          "funcName": "项目管理",
          "funcType": "1",
          "funcCode": null,
          "parentFuncCode": null,
          "funcPath": null,
          "funcLv": null,
          "isShow": null,
          "funcUrl": "/project",
          "funcLogo": "#iconicon-test53",
          "childElementList": null,
          "openType": null
        },
        {
          "funcName": "数据源管理",
          "funcType": "1",
          "funcCode": null,
          "parentFuncCode": null,
          "funcPath": null,
          "funcLv": null,
          "isShow": null,
          "funcUrl": "",
          "funcLogo": "#iconicon-test56",
          "childElementList": [
            {
              "funcName": "MQ管理",
              "funcType": "1",
              "funcCode": null,
              "parentFuncCode": null,
              "funcPath": null,
              "funcLv": null,
              "isShow": null,
              "funcUrl": "/source/data/list",
              "funcLogo": "",
              "childElementList": null,
              "openType": null
            },
            {
              "funcName": "虚拟表管理",
              "funcType": "1",
              "funcCode": null,
              "parentFuncCode": null,
              "funcPath": null,
              "funcLv": null,
              "isShow": null,
              "funcUrl": "/source/table/list",
              "funcLogo": "",
              "childElementList": null,
              "openType": null
            }
          ],
          "openType": null
        },
        {
          "funcName": "系统管理",
          "funcType": "1",
          "funcCode": null,
          "parentFuncCode": null,
          "funcPath": null,
          "funcLv": null,
          "isShow": null,
          "funcUrl": "",
          "funcLogo": "#iconicon-test65",
          "childElementList": [
            {
              "funcName": "平台参数",
              "funcType": "1",
              "funcCode": null,
              "parentFuncCode": null,
              "funcPath": null,
              "funcLv": null,
              "isShow": null,
              "funcUrl": "/system/platform",
              "funcLogo": "",
              "childElementList": null,
              "openType": null
            },
            {
              "funcName": "操作日志",
              "funcType": "1",
              "funcCode": null,
              "parentFuncCode": null,
              "funcPath": null,
              "funcLv": null,
              "isShow": null,
              "funcUrl": "/operate",
              "funcLogo": "",
              "childElementList": null,
              "openType": null
            },
            {
              "funcName": "SQL编辑器",
              "funcType": "1",
              "funcCode": null,
              "parentFuncCode": null,
              "funcPath": null,
              "funcLv": null,
              "isShow": null,
              "funcUrl": "",
              "funcLogo": "#iconicon-test65",
              "childElementList": [
                {
                  "funcName": "函数管理",
                  "funcType": "1",
                  "funcCode": null,
                  "parentFuncCode": null,
                  "funcPath": null,
                  "funcLv": null,
                  "isShow": null,
                  "funcUrl": "/sql/function",
                  "funcLogo": "",
                  "childElementList": null,
                  "openType": null
                },
                {
                  "funcName": "关键字管理",
                  "funcType": "1",
                  "funcCode": null,
                  "parentFuncCode": null,
                  "funcPath": null,
                  "funcLv": null,
                  "isShow": null,
                  "funcUrl": "/sql/keyword",
                  "funcLogo": "",
                  "childElementList": null,
                  "openType": null
                }
              ],
              "openType": null
            },
            {
              "funcName": "用户管理",
              "funcType": "1",
              "funcCode": null,
              "parentFuncCode": null,
              "funcPath": null,
              "funcLv": null,
              "isShow": null,
              "funcUrl": "/user",
              "funcLogo": "",
              "childElementList": null,
              "openType": null
            }
          ]
        }],
      isCollapse:true
    }
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
      console.log(index,indexPath,'xxxx');
    }
  },
  components: {
    TablePanel,
    MenuList
  }
}
</script>

<style>

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

</style>
