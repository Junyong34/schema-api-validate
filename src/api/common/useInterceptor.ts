import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export interface RequestInterceptor {
  onFulfilled?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  onRejected?: (error: any) => Promise<never>;
}

export interface ResponseInterceptor {
  onFulfilled?: (response: AxiosResponse) => AxiosResponse;
  onRejected?: (error: any) => Promise<never>;
}

export interface AxiosInterceptor {
  request?: RequestInterceptor;
  response?: ResponseInterceptor;
}

export const setupInterceptor = (
  instance: AxiosInstance,
  interceptor: AxiosInterceptor
) => {
  const { request, response } = interceptor;
  if (!instance) return;

  if (request) {
    const { onFulfilled, onRejected } = request;
    instance.interceptors.request.use(onFulfilled, onRejected);
  }

  if (response) {
    const { onFulfilled, onRejected } = response;
    instance.interceptors.response.use(onFulfilled, onRejected);
  }
};
