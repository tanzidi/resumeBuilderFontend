import { LOCAL_STORAGE_FOR_RESUME_STATE } from "@/app/constant";
import { RootState } from "./store";

export const setToLocalStorage = (state: RootState) => {
  try {
    const stringifiedState = JSON.stringify(state);
    localStorage.setItem(LOCAL_STORAGE_FOR_RESUME_STATE, stringifiedState);
  } catch (e) {}
};

export const getFromLocalStorage = () => {
  try {
    const stringifiedState = localStorage.getItem(
      LOCAL_STORAGE_FOR_RESUME_STATE
    );
    if (!stringifiedState) return undefined;
    return JSON.parse(stringifiedState);
  } catch (e) {
    return undefined;
  }
};

export const getHasUsedAppBefore = () => Boolean(getFromLocalStorage());
