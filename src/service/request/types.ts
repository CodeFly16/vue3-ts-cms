import type { AxiosRequestConfig, AxiosResponse } from 'axios';

export interface LYFRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorCatch?: (error: any) => any;
  responseInterceptor?: (res: T) => T;
  responsetInterceptorCatch?: (error: any) => any;
}

export interface LYFRequestConfig<T = AxiosResponse>
  extends AxiosRequestConfig {
  interceptors?: LYFRequestInterceptors<T>;
  showLoading?: boolean;
}
