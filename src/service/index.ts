import LyfRequest from './request/index';
import { BASE_URL, TIME_OUT } from './request/config';
const lyfRequest = new LyfRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      const token = '';
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    responseInterceptor: (config) => {
      return config.data;
    }
  }
});
export default lyfRequest;
