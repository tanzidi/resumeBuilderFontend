"use client";
import React, { useState } from "react";
import Input from "../input/Input";
import SelectInput from "../input/Select";

const toneList = [
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

const LinkedInBioGeneratorForm = () => {
  const [submitting, setSubmitting] = useState(false);
  const [linkedInBio, setLinkedInBio] = useState(null);
  const [formData, setFormData] = useState({
    tone: "",
    skills: "",
    name: "",
    professionalExperience: "",
    education: "",
    achievements: "",
    industryKnowledge: "",
    professionalOrganizations: "",
    awards: "",
    personalInterests: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
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
        "http://localhost:5000/api/v1/generator/generate-linkedin-bio",
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
        setLinkedInBio(result?.data?.textResponse);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
    setSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} id="generate_linkedIn_bio">
      <div className="mx-5 sm:mx-16 bg-[#EBF7FF] py-14 2xl:py-20 my-8 md:my-20 px-4 sm:px-[60px] lg:px-[143px] 2xl:px-[215px] rounded-3xl">
        <h1 className="text-center font-gilory 2xl:text-[56px] sm:text-[38px] text-[20px] font-bold pb-4">
          AI LinkedIn Bio Generator
        </h1>
        <p className="sm:text-[16px] 2xl:text-[24px] text-[14px] 2xl:leading-[36px] sm:leading-[24px] leading-[20px] font-dmSans text-secondary font-normal mb-11 text-center">
          Free LinkedIn Bio creator tool to create bio for your LinkedIn Profile
          <br className="sm:block hidden" />
          powered by GPT-3.
        </p>
        {linkedInBio ? (
          <div className="p-4 border rounded-md bg-white shadow-md">
            <pre className="whitespace-pre-wrap">{linkedInBio}</pre>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 2xl:gap-6 gap-4">
            <SelectInput
              label="Select a Tone"
              options={toneList}
              required
              value={formData.tone}
              onChange={(value) => setFormData({ ...formData, tone: value })}
            />
            <Input
              name="skills"
              label="Skills"
              required
              placeholder="e.g., JavaScript, Project Management, Data Analysis"
              value={formData.skills}
              onChange={handleChange}
            />
            <Input
              name="name"
              label="Name"
              placeholder="Ex. John Doe"
              value={formData.name}
              onChange={handleChange}
            />
            <Input
              name="professionalExperience"
              label="Professional Experience"
              placeholder="e.g., Software Engineer at Company ABC"
              value={formData.professionalExperience}
              onChange={handleChange}
            />
            <Input
              name="education"
              label="Education"
              placeholder="e.g., B.S. in Computer Science from University XYZ"
              value={formData.education}
              onChange={handleChange}
            />
            <Input
              name="achievements"
              label="Achievements"
              placeholder="e.g., Employee of the Month, Published Author"
              value={formData.achievements}
              onChange={handleChange}
            />
            <Input
              name="industryKnowledge"
              label="Industry Knowledge"
              placeholder="e.g., FinTech, HealthTech"
              value={formData.industryKnowledge}
              onChange={handleChange}
            />
            <Input
              name="professionalOrganizations"
              label="Professional Organizations"
              placeholder="e.g., Member of IEEE, PMI"
              value={formData.professionalOrganizations}
              onChange={handleChange}
            />
            <Input
              name="awards"
              label="Awards"
              placeholder="e.g., Best Innovator 2023"
              value={formData.awards}
              onChange={handleChange}
            />
            <Input
              name="personalInterests"
              label="Personal Interests"
              placeholder="e.g., Traveling, Photography, Coding"
              value={formData.personalInterests}
              onChange={handleChange}
            />
            <button
              type="submit"
              disabled={submitting}
              className="sm:col-span-2 mx-auto w-[230px] 2xl:w-[310px] mt-8 py-[13px] 2xl:py-[20px] rounded-full transition-transform duration-700 ease-in-out hover:scale-105 font-dmSans sm:text-[14px] 2xl:text-[20px] text-[16px] 2xl:leading-[32px] sm:leading-[21px] leading-[26px] bg-[#4929ff] text-white font-semibold"
            >
              {!submitting ? "Generate LinkedIn Bio" : "Generating"}
            </button>
          </div>
        )}
      </div>
    </form>
  );
};

export default LinkedInBioGeneratorForm;
