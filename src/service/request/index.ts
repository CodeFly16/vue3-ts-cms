import axios from 'axios';
import type { AxiosInstance } from 'axios';
import type { LYFRequestConfig } from './types';

import { ElLoading, ILoadingInstance } from 'element-plus';

const DEAFULT_LOADING = true;
export default class LYFRequest {
  private instance: AxiosInstance;
  private readonly options: LYFRequestConfig;
  private showLoading: boolean;
  private loading?: ILoadingInstance;

  constructor(options: LYFRequestConfig) {
    this.options = options;
    this.showLoading = options.showLoading ?? DEAFULT_LOADING;
    this.instance = axios.create(options);

    //每个实例的拦截器
    this.instance.interceptors.request.use(
      options.interceptors?.requestInterceptor,
      options.interceptors?.requestInterceptorCatch
    );
    this.instance.interceptors.response.use(
      options.interceptors?.responseInterceptor,
      options.interceptors?.responsetInterceptorCatch
    );
    //全局拦截器
    this.instance.interceptors.request.use(
      (config) => {
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '正在请求...',
            background: 'rgba(0,0,0,0.5)'
          });
        }
        return config;
      },
      (error) => {
        if (error.response.status !== 200) {
          throw error('请求出错');
        }
      }
    );
    this.instance.interceptors.response.use(
      (config) => {
        this.loading?.close();
        const { data } = config.data;
        if (data.returnCode === '-1001') {
          console.log('Error');
        } else {
          return data;
        }
      },
      (error) => {
        if (error.response.status !== 200) {
          this.loading?.close();
          throw error('请求出错');
        }
      }
    );
  }
  request<T>(config: LYFRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 1.单个请求对请求config的处理
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config);
      }

      // 2.判断是否需要显示loading
      if (config.showLoading === false) {
        this.showLoading = config.showLoading;
      }
      this.instance
        // 根据request的类型，res的需要
        .request<any, T>(config)
        .then((res) => {
          // 1.单个请求对数据的处理
          if (config.interceptors?.responseInterceptor) {
            // 此处的res需要是一个泛型或者any
            res = config.interceptors.responseInterceptor(res);
          }
          // 2.将showLoading设置true, 这样不会影响下一个请求
          this.showLoading = DEAFULT_LOADING;

          // 3.将结果resolve返回出去
          resolve(res);
        })
        .catch((err) => {
          // 将showLoading设置true, 这样不会影响下一个请求
          this.showLoading = DEAFULT_LOADING;
          reject(err);
          return err;
        });
    });
  }
  get<T>(config: LYFRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' });
  }

  post<T>(config: LYFRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' });
  }

  delete<T>(config: LYFRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' });
  }

  patch<T>(config: LYFRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' });
  }
}
