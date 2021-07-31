<template>
  <el-drawer
    class="drawer-wrap"
    ref="drawerRef"
    :title="drawerCfg.title"
    :visible.sync="drawerCfg.visible"
    :show-close="showClose"
    :direction="direction"
    :size="width"
    :before-close="beforeClose"
    :destroy-on-close="destroyOnClose"
    @close="closeCallback"
    @open="openCallback"
  >
    <div class="drawer-wrap-title" slot="title">
      <span class="title-centent">{{ drawerCfg.title }}</span>
    </div>
    <div class="drawer-wrap-body">
      <slot></slot>
    </div>
    <div v-show="isFooter" class="draw-footer">
      <div class="drawer-btns">
        <el-button
          class=""
          type="primary"
          size="small"
          :confirm="confirm"
          :loading="drawerCfg.loading"
          @click="handleConfirm"
          >{{ drawerCfg.loading ? '提交中...' : '提交' }}</el-button
        >
        <el-button class="" size="small" @click="handleCancel">取 消</el-button>
      </div>
    </div>
  </el-drawer>
</template>

<script>
export default {
  name: 'DrawerWrap',
  components: {},
  props: {
    drawerCfg: {
      type: Object,
      default: () => ({
        title: 'drawerTitle',
        visible: false,
        loading: false,
      }),
    },
    // 是否有提交按钮 默认有
    confirm: {
      type: Boolean,
      default: true,
    },
    // 是否有x  默认没有
    showClose: {
      type: Boolean,
      default: true,
    },
    // 展开方向 默认从右到左
    direction: {
      type: String,
      default: 'rtl',
    },
    // size 百分比宽度
    width: {
      type: String,
      default: '60%',
    },
    // 是否有页尾
    isFooter: {
      type: Boolean,
      default: true,
    },
    // 是否在关闭页面时销毁全部子元素
    destroyOnClose: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  computed: {},
  watch: {
    drawerCfg: {
      handler(val) {
        this.$emit('updata:drawerCfg', val);
      },
    },
  },
  methods: {
    // 打开之后
    openCallback() {
      this.$emit('openCallback');
    },
    // 提交
    handleConfirm() {
      this.$emit('handleConfirm');
    },
    // 取消
    handleCancel() {
      this.$emit('handleCancel');
    },
    // 关闭之前
    beforeClose(down) {
      this.$emit('beforeClose', down);
    },
    // 关闭之后
    closeCallback() {
      this.$emit('closeCallback');
    },
  },
};
</script>

<style lang="scss" scoped>
.drawer-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  ::v-deep.el-drawer__header {
    background: rgba(235, 238, 245, 1);
  }
  .drawer-wrap-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title-centent {
      color: #333;
      font-weight: 700;
      font-size: 18px;
    }
    .drawer-btns {
      .mini-btn--supmini {
        padding: 7px 14px;
      }
    }
  }
  ::v-deep.el-drawer__body {
    display: flex;
    flex-direction: column;
    .drawer-wrap-body {
      flex: 1;
      overflow-y: auto;
      overflow-x: hidden;
      padding: 20px;
    }
    .draw-footer {
      display: flex;
      align-items: center;
      flex-shrink: 0;
      width: 100%;
      height: 60px;
      padding-left: 20px;
      border-top: 1px solid #d3dbe6;
    }
  }
}
</style>
