"use client";
import React, { useState } from "react";
import SelectInput from "../input/Select";
import Textarea from "../input/TextArea";

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

const LinkedInHeadlineGeneratorForm = () => {
  const [submitting, setSubmitting] = useState(false);
  const [linkedInHeadline, setLinkedInHeadline] = useState(null);
  const [formData, setFormData] = useState({
    tone: "",
    shortDescription: "",
  });

  const [error, setError] = useState<Record<string, string | null>>({
    shortDescription: null,
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
    const wordCount = formData?.shortDescription
      .trim()
      .split(/\s+/)
      .filter(Boolean).length;

    if (wordCount < 5) {
      setError({
        shortDescription: "Short description must contain at least 5 words.",
      });
      return;
    } else {
      setError({ shortDescription: null });
    }
    try {
      setSubmitting(true);
      const response = await fetch(
        "http://localhost:5000/api/v1/generator/generate-linkedin-headline",
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
        setLinkedInHeadline(result?.data?.textResponse);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
    setSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} id="generate_linkedIn_headline">
      <div className="mx-5 sm:mx-16 bg-[#EBF7FF] py-14 2xl:py-20 my-8 md:my-20 px-4 sm:px-[60px] lg:px-[143px] 2xl:px-[215px] rounded-3xl">
        <h1 className="text-center font-gilory 2xl:text-[56px] sm:text-[38px] text-[20px] font-bold pb-4">
          AI LinkedIn Headline Generator
        </h1>
        <p className="sm:text-[16px] 2xl:text-[24px] text-[14px] 2xl:leading-[36px] sm:leading-[24px] leading-[20px] font-dmSans text-secondary font-normal mb-11 text-center">
          Free LinkedIn Headline creator tool to create headline for your
          LinkedIn post
          <br className="sm:block hidden" />
          powered by GPT-3.
        </p>
        {linkedInHeadline ? (
          <div className="p-4 border rounded-md bg-white shadow-md">
            <pre className="whitespace-pre-wrap">{linkedInHeadline}</pre>
          </div>
        ) : (
          <div className="flex flex-col 2xl:gap-6 gap-4">
            <div className="lg:w-2/3 mx-auto w-full">
              <SelectInput
                label="Select a Tone"
                options={toneList}
                required
                value={formData.tone}
                onChange={(value) => setFormData({ ...formData, tone: value })}
              />
            </div>
            <Textarea
              name="shortDescription"
              label="Short Description"
              placeholder="Shortly describe about your headline..."
              required
              value={formData.shortDescription}
              onChange={handleChange}
              errorMessage={error?.shortDescription}
            />
            <button
              type="submit"
              disabled={submitting}
              className="sm:col-span-2 mx-auto w-[230px] 2xl:w-[310px] mt-8 py-[13px] 2xl:py-[20px] rounded-full transition-transform duration-700 ease-in-out hover:scale-105 font-dmSans sm:text-[14px] 2xl:text-[20px] text-[16px] 2xl:leading-[32px] sm:leading-[21px] leading-[26px] bg-[#4929ff] text-white font-semibold"
            >
              {!submitting ? "Generate LinkedIn Headline" : "Generating"}
            </button>
          </div>
        )}
      </div>
    </form>
  );
};

export default LinkedInHeadlineGeneratorForm;
