"use client";
import React, { useState } from "react";
import Input from "../input/Input";
import SelectInput from "../input/Select";

const toneTopicList = [
  "Appreciative",
  "Assertive",
  "Awestruck",
  "Candid",
  "Casual",
  "Cautionary",
  "Compassionate",
  "Convincing",
  "Critical",
  "Earnest",
  "Enthusiastic",
  "Formal",
  "Funny",
  "Humble",
  "Humorous",
  "Informative",
  "Inspirational",
  "Joyful",
  "Passionate",
  "Thoughtful",
  "Urgent",
  "Worried",
];

const JobDescriptionGeneratorForm = () => {
  const [submitting, setSubmitting] = useState(false);
  const [jobDescription, setJobDescription] = useState(null);
  const [formData, setFormData] = useState({
    jobTitle: "",
    companyUrl: "",
    tone: "",
    typeOfEmployment: "",
    jobDuration: "",
    equity: "",
    educationalQualification: "",
    compensation: "",
    location: "",
    jobType: "",
    reportingTo: "",
    roleInTeam: "",
    workingHours: "",
    yearsOfExperience: "",
    websiteContent: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setSubmitting(true);
      const response = await fetch(
        "http://localhost:5000/api/v1/generator/generate-job-description",
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
        setJobDescription(result?.data?.textResponse);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
    setSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} id="generate_job_description_generator">
      <div className="mx-5 sm:mx-16 bg-[#EBF7FF] py-14 2xl:py-20 my-8 md:my-20 px-4 sm:px-[60px] lg:px-[143px] 2xl:px-[215px] rounded-3xl">
        <h1 className="text-center font-gilory 2xl:text-[56px] sm:text-[38px] text-[20px] font-bold pb-4">
          AI Job Description Generator
        </h1>
        <p className="sm:text-[16px] 2xl:text-[24px] text-[14px] 2xl:leading-[36px] sm:leading-[24px] leading-[20px] font-dmSans text-secondary font-normal mb-11 text-center">
          Free job Description creator tool to create job description for your
          company hiring
          <br className="sm:block hidden" />
          powered by GPT-3.
        </p>
        {jobDescription ? (
          <div className="p-4 border rounded-md bg-white shadow-md">
            <h2 className="font-bold text-lg mb-7">
              {formData?.jobTitle} Cover Letter
            </h2>
            <pre className="whitespace-pre-wrap">{jobDescription}</pre>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 2xl:gap-6 gap-4">
            <SelectInput
              label="Select a Tone"
              options={toneTopicList}
              required
              value={formData.tone}
              onChange={(value) => setFormData({ ...formData, tone: value })}
            />
            <Input
              name="jobTitle"
              label="Job Title"
              placeholder="Ex. Software Developer"
              required
              value={formData.jobTitle}
              onChange={handleChange}
            />
            <Input
              name="companyUrl"
              label="Company URL"
              placeholder="Ex. https://example.com"
              required
              value={formData.companyUrl}
              onChange={handleChange}
            />
            <Input
              name="typeOfEmployment"
              label="Type of Employment"
              placeholder="Ex. Full-Time, Part-Time"
              value={formData.typeOfEmployment}
              onChange={handleChange}
            />
            <Input
              name="jobDuration"
              label="Job Duration"
              placeholder="Ex. 6 months, 1 year"
              value={formData.jobDuration}
              onChange={handleChange}
            />
            <Input
              name="equity"
              label="Equity"
              placeholder="Ex. 0.5%, 1.5%"
              value={formData.equity}
              onChange={handleChange}
            />
            <Input
              name="educationalQualification"
              label="Educational Qualification"
              placeholder="Ex. Bachelor's in Computer Science"
              value={formData.educationalQualification}
              onChange={handleChange}
            />
            <Input
              name="compensation"
              label="Compensation"
              placeholder="Ex. $70,000 per year"
              value={formData.compensation}
              onChange={handleChange}
            />
            <Input
              name="location"
              label="Location"
              placeholder="Ex. New York, Remote"
              value={formData.location}
              onChange={handleChange}
            />
            <Input
              name="jobType"
              label="Job Type"
              placeholder="Ex. Contract, Permanent"
              value={formData.jobType}
              onChange={handleChange}
            />
            <Input
              name="reportingTo"
              label="Reporting To"
              placeholder="Ex. Team Lead, Manager"
              value={formData.reportingTo}
              onChange={handleChange}
            />
            <Input
              name="roleInTeam"
              label="Role in Team"
              placeholder="Ex. Developer, Designer"
              value={formData.roleInTeam}
              onChange={handleChange}
            />
            <Input
              name="workingHours"
              label="Working Hours"
              placeholder="Ex. 9 AM - 5 PM"
              value={formData.workingHours}
              onChange={handleChange}
            />
            <Input
              name="yearsOfExperience"
              label="Years of Experience"
              placeholder="Ex. 3 years"
              value={formData.yearsOfExperience}
              onChange={handleChange}
            />
            <Input
              name="websiteContent"
              label="Website Content"
              placeholder="Ex. Company Description"
              value={formData.websiteContent}
              onChange={handleChange}
            />
            <button
              type="submit"
              disabled={submitting}
              className="sm:col-span-2 mx-auto w-[230px] 2xl:w-[310px] mt-8 py-[13px] 2xl:py-[20px] rounded-full transition-transform duration-700 ease-in-out hover:scale-105 font-dmSans sm:text-[14px] 2xl:text-[20px] text-[16px] 2xl:leading-[32px] sm:leading-[21px] leading-[26px] bg-[#4929ff] text-white font-semibold"
            >
              {!submitting ? "Generate Job Description" : "Generating"}
            </button>
          </div>
        )}
      </div>
    </form>
  );
};

export default JobDescriptionGeneratorForm;
