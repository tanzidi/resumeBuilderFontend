export const LOCAL_STORAGE_FOR_RESUME_STATE = "resume_state";

export const authKey = "accessToken";

const config = {
  apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
  baseUrl: process.env.NEXT_PUBLIC_URL,
  versionOneApiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL + "/api/v1",
  filePathBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL + "/file/",
};

export default config;
