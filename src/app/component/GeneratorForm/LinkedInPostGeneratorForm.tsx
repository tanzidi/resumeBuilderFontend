"use client";
import React, { useState } from "react";
import Input from "../input/Input";
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

const wordingList = ["Simple", "Complex"];
const hashTagList = ["No", "Yes"];
const lengthList = ["Short", "Medium", "Large"];

const LinkedInPostGeneratorForm = () => {
  const [submitting, setSubmitting] = useState(false);
  const [linkedInPost, setLinkedInPost] = useState(null);
  const [formData, setFormData] = useState({
    tone: "",
    postDescription: "",
    postKeywords: "",
    audience: "",
    wording: "Simple",
    hashtags: "No",
    length: "Short",
  });

  const [error, setError] = useState<Record<string, string | null>>({
    postDescription: null,
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
    const wordCount = formData?.postDescription
      .trim()
      .split(/\s+/)
      .filter(Boolean).length;

    if (wordCount < 10) {
      setError({
        postDescription: "Post description must contain at least 10 words.",
      });
      return;
    } else {
      setError({ postDescription: null });
    }
    try {
      setSubmitting(true);
      const response = await fetch(
        "http://localhost:5000/api/v1/generator/generate-linkedin-post",
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
        setLinkedInPost(result?.data?.textResponse);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
    setSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} id="generate_linkedIn_post">
      <div className="mx-5 sm:mx-16 bg-[#EBF7FF] py-14 2xl:py-20 my-8 md:my-20 px-4 sm:px-[60px] lg:px-[143px] 2xl:px-[215px] rounded-3xl">
        <h1 className="text-center font-gilory 2xl:text-[56px] sm:text-[38px] text-[20px] font-bold pb-4">
          AI LinkedIn Post Generator
        </h1>
        <p className="sm:text-[16px] 2xl:text-[24px] text-[14px] 2xl:leading-[36px] sm:leading-[24px] leading-[20px] font-dmSans text-secondary font-normal mb-11 text-center">
          Free LinkedIn Post creator tool to create post for your LinkedIn
          Profile
          <br className="sm:block hidden" />
          powered by GPT-3.
        </p>
        {linkedInPost ? (
          <div className="p-4 border rounded-md bg-white shadow-md">
            <pre className="whitespace-pre-wrap">{linkedInPost}</pre>
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
            <SelectInput
              label="Select Post Length"
              options={lengthList}
              value={formData.length}
              onChange={(value) => setFormData({ ...formData, length: value })}
            />
            <SelectInput
              label="Generate Hashtags?"
              options={hashTagList}
              value={formData.hashtags}
              onChange={(value) =>
                setFormData({ ...formData, hashtags: value })
              }
            />
            <SelectInput
              label="Wording Style"
              options={wordingList}
              value={formData.wording}
              onChange={(value) => setFormData({ ...formData, wording: value })}
            />
            <Input
              name="postKeywords"
              label="Post Keywords"
              required
              placeholder="Add relevant keywords separated by commas"
              value={formData.postKeywords}
              onChange={handleChange}
            />
            <Input
              name="audience"
              label="Target Audience"
              placeholder="e.g., Marketing Professionals, Job Seekers"
              value={formData.audience}
              onChange={handleChange}
            />
            <Textarea
              name="postDescription"
              label="Post Description"
              placeholder="Briefly describe your post..."
              required
              value={formData.postDescription}
              onChange={handleChange}
              errorMessage={error?.postDescription}
            />
            <button
              type="submit"
              disabled={submitting}
              className="sm:col-span-2 mx-auto w-[230px] 2xl:w-[310px] mt-8 py-[13px] 2xl:py-[20px] rounded-full transition-transform duration-700 ease-in-out hover:scale-105 font-dmSans sm:text-[14px] 2xl:text-[20px] text-[16px] 2xl:leading-[32px] sm:leading-[21px] leading-[26px] bg-[#4929ff] text-white font-semibold"
            >
              {!submitting ? "Generate LinkedIn Post" : "Generating"}
            </button>
          </div>
        )}
      </div>
    </form>
  );
};

export default LinkedInPostGeneratorForm;
