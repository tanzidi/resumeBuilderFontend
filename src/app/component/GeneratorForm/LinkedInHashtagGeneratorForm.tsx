"use client";
import React, { useState } from "react";
import Input from "../input/Input";

const LinkedInHashtagGeneratorForm = () => {
  const [submitting, setSubmitting] = useState(false);
  const [linkedInHashtag, setLinkedInHashtag] = useState(null);
  const [formData, setFormData] = useState({
    topic: "",
    linkedinProfileUrl: "",
    targetAudience: "",
    country: "",
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
        "http://localhost:5000/api/v1/generator/generate-linkedin-hashtag",
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
        setLinkedInHashtag(result?.data?.textResponse);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
    setSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} id="generate_linkedIn_hashtag">
      <div className="mx-5 sm:mx-16 bg-[#EBF7FF] py-14 2xl:py-20 my-8 md:my-20 px-4 sm:px-[60px] lg:px-[143px] 2xl:px-[215px] rounded-3xl">
        <h1 className="text-center font-gilory 2xl:text-[56px] sm:text-[38px] text-[20px] font-bold pb-4">
          AI LinkedIn Hashtag Generator
        </h1>
        <p className="sm:text-[16px] 2xl:text-[24px] text-[14px] 2xl:leading-[36px] sm:leading-[24px] leading-[20px] font-dmSans text-secondary font-normal mb-11 text-center">
          Free LinkedIn Hashtag creator tool to create hashtag for your LinkedIn
          post
          <br className="sm:block hidden" />
          powered by GPT-3.
        </p>
        {linkedInHashtag ? (
          <div className="p-4 border rounded-md bg-white shadow-md">
            <pre className="whitespace-pre-wrap">{linkedInHashtag}</pre>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 2xl:gap-6 gap-4">
            <Input
              name="topic"
              label="Topic of Interest"
              required
              placeholder="e.g., Digital Marketing, Remote Work"
              value={formData.topic}
              onChange={handleChange}
            />
            <Input
              name="linkedinProfileUrl"
              label="Your LinkedIn Profile URL"
              placeholder="e.g., https://www.linkedin.com/in/yourprofile"
              value={formData.linkedinProfileUrl}
              onChange={handleChange}
            />
            <Input
              name="targetAudience"
              label="Target Audience"
              placeholder="e.g., Job Seekers, Entrepreneurs"
              value={formData.targetAudience}
              onChange={handleChange}
            />
            <Input
              name="country"
              label="Country"
              placeholder="e.g., United States, Canada"
              value={formData.country}
              onChange={handleChange}
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

export default LinkedInHashtagGeneratorForm;
