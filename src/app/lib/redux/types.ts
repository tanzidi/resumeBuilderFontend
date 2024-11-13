export interface PersonalSection {
  name: string;
  headline: string;
  email: string;
  phone: string;
  address: string;
  postCode: string;
  city: string;
  linkedIn: string;
  url: string;
  customField: string;
}

export interface AboutSection {
  about: string;
}

export interface ResumeEducation {
  education: string;
  institution: string;
  startDate: string;
  endDate: string;
  city: string;
  gpa: string;
  descriptions: string[];
}

export interface ResumeWorkExperience {
  position: string;
  company: string;
  city: string;
  startDate: string;
  endDate: string;
  descriptions: string[];
}

export interface ResumeProject {
  project: string;
  startDate: string;
  endDate: string;
  descriptions: string[];
}

export interface FeaturedSkill {
  skill: string;
  rating: number;
}

export interface ResumeSkills {
  featuredSkills: FeaturedSkill[];
  descriptions: string[];
}

export interface ResumeCustom {
  title: string;
  details: string;
  descriptions: string[];
}

export interface Resume {
  profile: PersonalSection;
  about: AboutSection;
  educations: ResumeEducation[];
  workExperiences: ResumeWorkExperience[];
  projects: ResumeProject[];
  skills: ResumeSkills;
  customs: ResumeCustom[];
}

export type ResumeKey = keyof Resume;
