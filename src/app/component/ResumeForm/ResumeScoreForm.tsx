"use client";
import React, { useState } from "react";
import Input from "../input/Input";
import SelectInput from "../input/Select";

const jobIndustryList = [
    "IT",
    "Civil"
];

const jobTitleList = [
    "Software Engineer",
    "Project Manager"
];

const ResumeScoreForm = () => {
  const [submitting, setSubmitting] = useState(false);
  const [coverLetter, setResumeScore] = useState(null);
  const [formData, setFormData] = useState({
    jobIndustry: "",
    jobTitle: ""
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setSubmitting(true);
      const response = await fetch(
        "http://localhost:5000/api/v1/resume/get-resume-score",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();
      if (result?.statusCode === 200) {
        setResumeScore(result?.data?.textResponse);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
    setSubmitting(false);
  };

  return (
    
    <form onSubmit={handleSubmit} id="generate_cover_letter">
      <div className='border-2 rounded-lg p-5' style={{ borderColor: '#DDDFF0', backgroundColor: '#FAFAFF'}}>
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
        <button
            type="submit"
            disabled={submitting}
            className="sm:col-span-2 mx-auto w-[220px] 2xl:w-[295px] mt-4 py-[13px] 2xl:py-[15px] rounded-full transition-transform duration-700 ease-in-out hover:scale-105 font-dmSans sm:text-[14px] 2xl:text-[20px] text-[16px] 2xl:leading-[32px] sm:leading-[21px] leading-[26px] bg-[#4929ff] text-white font-semibold"
        >
            {!submitting ? "Start Analyzing" : "Analyzing"}
        </button>
        </div>
        </div>
    </form>
  );
};

export default ResumeScoreForm;
