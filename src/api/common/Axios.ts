import axios, { AxiosRequestConfig } from "axios";
import axiosDefaultConfig from "./BaseInfo";
import { snakeKeys } from "js-convert-case";
import qs from "qs";

export const createAxiosInstance = (config: AxiosRequestConfig) => {
  const { headers } = config;
  return axios.create({
    ...config,
    headers: {
      ...(headers ? headers : {}),
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    paramsSerializer: (params: any) => qs.stringify(snakeKeys(params)),
  });
};

export const axiosInstance = createAxiosInstance(axiosDefaultConfig);
