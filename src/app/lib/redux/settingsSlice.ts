import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface Settings {
  themeColor: string;
  fontFamily: string;
  fontSize: string;
  documentSize: string;
  formToShow: {
    workExperiences: boolean;
    educations: boolean;
    projects: boolean;
    skills: boolean;
    customs: boolean;
  };
  formToHeading: {
    workExperiences: string;
    educations: string;
    projects: string;
    skills: string;
    customs: string;
  };
  formsOrder: ShowForm[];
  showBulletPoints: {
    workExperiences: boolean;
    educations: boolean;
    projects: boolean;
    skills: boolean;
    customs: boolean;
  };
}

export type ShowForm = keyof Settings["formToShow"];

export type FormWithBulletPoints = keyof Settings["showBulletPoints"];

export type GeneralSetting = Exclude<
  keyof Settings,
  "formToShow" | "formToHeading" | "formsOrder" | "showBulletPoints"
>;

export const DEFAULT_THEME_COLOR = "#781D54";
export const DEFAULT_FONT_FAMILY = "Roboto";
export const DEFAULT_FONT_SIZE = "11";
export const DEFAULT_FONT_COLOR = "#781D54";

export const initialSettings: Settings = {
  themeColor: DEFAULT_THEME_COLOR,
  fontFamily: DEFAULT_FONT_FAMILY,
  fontSize: DEFAULT_FONT_SIZE,
  documentSize: "Letter",
  formToShow: {
    workExperiences: false,
    educations: false,
    projects: false,
    skills: false,
    customs: false,
  },
  formToHeading: {
    workExperiences: "WORK EXPERIENCE",
    educations: "EDUCATION",
    projects: "PROJECT",
    skills: "SKILLS",
    customs: "CUSTOM SECTION",
  },
  formsOrder: [
    "educations",
    "workExperiences",
    "projects",
    "skills",
    "customs",
  ],
  showBulletPoints: {
    workExperiences: false,
    educations: false,
    projects: false,
    skills: false,
    customs: false,
  },
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState: initialSettings,
  reducers: {
    changeSettings: (
      state,
      action: PayloadAction<{ field: GeneralSetting; value: string }>
    ) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    changeShowForm: (
      state,
      action: PayloadAction<{ field: ShowForm; value: boolean }>
    ) => {
      const { field, value } = action.payload;
      state.formToShow[field] = value;
    },
    changeFormHeading: (
      state,
      action: PayloadAction<{ field: ShowForm; value: string }>
    ) => {
      const { field, value } = action.payload;
      state.formToHeading[field] = value;
    },
    changeFormOrder: (
      state,
      action: PayloadAction<{ form: ShowForm; type: "up" | "down" }>
    ) => {
      const { form, type } = action.payload;
      const lastIdx = state.formsOrder.length - 1;
      const pos = state.formsOrder.indexOf(form);
      const newPos = type === "up" ? pos - 1 : pos + 1;
      const swapFormOrder = (idx1: number, idx2: number) => {
        const temp = state.formsOrder[idx1];
        state.formsOrder[idx1] = state.formsOrder[idx2];
        state.formsOrder[idx2] = temp;
      };
      if (newPos >= 0 && newPos <= lastIdx) {
        swapFormOrder(pos, newPos);
      }
    },
    changeShowBulletPoints: (
      state,
      action: PayloadAction<{ field: FormWithBulletPoints; value: boolean }>
    ) => {
      const { field, value } = action.payload;
      state["showBulletPoints"][field] = value;
    },
    setSettings: (state, action: PayloadAction<Settings>) => {
      return action.payload;
    },
  },
});

export const {
  changeSettings,
  changeShowForm,
  changeFormHeading,
  changeFormOrder,
  changeShowBulletPoints,
  setSettings,
} = settingsSlice.actions;

export const selectSettings = (state: RootState) => state.settings;
export const selectThemeColor = (state: RootState) => state.settings.themeColor;

export const selectFormToShow = (state: RootState) => state.settings.formToShow;
export const selectShowByForm = (form: ShowForm) => (state: RootState) =>
  state.settings.formToShow[form];

export const selectFormToHeading = (state: RootState) =>
  state.settings.formToHeading;
export const selectHeadingByForm = (form: ShowForm) => (state: RootState) =>
  state.settings.formToHeading[form];

export const selectFormsOrder = (state: RootState) => state.settings.formsOrder;
export const selectIsFirstForm = (form: ShowForm) => (state: RootState) =>
  state.settings.formsOrder[0] === form;
export const selectIsLastForm = (form: ShowForm) => (state: RootState) =>
  state.settings.formsOrder[state.settings.formsOrder.length - 1] === form;

export const selectShowBulletPoints =
  (form: FormWithBulletPoints) => (state: RootState) =>
    state.settings.showBulletPoints[form];

export default settingsSlice.reducer;
