import axios from "axios";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
  setToLocalStorage,
} from "../local-storage";
import { IGenericErrorResponse, ResponseSuccessType } from "@/app/types/common";
import { getNewAccessToken } from "../auth.helpers";
import { authKey } from "@/app/constant";

const axiosInstance = axios.create();
axiosInstance.defaults.headers.post["Content-Type"] = "application/json";
axiosInstance.defaults.headers["Accept"] = "application/json";
axiosInstance.defaults.timeout = 60000;

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    if (config.headers.Authorization) {
      return config;
    } else {
      const accessToken = getFromLocalStorage(authKey);
      if (accessToken) {
        config.headers.Authorization = accessToken;
      }
      return config;
    }
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  //@ts-ignore
  function (response) {
    const responseObject: ResponseSuccessType = {
      data: response?.data?.data,
      meta: response?.data?.meta,
      message: response?.data?.message,
      statusCode: response?.data?.statusCode,
      success: response?.data?.success,
    };
    return responseObject;
  },
  async function (error) {
    const config = error?.config;
    if (error?.response?.status === 403 && !config?.sent) {
      config.sent = true;
      const res = await getNewAccessToken();
      if (!res.data) {
        removeFromLocalStorage(authKey);
      } else {
        const accessToken = res?.data?.accessToken;
        config.headers["Authorization"] = accessToken;
        setToLocalStorage(authKey, accessToken);
        return axiosInstance(config);
      }
    } else {
      const responseObject: IGenericErrorResponse = {
        statusCode: error?.response?.data?.statusCode || 500,
        message: error?.response?.data?.message || "Api is not connected.",
        errorMessages: error?.response?.data?.message,
        success: error?.response?.data?.success,
      };
      return responseObject;
    }
  }
);
export { axiosInstance };
