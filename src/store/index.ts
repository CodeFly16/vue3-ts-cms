import { createStore, Store, useStore as useVuexStore } from 'vuex';

import login from './login/login';

import { getPageListData } from '@/service/main/system/system';

import { IRootState, IStoreType } from './types';

const store = createStore<IRootState>({
  state: () => {
    return {
      name: 'lyf',
      age: 18,
      entireDepartment: [],
      entireRole: [],
      entireMenu: []
    };
  },
  mutations: {
    changeEntireDepartment(state, list) {
      state.entireDepartment = list;
    },
    changeEntireRole(state, list) {
      state.entireRole = list;
    },
    changeEntireMenu(state, list) {
      state.entireMenu = list;
    }
  },
  actions: {
    async getInitialDataAction({ commit }) {
      // 1.请求部门和角色数据
      const departmentResult = await getPageListData('/department/list', {
        offset: 0,
        size: 1000
      });
      const { list: departmentList } = departmentResult.data;
      const roleResult = await getPageListData('/role/list', {
        offset: 0,
        size: 1000
      });
      const { list: roleList } = roleResult.data;
      const menuResult = await getPageListData('/menu/list', {});
      const { list: menuList } = menuResult.data;

      // 2.保存数据
      commit('changeEntireDepartment', departmentList);
      commit('changeEntireRole', roleList);
      commit('changeEntireMenu', menuList);
    }
  },
  modules: {
    login
  }
});

export function setupStore(): void {
  store.dispatch('login/loadLocalLogin');
}

export function useStore(): Store<IStoreType> {
  return useVuexStore();
}

export default store;
