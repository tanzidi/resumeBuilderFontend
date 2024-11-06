import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import PrimaryButton from "../button/PrimaryButton";

const CoverLetterGeneratorDescription = () => {
  return (
    <div className="py-8 md:py-0 flex flex-col px-5">
      <h1 className="text-header text-center">
        AI Cover Letter
        <br />
        Done in Seconds
      </h1>
      <p className="sm:text-[16px] 2xl:text-[24px] text-[14px] 2xl:leading-[36px] sm:leading-[24px] leading-[20px] font-dmSans text-secondary font-normal mb-5 text-center">
        Our AI Job search tool automatically apply to all the jobs on platforms
        like Linkedin, <br className="sm:block hidden" />
        Indeed and Ziprecruiter using Job GPT.
      </p>
      <div className="mx-auto w-[220px] 2xl:w-[295px]">
        <Link href="/cover-letter-generator#generate_cover_letter">
          <PrimaryButton>
            Create Cover Letter <MoveRight className="inline-block" />
          </PrimaryButton>
        </Link>
      </div>
      <div>
        <Image
          src="/bgImage/mockup.png"
          alt="dummy"
          height={500}
          width={500}
          className="mx-auto 2xl:border-[12px] md:aspect-video sm:aspect-[5/3] aspect-[5/4] 2xl:w-[1062px] sm:w-[708px] rounded-2xl sm:mt-20 mt-8 sm:mb-20 mb-0"
        />
      </div>
    </div>
  );
};

export default CoverLetterGeneratorDescription;
