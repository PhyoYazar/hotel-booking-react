import {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import { getToken } from "../services/auth";

const token = getToken();

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
  // console.info(`[request] => [${JSON.stringify(config)}]`);

  config.baseURL = import.meta.env.VITE_REACT_API_ENDPOINT;
  config.headers["Content-Type"] = "application/json";
  config.headers["Accept"] = "application/json";
  config.headers["Authorization"] = `Bearer ${token ? token : ""}`;

  return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  // console.error(`[request error] => [${JSON.stringify(error)}]`);
  console.log("error => ", error);

  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  // console.info(`[response] => [${JSON.stringify(response)}]`);

  return response;
};

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
  // console.error(`[response error] [${JSON.stringify(error)}]`);
  console.log("error => ", error);

  return Promise.reject(error);
};

export default function setupInterceptorsTo(
  axiosInstance: AxiosInstance
): AxiosInstance {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
}
