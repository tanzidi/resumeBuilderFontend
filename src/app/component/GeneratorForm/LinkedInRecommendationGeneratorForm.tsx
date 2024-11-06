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

const LinkedInRecommendationGeneratorForm = () => {
  const [submitting, setSubmitting] = useState(false);
  const [linkedInRecommendation, setLinkedInRecommendation] = useState(null);
  const [formData, setFormData] = useState({
    tone: "",
    toPerson: "",
    relationshipWithPerson: "",
    shortDescription: "",
    jobPositionAtTime: "",
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
        "http://localhost:5000/api/v1/generator/generate-linkedin-recommendation",
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
        setLinkedInRecommendation(result?.data?.textResponse);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
    setSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} id="generate_linkedIn_recommendation">
      <div className="mx-5 sm:mx-16 bg-[#EBF7FF] py-14 2xl:py-20 my-8 md:my-20 px-4 sm:px-[60px] lg:px-[143px] 2xl:px-[215px] rounded-3xl">
        <h1 className="text-center font-gilory 2xl:text-[56px] sm:text-[38px] text-[20px] font-bold pb-4">
          AI LinkedIn Recommendation Generator
        </h1>
        <p className="sm:text-[16px] 2xl:text-[24px] text-[14px] 2xl:leading-[36px] sm:leading-[24px] leading-[20px] font-dmSans text-secondary font-normal mb-11 text-center">
          Free LinkedIn Recommendation creator tool to create recommendation for
          job application
          <br className="sm:block hidden" />
          powered by GPT-3.
        </p>
        {linkedInRecommendation ? (
          <div className="p-4 border rounded-md bg-white shadow-md">
            <pre className="whitespace-pre-wrap">{linkedInRecommendation}</pre>
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
              name="toPerson"
              label="Recommended Person's Name"
              required
              placeholder="e.g., Jane Smith"
              value={formData.toPerson}
              onChange={handleChange}
            />
            <Input
              name="relationshipWithPerson"
              label="Your Relationship"
              required
              placeholder="e.g., Former Manager, Colleague"
              value={formData.relationshipWithPerson}
              onChange={handleChange}
            />
            <Input
              name="shortDescription"
              label="Recommendation Summary"
              placeholder="e.g., A brief overview of your experience with this person"
              value={formData.shortDescription}
              onChange={handleChange}
            />
            <Input
              name="jobPositionAtTime"
              label="Your Job Position at the Time"
              placeholder="e.g., Marketing Specialist"
              value={formData.jobPositionAtTime}
              onChange={handleChange}
            />

            <button
              type="submit"
              disabled={submitting}
              className="sm:col-span-2 mx-auto w-[230px] 2xl:w-[310px] mt-8 py-[13px] 2xl:py-[20px] rounded-full transition-transform duration-700 ease-in-out hover:scale-105 font-dmSans sm:text-[14px] 2xl:text-[20px] text-[16px] 2xl:leading-[32px] sm:leading-[21px] leading-[26px] bg-[#4929ff] text-white font-semibold"
            >
              {!submitting ? "Generate Recommendation" : "Generating"}
            </button>
          </div>
        )}
      </div>
    </form>
  );
};

export default LinkedInRecommendationGeneratorForm;
