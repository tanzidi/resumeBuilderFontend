import config, { authKey } from "../constant";
import { axiosInstance } from "./axios/axiosInstance";
import { getFromLocalStorage } from "./local-storage";

export const isLoggedIn = () => {
  const authToken = getFromLocalStorage(authKey);
  return !!authToken;
};

export const getNewAccessToken = async () => {
  return await axiosInstance({
    url: `${config.versionOneApiBaseUrl}/auth/refresh-token`,
    method: "GET",
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
  });
};
