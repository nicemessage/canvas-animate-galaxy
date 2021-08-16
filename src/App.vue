<template>
  <div id="app">
    <div>
      <div id="container" >
        <ul><li
                class="ef-node-menu-ul border-b"
                draggable="true"
                @dragstart="dragStartHandler($event, {fieldCnName:'英雄',fieldEnName:'hero'})"
        >
          <div class="oneMenuChild">
            <p>英雄</p>
            <p>hero</p>
          </div>
        </li></ul>
        <TablePanel type="DIMENSION" title="常规字段" :list="generalAttrs"></TablePanel>
      </div>
    </div>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MyBtn from "@/views/MyBtn";
import axios from 'axios'
import * as monaco from 'monaco-editor';
import TablePanel from "./components/TablePanel/TablePanel";

export default {
  name: 'app',
  data() {
    return {
      generalAttrs: []
    }
  },
  created() {
    axios.get('http://localhost:9000/happy').then(function (res) {
      console.log(res.data);
    })
  },
  mounted() {
    this.startIntro();
  },
  methods: {
    startIntro() {
      var intro = introJs();
      intro.setOptions({
        nextLabel: "下一步",
        skipLabel: "跳 过",
        doneLabel: "结束引导",
        steps: [
          {
            element: "#v-step3",
            intro:
                    "单击“上传”按钮，可上传单张有描述的图片素材，同时也支持“批量上传”多张图片素材。",
            position: "right"
          },
          {
            element: "#v-step2",
            intro:
                    "“鼠标拖动”素材到场景中，可调整素材在场景中的位置、大小、角度。",
            position: "right"
          },
          {
            element: "#v-step1",
            intro:
                    "还可以通过选择色调模板，改变整个场景（不包括图片素材）的色调。",
            position: "right"
          },
          {
            element: "#v-step4",
            intro:
                    "这里还有常用的素材操作指南：素材的选择、大小、位置、角度、删除。",
            position: "right"
          },
          {
            element: "#v-step6",
            intro:
                    "单击“设置音乐”按钮，打开音乐设置窗口，选择或上传MP3背景音乐，为场景添加背景音乐",
            position: "bottom"
          },
          {
            element: "#v-step7",
            intro:
                    "设置好场景的素材后，单击“保存”按钮，就可以分享展厅到朋友圈/好友。",
            position: "bottom"
          }
        ]
      });

      var $this = this;
      intro.start().onexit(function() {
        // 点击结束引导 变状态
        if($this.isIframe){
          window.parent.postMessage({type: 'isGuide', data: false}, '*')
        }

      });
    }
  },

  components: {
    HelloWorld,
    MyBtn,
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
#container{
  height: 900px;
}
</style>
