"use client";
import Image from "next/image";
import { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import TagLine from "../button/TagLine";

const Tutorial = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const dropdowns = [
    {
      title: "Add Extension to Chrome",
      content:
        "First, locate the LazyApply icon in your Chrome browser’s toolbar. Click the icon to open the extension and select the option to sign in using your Google account.",
    },
    {
      title: "Log in to the Extension",
      content:
        "To log in, enter your credentials on the prompt. Follow the instructions to complete the login process successfully and gain access to all features.",
    },
    {
      title: "Complete to Your Resume",
      content:
        "Fill out your resume carefully, adding your skills, work experiences, and education details as prompted. Make sure to highlight key achievements effectively.",
    },
    {
      title: "Start Applying to Desired Job",
      content:
        "After completing your resume, browse through job listings. Apply directly using the extension to increase your chances of getting hired quickly and easily.",
    },
  ];

  const handleClick = (index: number) => {
    setOpenIndex(index);
  };
  return (
    <div
      className="py-4 flex flex-col px-5 lg:px-[94px] 2xl:px-[140px]"
      id="how_to_use"
    >
      <TagLine tag="Follow Tutorials" />
      <h1 className="text-header text-center">
        Take a Look
        <br />
        How to Use Placed
      </h1>

      <div className="flex md:flex-row flex-col-reverse gap-6 md:gap-4 2xl:gap-6 justify-between items-center 2xl:mt-14 sm:[37px] mt-[32px]">
        <div className="flex-1 flex flex-col justify-between min-h-[336px]">
          {dropdowns.map((dropdown, index) => (
            <Dropdown
              key={index}
              index={index + 1}
              title={dropdown.title}
              content={dropdown.content}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
        <div className="flex-1">
          <Image
            src="/take_a_look_dummy.png"
            alt="dummy"
            className="2xl:border-8 border-4 h-80 2xl:h-full lg:h-[400px] aspect-video"
            height={548}
            width={808}
            style={{
              borderStyle: "solid",
              borderColor: "#DBE2FF",
              borderRadius: "24px",
              boxShadow:
                "#70fff830 5px 3px 27px 2px, #B385FF 4px 8px 4px -12px",
              background: `
      linear-gradient(180deg, #F3F0FF 0%, #F0F6FF 100%),
      linear-gradient(180deg, rgba(255, 255, 255, 0) 52%, rgba(255, 255, 255, 0.8) 100%)
    `,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
