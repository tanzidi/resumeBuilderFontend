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

const CoverLetterGeneratorForm = () => {
  const [submitting, setSubmitting] = useState(false);
  const [coverLetter, setCoverLetter] = useState(null);
  const [formData, setFormData] = useState({
    tone: "",
    name: "",
    jobTitle: "",
    company: "",
    recipient: "",
    roleType: "",
    position: "",
    location: "",
    skills: "",
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
        "http://localhost:5000/api/v1/generator/generate-cover-letter",
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
        setCoverLetter(result?.data?.textResponse);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
    setSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} id="generate_cover_letter">
      <div className="mx-5 sm:mx-16 bg-[#EBF7FF] py-14 2xl:py-20 my-8 md:my-20 px-4 sm:px-[60px] lg:px-[143px] 2xl:px-[215px] rounded-3xl">
        <h1 className="text-center font-gilory 2xl:text-[56px] sm:text-[38px] text-[20px] font-bold pb-4">
          AI Cover Letter Generator
        </h1>
        <p className="sm:text-[16px] 2xl:text-[24px] text-[14px] 2xl:leading-[36px] sm:leading-[24px] leading-[20px] font-dmSans text-secondary font-normal mb-11 text-center">
          Free cover letter creator tool to create cover letter for your job
          search
          <br className="sm:block hidden" />
          powered by GPT-3.
        </p>
        {coverLetter ? (
          <div className="p-4 border rounded-md bg-white shadow-md">
            <h2 className="font-bold text-lg mb-7">
              {formData?.jobTitle} Cover Letter
            </h2>
            <pre className="whitespace-pre-wrap">{coverLetter}</pre>
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
              name="name"
              label="Name"
              placeholder="Ex. John Doe"
              required
              value={formData.name}
              onChange={handleChange}
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
              name="company"
              label="Applying for Company"
              placeholder="Ex. Google"
              required
              value={formData.company}
              onChange={handleChange}
            />
            <Input
              name="recipient"
              label="Recipient"
              placeholder="Ex. Hiring Manager or Jane Smith"
              required
              value={formData.recipient}
              onChange={handleChange}
            />
            <Input
              name="roleType"
              label="Role Type"
              placeholder="Ex. Full-time or Part-time"
              value={formData.roleType}
              onChange={handleChange}
            />
            <Input
              name="position"
              label="Position"
              placeholder="Ex. Senior Developer or Intern"
              value={formData.position}
              onChange={handleChange}
            />
            <Input
              name="location"
              label="Location"
              placeholder="Ex. Dhaka"
              value={formData.location}
              onChange={handleChange}
            />
            <Input
              name="skills"
              label="Skills"
              placeholder="Ex. JavaScript, React, Node.js"
              value={formData.skills}
              onChange={handleChange}
            />
            <button
              type="submit"
              disabled={submitting}
              className="sm:col-span-2 mx-auto w-[220px] 2xl:w-[295px] mt-8 py-[13px] 2xl:py-[20px] rounded-full transition-transform duration-700 ease-in-out hover:scale-105 font-dmSans sm:text-[14px] 2xl:text-[20px] text-[16px] 2xl:leading-[32px] sm:leading-[21px] leading-[26px] bg-[#4929ff] text-white font-semibold"
            >
              {!submitting ? "Generate Cover Letter" : "Generating"}
            </button>
          </div>
        )}
      </div>
    </form>
  );
};

export default CoverLetterGeneratorForm;
