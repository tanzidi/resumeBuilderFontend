'use client';
import React from "react";
import SelectInput from "../input/Select";

const jobIndustryList = ["IT", "Civil"];
const jobTitleList = ["Software Engineer", "Project Manager"];

const ResumeScoreForm = ({
  formData,
  setFormData,
}: {
  formData: { jobIndustry: string; jobTitle: string };
  setFormData: React.Dispatch<React.SetStateAction<{ jobIndustry: string; jobTitle: string }>>;
}) => {
  return (
    <div className="border-2 rounded-lg p-5" style={{ borderColor: "#DDDFF0", backgroundColor: "#FAFAFF" }}>
      <div className="flex flex-col gap-y-4">
        <SelectInput
          label="Job Industry"
          options={jobIndustryList}
          required
          value={formData.jobIndustry}
          onChange={(value) => setFormData({ ...formData, jobIndustry: value })}
        />
        <SelectInput
          label="Job Title"
          options={jobTitleList}
          required
          value={formData.jobTitle}
          onChange={(value) => setFormData({ ...formData, jobTitle: value })}
        />
      </div>
    </div>
  );
};

export default ResumeScoreForm;
