import type { AxiosRequestConfig, AxiosResponse } from 'axios';

export interface LyfRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorCatch?: (error: any) => any;
  responseInterceptor?: (res: T) => T;
  responsetInterceptorCatch?: (error: any) => any;
}

export interface LyfRequestConfig<T = AxiosResponse>
  extends AxiosRequestConfig {
  interceptors?: LyfRequestInterceptors<T>;
  showLoading?: boolean;
}
