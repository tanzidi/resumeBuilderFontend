import Link from "next/link";
import React from "react";
import PrimaryButton from "../button/PrimaryButton";
import { MoveRight } from "lucide-react";
import Image from "next/image";

const LinkedInGeneratorDescription = () => {
  return (
    <div className="py-8 md:py-0 flex flex-col px-5">
      <h1 className="text-header text-center">
        LinkedIn Post Generate
        <br />
        in Seconds
      </h1>
      <p className="sm:text-[16px] 2xl:text-[24px] text-[14px] 2xl:leading-[36px] sm:leading-[24px] leading-[20px] font-dmSans text-secondary font-normal mb-5 text-center">
        Our AI Job search tool automatically generate LinkedIn
        <br className="sm:block hidden" />
        Post, Bio, Summary, Hashtag.
      </p>
      <div className="mx-auto w-[220px] 2xl:w-[295px]">
        <Link href="/linkedin-post-generator#generate_linkedIn_post">
          <PrimaryButton>
            Create LinkedIn Post <MoveRight className="inline-block" />
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

export default LinkedInGeneratorDescription;
