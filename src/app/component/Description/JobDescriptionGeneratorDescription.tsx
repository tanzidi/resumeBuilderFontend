import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import PrimaryButton from "../button/PrimaryButton";

const JobDescriptionGeneratorDescription = () => {
  return (
    <div className="py-8 md:py-0 flex flex-col px-5">
      <h1 className="text-header text-center">
        Generate Job Description
        <br />
        in Seconds
      </h1>
      <p className="sm:text-[16px] 2xl:text-[24px] text-[14px] 2xl:leading-[36px] sm:leading-[24px] leading-[20px] font-dmSans text-secondary font-normal mb-5 text-center">
        Our AI Job search tool automatically apply to all the jobs on platforms
        like Linkedin, <br className="sm:block hidden" />
        Indeed and Ziprecruiter using Job GPT.
      </p>
      <div className="mx-auto w-[220px] 2xl:w-[295px]">
        <Link href="/job-description-generator#generate_job_description_generator">
          <PrimaryButton>
            Create Job Description <MoveRight className="inline-block" />
          </PrimaryButton>
        </Link>
      </div>
      <div>
        <Image
          src="/bgImage/job_description.png"
          alt="dummy"
          height={700}
          width={700}
          className="mx-auto 2xl:border-[12px] md:aspect-video sm:aspect-[5/3] aspect-[5/4] 2xl:w-[1062px] sm:w-[708px] rounded-2xl sm:mt-20 mt-8 sm:mb-20 mb-0"
        />
      </div>
    </div>
  );
};

export default JobDescriptionGeneratorDescription;
