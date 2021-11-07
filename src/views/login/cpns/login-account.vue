<template>
  <div class="login-account">
    <el-form label-width="60px" ref="formRef" :rules="rules" :model="account">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input show-password v-model="account.password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import { useStore } from 'vuex';
import { rules } from '../config/account-config';
import localCache from '@/utils/cache';
import { ElForm } from 'element-plus';

export default defineComponent({
  setup() {
    const account = reactive({
      name: localCache.getCache('name') ?? '',
      password: localCache.getCache('password') ?? ''
    });
    const store = useStore();

    const formRef = ref<InstanceType<typeof ElForm>>();

    const LoginAction = (isKeepPassword: boolean) => {
      formRef.value?.validate((valid) => {
        if (valid) {
          if (isKeepPassword) {
            localCache.setCache('name', account.name);
            localCache.setCache('password', account.password);
          } else {
            localCache.deleteCache('name');
            localCache.deleteCache('password');
          }

          store.dispatch('login/accountLoginAction', { ...account });
        }
      });
    };
    return {
      account,
      rules,
      formRef,
      LoginAction
    };
  }
});
</script>

<style scoped lang="less"></style>
