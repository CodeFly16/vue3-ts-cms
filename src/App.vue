<template>
  <el-config-provider :locale="zhCn">
    <router-view></router-view>
  </el-config-provider>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import zhCn from 'element-plus/lib/locale/lang/zh-cn';

export default defineComponent({
  name: 'App',
  props: {
    name: {
      type: String
    }
  },
  setup() {
    return {
      zhCn
    };
  }
});
</script>

<style lang="less" scoped>
.app {
  height: 100%;
}
</style>
