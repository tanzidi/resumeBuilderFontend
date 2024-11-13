import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import {
  FeaturedSkill,
  Resume,
  ResumeEducation,
  PersonalSection,
  ResumeProject,
  ResumeSkills,
  ResumeWorkExperience,
  ResumeCustom,
  AboutSection,
} from "./types";
import { ShowForm } from "./settingsSlice";
import { RootState } from "./store";

export const initialPersonalSection: PersonalSection = {
  name: "",
  headline: "",
  email: "",
  phone: "",
  address: "",
  postCode: "",
  city: "",
  linkedIn: "",
  url: "",
  customField: "",
};

export const initialAboutSection: AboutSection = { about: "" };

export const initialWorkExperience: ResumeWorkExperience = {
  position: "",
  company: "",
  city: "",
  startDate: "",
  endDate: "",
  descriptions: [],
};

export const initialEducation: ResumeEducation = {
  education: "",
  institution: "",
  startDate: "",
  endDate: "",
  city: "",
  gpa: "",
  descriptions: [],
};

export const initialProject: ResumeProject = {
  project: "",
  startDate: "",
  endDate: "",
  descriptions: [],
};

export const initialFeaturedSkill: FeaturedSkill = { skill: "", rating: 4 };

export const initialFeaturedSkills: FeaturedSkill[] = Array(6).fill({
  ...initialFeaturedSkill,
});

export const initialSkills: ResumeSkills = {
  featuredSkills: initialFeaturedSkills,
  descriptions: [],
};

export const initialCustom: ResumeCustom = {
  title: "",
  details: "",
  descriptions: [],
};

export const initialResumeState: Resume = {
  profile: initialPersonalSection,
  about: initialAboutSection,
  educations: [initialEducation],
  workExperiences: [initialWorkExperience],
  projects: [initialProject],
  skills: initialSkills,
  customs: [initialCustom],
};

export type CreateChangeActionWithDescriptions<T> = { idx: number } & (
  | {
      field: Exclude<keyof T, "descriptions">;
      value: string;
    }
  | {
      field: "descriptions";
      value: string[];
    }
);

export const resumeSlice = createSlice({
  name: "resume",
  initialState: initialResumeState,
  reducers: {
    changeProfile: (
      state,
      action: PayloadAction<{ field: keyof PersonalSection; value: string }>
    ) => {
      const { field, value } = action.payload;
      state.profile[field] = value;
    },
    changeAbout: (
      state,
      action: PayloadAction<{ field: keyof AboutSection; value: string }>
    ) => {
      const { field, value } = action.payload;
      state.about[field] = value;
    },
    changeWorkExperiences: (
      state,
      action: PayloadAction<
        CreateChangeActionWithDescriptions<ResumeWorkExperience>
      >
    ) => {
      const { idx, field, value } = action.payload;
      const workExperience = state.workExperiences[idx];
      workExperience[field] = value as any;
    },
    changeEducations: (
      state,
      action: PayloadAction<CreateChangeActionWithDescriptions<ResumeEducation>>
    ) => {
      const { idx, field, value } = action.payload;
      const education = state.educations[idx];
      education[field] = value as any;
    },
    changeProjects: (
      state,
      action: PayloadAction<CreateChangeActionWithDescriptions<ResumeProject>>
    ) => {
      const { idx, field, value } = action.payload;
      const project = state.projects[idx];
      project[field] = value as any;
    },
    changeSkills: (
      state,
      action: PayloadAction<
        | { field: "descriptions"; value: string[] }
        | {
            field: "featuredSkills";
            idx: number;
            skill: string;
            rating: number;
          }
      >
    ) => {
      const { field } = action.payload;
      if (field === "descriptions") {
        const { value } = action.payload;
        state.skills.descriptions = value;
      } else {
        const { idx, skill, rating } = action.payload;
        const featuredSkill = state.skills.featuredSkills[idx];
        featuredSkill.skill = skill;
        featuredSkill.rating = rating;
      }
    },
    changeCustom: (
      state,
      action: PayloadAction<CreateChangeActionWithDescriptions<ResumeCustom>>
    ) => {
      const { idx, field, value } = action.payload;
      const custom = state.customs[idx];
      custom[field] = value as any;
    },
    addSectionInForm: (state, action: PayloadAction<{ form: ShowForm }>) => {
      const { form } = action.payload;
      switch (form) {
        case "workExperiences": {
          state.workExperiences.push(structuredClone(initialWorkExperience));
          return state;
        }
        case "educations": {
          state.educations.push(structuredClone(initialEducation));
          return state;
        }
        case "projects": {
          state.projects.push(structuredClone(initialProject));
          return state;
        }
        case "customs": {
          state.customs.push(structuredClone(initialCustom));
          return state;
        }
      }
    },
    moveSectionInForm: (
      state,
      action: PayloadAction<{
        form: ShowForm;
        idx: number;
        direction: "up" | "down";
      }>
    ) => {
      const { form, idx, direction } = action.payload;
      if (form !== "skills") {
        if (
          (idx === 0 && direction === "up") ||
          (idx === state[form].length - 1 && direction === "down")
        ) {
          return state;
        }

        const section = state[form][idx];
        if (direction === "up") {
          state[form][idx] = state[form][idx - 1];
          state[form][idx - 1] = section;
        } else {
          state[form][idx] = state[form][idx + 1];
          state[form][idx + 1] = section;
        }
      }
    },
    deleteSectionInFormByIdx: (
      state,
      action: PayloadAction<{ form: ShowForm; idx: number }>
    ) => {
      const { form, idx } = action.payload;
      if (form !== "skills") {
        state[form].splice(idx, 1);
      }
    },
    setResume: (state, action: PayloadAction<Resume>) => {
      return action.payload;
    },
  },
});

export const {
  changeCustom,
  changeEducations,
  changeProjects,
  changeProfile,
  changeAbout,
  changeSkills,
  changeWorkExperiences,
  addSectionInForm,
  moveSectionInForm,
  deleteSectionInFormByIdx,
  setResume,
} = resumeSlice.actions;

export const selectResume = (state: RootState) => state.resume;
export const selectProfile = (state: RootState) => state.resume.profile;
export const selectAbout = (state: RootState) => state.resume.about;
export const selectWorkExperiences = (state: RootState) =>
  state.resume.workExperiences;
export const selectEducations = (state: RootState) => state.resume.educations;
export const selectProjects = (state: RootState) => state.resume.projects;
export const selectSkills = (state: RootState) => state.resume.skills;
export const selectCustom = (state: RootState) => state.resume.customs;

export default resumeSlice.reducer;
