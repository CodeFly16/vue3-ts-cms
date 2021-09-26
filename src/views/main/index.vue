<template>
  <div>首页</div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance } from 'vue';

export default defineComponent({
  setup() {
    console.log(getCurrentInstance()?.appContext.config.globalProperties.$http);
    return {};
  }
});
</script>

<style scoped></style>
