import { useEffect } from "react";
import { AppDispatch, RootState, store } from "./store";
import { getFromLocalStorage, setToLocalStorage } from "./local-storage";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { initialResumeState, setResume } from "./resumeSlice";
import { Resume } from "./types";
import { Settings, initialSettings, setSettings } from "./settingsSlice";
import { deepMerge } from "../deep-merge";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useSaveStateToLocalStorageOnChange = () => {
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setToLocalStorage(store.getState());
    });
    return unsubscribe;
  }, []);
};

export const useSetInitialStore = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const state = getFromLocalStorage();
    if (!state) return;
    if (state.resume) {
      const mergedResumeState = deepMerge(
        initialResumeState,
        state.resume
      ) as Resume;
      dispatch(setResume(mergedResumeState));
    }
    if (state.settings) {
      const mergedSettingsState = deepMerge(
        initialSettings,
        state.settings
      ) as Settings;
      dispatch(setSettings(mergedSettingsState));
    }
  }, []);
};
