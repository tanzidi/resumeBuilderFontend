"use client";
import Image from "next/image";
import { useState } from "react";
import Dropdown2 from "../Dropdown/Dropdown2";
import TagLine from "../button/TagLine";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(-1);
  const handleClick = (index: number) => {
    setOpenIndex(index);
  };
  const dropdowns = [
    {
      title: "What is Placed?",
      content:
        "First, locate the LazyApply icon in your Chrome browser’s toolbar. Click the icon to open the extension and select the option to sign in using your Google account.",
    },
    {
      title: "How does it work?",
      content:
        "To log in, enter your credentials on the prompt. Follow the instructions to complete the login process successfully and gain access to all features.",
    },
    {
      title: "Do I need another broker?",
      content:
        "Fill out your resume carefully, adding your skills, work experiences, and education details as prompted. Make sure to highlight key achievements effectively.",
    },
    {
      title: "What if I already have a benefits scheme in place?",
      content:
        "After completing your resume, browse through job listings. Apply directly using the extension to increase your chances of getting hired quickly and easily.",
    },
    {
      title: "What if I already have a benefits scheme in place?",
      content:
        "After completing your resume, browse through job listings. Apply directly using the extension to increase your chances of getting hired quickly and easily.",
    },
    {
      title: "What if I already have a benefits scheme in place?",
      content:
        "After completing your resume, browse through job listings. Apply directly using the extension to increase your chances of getting hired quickly and easily.",
    },
  ];
  return (
    <div
      className="flex flex-col md:flex-row gap-4 justify-center items-start py-8 md:py-20 px-5 lg:px-[94px] 2xl:px-[140px]"
      id="faq"
    >
      <div className="relative h-full w-full py-8 md:py-20 flex flex-col justify-center items-start">
        <div className="absolute top-8 right-0 md:block hidden">
          <Image
            className="h-16 w-fit"
            src="/icon/arrow.png"
            alt="dummy"
            height={400}
            width={400}
          />
        </div>
        <div className="flex item-center md:item-start w-full md:w-fit">
          <TagLine tag="FAQ" />
        </div>

        <h1 className="text-header text-center md:text-start w-full">
          Frequently Asked
          <br />
          Questions
        </h1>
        <p className="sm:text-[16px] 2xl:text-[24px] text-[14px] 2xl:leading-[36px] sm:leading-[24px] leading-[20px] font-dmSans text-secondary font-normal mb-7 md:text-start text-center">
          Find answers to common questions and solutions for your most
          frequently asked queries.
        </p>
        <button className="md:flex justify-evenly items-center rounded-full border border-[#0000001F] px-[21px] py-[13px] gap-1 2xl:gap-[6px] font-dmSans transition-transform duration-700 ease-in-out hover:scale-105 hidden">
          <Image
            className="p-1"
            src="/icon/massage.png"
            alt="dummy"
            height={30}
            width={30}
          />
          <p className="text-black font-[500] text-[16px] leading-[22px]">
            Talk to us
          </p>
        </button>
      </div>
      <div className="w-full">
        {dropdowns.map((dropdown, index) => (
          <Dropdown2
            key={index}
            title={dropdown.title}
            content={dropdown.content}
            isOpen={openIndex === index}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
