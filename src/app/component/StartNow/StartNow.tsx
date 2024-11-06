import { MoveRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import PrimaryButton from "../button/PrimaryButton";

const StartNow = () => {
  return (
    <div
      className="flex flex-col gap-3 sm:gap-[21px] 2xl:gap-8 rounded-b-3xl mx-5 lg:mx-[94px] 2xl:mx-[140px] mt-8 2xl:mb-52 sm:mb-36 mb-20 px-[14px] text-justify py-8 sm:py-[60px] 2xl:py-[90px]"
      style={{
        backgroundImage: `url('/bgImage/bg_start.png')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-center font-gilory 2xl:text-[56px] sm:text-[38px] text-[20px] font-bold">
        We Empower Job Seekers
        <br className="sm:block hidden" /> to Achieve Career Success
      </h1>
      <Link href="/login" className="mx-auto w-[180px] 2xl:w-[218px]">
        <PrimaryButton>
          Get Started <MoveRight className="inline-block" />
        </PrimaryButton>
      </Link>
    </div>
  );
};

export default StartNow;
