<template>
  <fragment>
    <template v-for="item in items">

      <el-submenu  v-if="item.childElementList"   :index="item.funcName">
        <template slot="title">
          <i class="el-icon-menu"></i>
         <span slot="title">{{ item.funcName }}</span>
        </template>
        <MenuList :items="item.childElementList"></MenuList>
      </el-submenu>


      <el-menu-item
              v-else
              :index="item.funcName"
      >
        <i class="el-icon-menu"></i>
        <span slot="title">{{ item.funcName }}</span>
      </el-menu-item>
    </template>
  </fragment>

</template>

<script>
export default {
  name: 'MenuList',
  props: ['items']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
