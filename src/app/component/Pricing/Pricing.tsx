import React from "react";
import TagLine from "../button/TagLine";
import Link from "next/link";
import PrimaryButton from "../button/PrimaryButton";
import Image from "next/image";

const Pricing = () => {
  return (
    <div
      className="flex flex-col py-4 px-5 lg:px-[94px] 2xl:px-[140px]"
      id="pricing"
    >
      <TagLine tag="Pricing Plan" />
      <h1 className="text-header text-center">
        Simple, Easy Pricing
        <br />
        As It Should Be
      </h1>
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-8 font-dmSans px-0 2xl:px-[140px]">
        <div className="hover-box 2xl:max-w-[438px] max-w-[348px] pt-8 2xl:pb-8 pb-6 2xl:px-6 px-4">
          <div className="flex flex-col justify-between">
            <p className="font-bold text-[12px] text-black mb-3">BASIC PLAN</p>
            <div className="flex items-end">
              <p className="font-gilory font-normal 2xl:text-[52px] text-[35px] 2xl:leading-[56px] leading-[38px] text-black">
                $99.50
              </p>
              <p className="font-normal text-[14px] leading-[24px] text-secondary">
                / month
              </p>
            </div>
            <p className="mt-4 font-normal leading-4 text-[14px] text-secondary">
              All the basic features to boost your business activities
            </p>
            <div className="bg-[#0000001F] w-full h-[1px] rounded-full mt-4"></div>
          </div>
          <div className="flex flex-col gap-4 my-4">
            <div className="flex justify-start gap-2">
              <div className="w-4 h-4">
                <Image
                  src="/icon/right.png"
                  width={40}
                  height={40}
                  alt="right"
                />
              </div>
              <p className="text-black text-[12px] font-[500] leading-4">
                Lifetime Access
              </p>
            </div>
            <div className="flex justify-start gap-2">
              <div className="w-4 h-4">
                <Image
                  src="/icon/right.png"
                  width={40}
                  height={40}
                  alt="right"
                />
              </div>
              <p className="text-black text-[12px] font-[500] leading-4">
                Daily limit - 150 Job Applications
              </p>
            </div>
            <div className="flex justify-start gap-2">
              <div className="w-4 h-4">
                <Image
                  src="/icon/right.png"
                  width={40}
                  height={40}
                  alt="right"
                />
              </div>
              <p className="text-black text-[12px] font-[500] leading-4">
                Indeed Automation
              </p>
            </div>
            <div className="flex justify-start gap-2">
              <div className="w-4 h-4">
                <Image
                  src="/icon/right.png"
                  width={40}
                  height={40}
                  alt="right"
                />
              </div>
              <p className="text-black text-[12px] font-[500] leading-4">
                LinkedIn Automation
              </p>
            </div>
            <div className="flex justify-start gap-2">
              <div className="w-4 h-4">
                <Image
                  src="/icon/cross.png"
                  width={40}
                  height={40}
                  alt="right"
                />
              </div>
              <p className="text-black text-[12px] font-[500] leading-4">
                Glassdor Automation
              </p>
            </div>
            <div className="flex justify-start gap-2">
              <div className="w-4 h-4">
                <Image
                  src="/icon/cross.png"
                  width={40}
                  height={40}
                  alt="right"
                />
              </div>
              <p className="text-black text-[12px] font-[500] leading-4">
                Ziprecruiter Automation
              </p>
            </div>
            <div className="flex justify-start gap-2">
              <div className="w-4 h-4">
                <Image
                  src="/icon/cross.png"
                  width={40}
                  height={40}
                  alt="right"
                />
              </div>
              <p className="text-black text-[12px] font-[500] leading-4">
                Career Builder Automation
              </p>
            </div>
            <div className="flex justify-start gap-2">
              <div className="w-4 h-4">
                <Image
                  src="/icon/cross.png"
                  width={40}
                  height={40}
                  alt="right"
                />
              </div>
              <p className="text-black text-[12px] font-[500] leading-4">
                Seek Automation
              </p>
            </div>
            <div className="flex justify-start gap-2">
              <div className="w-4 h-4">
                <Image
                  src="/icon/cross.png"
                  width={40}
                  height={40}
                  alt="right"
                />
              </div>
              <p className="text-black text-[12px] font-[500] leading-4">
                Dice Automation
              </p>
            </div>
            <div className="flex justify-start gap-2">
              <div className="w-4 h-4">
                <Image
                  src="/icon/cross.png"
                  width={40}
                  height={40}
                  alt="right"
                />
              </div>
              <p className="text-black text-[12px] font-[500] leading-4">
                Simply Hired Automation
              </p>
            </div>
            <div className="flex justify-start gap-2">
              <div className="w-4 h-4">
                <Image
                  src="/icon/right.png"
                  width={40}
                  height={40}
                  alt="right"
                />
              </div>
              <p className="text-black text-[12px] font-[500] leading-4">
                Up to - 1 Resumes / CV&apos;s
              </p>
            </div>
            <div className="flex justify-start gap-2">
              <div className="w-4 h-4">
                <Image
                  src="/icon/right.png"
                  width={40}
                  height={40}
                  alt="right"
                />
              </div>
              <p className="text-black text-[12px] font-[500] leading-4">
                Day Wise Analytics
              </p>
            </div>
            <div className="flex justify-start gap-2">
              <div className="w-4 h-4">
                <Image
                  src="/icon/right.png"
                  width={40}
                  height={40}
                  alt="right"
                />
              </div>
              <p className="text-black text-[12px] font-[500] leading-4">
                CV Improvement Tips
              </p>
            </div>
            <div className="flex justify-start gap-2">
              <div className="w-4 h-4">
                <Image
                  src="/icon/right.png"
                  width={40}
                  height={40}
                  alt="right"
                />
              </div>
              <p className="text-black text-[12px] font-[500] leading-4">
                Single User
              </p>
            </div>
          </div>
          <Link href="/pricing" className="mt-3">
            <PrimaryButton backgroundColor="black">Purchase Now</PrimaryButton>
          </Link>
        </div>
        <div className="hover-box 2xl:max-w-[438px] max-w-[348px] pt-8 2xl:pb-8 pb-6 2xl:px-6 px-4">
          <div className="flex flex-col justify-between">
            <div className="h-8 flex justify-between items-start">
              <p className="font-bold text-[12px] text-black">PREMIUM PLAN</p>
              <p
                style={{
                  color: "white",
                  fontSize: "10.66px",
                  fontWeight: 600,
                  lineHeight: "16px",
                  background:
                    "linear-gradient(270deg, #FF9733 -8.79%, #FF69AA 19.91%, #B357FB 48.15%, #4B7EFF 74.9%, #00E6FF 109.34%)",
                }}
                className="rounded-md px-3 py-2"
              >
                Best Deal
              </p>
            </div>
            <div className="flex items-end">
              <p className="font-gilory font-normal 2xl:text-[52px] text-[35px] 2xl:leading-[56px] leading-[38px] text-black">
                $150.50
              </p>
              <p className="font-normal text-[14px] leading-[24px] text-secondary">
                / month
              </p>
            </div>
            <p className="mt-4 font-normal leading-4 text-[14px] text-secondary">
              All the basic features to boost your business activities
            </p>
            <div className="bg-[#0000001F] w-full h-[1px] rounded-full mt-4"></div>
          </div>
          <div className="flex flex-col gap-4 my-4">
            <div className="flex justify-start gap-2">
              <div className="w-4 h-4">
                <Image
                  src="/icon/right.png"
                  width={40}
                  height={40}
                  alt="right"
                />
              </div>
              <p className="text-black text-[12px] font-[500] leading-4">
                Lifetime Access
              </p>
            </div>
            <div className="flex justify-start gap-2">
              <div className="w-4 h-4">
                <Image
                  src="/icon/right.png"
                  width={40}
                  height={40}
                  alt="right"
                />
              </div>
              <p className="text-black text-[12px] font-[500] leading-4">
                Daily limit - 150 Job Applications
              </p>
            </div>
            <div className="flex justify-start gap-2">
              <div className="w-4 h-4">
                <Image
                  src="/icon/right.png"
                  width={40}
                  height={40}
                  alt="right"
                />
              </div>
              <p className="text-black text-[12px] font-[500] leading-4">
                Indeed Automation
              </p>
            </div>
            <div className="flex justify-start gap-2">
              <div className="w-4 h-4">
                <Image
                  src="/icon/right.png"
                  width={40}
                  height={40}
                  alt="right"
                />
              </div>
              <p className="text-black text-[12px] font-[500] leading-4">
                LinkedIn Automation
              </p>
            </div>
            <div className="flex justify-start gap-2">
              <div className="w-4 h-4">
                <Image
                  src="/icon/right.png"
                  width={40}
                  height={40}
                  alt="right"
                />
              </div>
              <p className="text-black text-[12px] font-[500] leading-4">
                Glassdor Automation
              </p>
            </div>
            <div className="flex justify-start gap-2">
              <div className="w-4 h-4">
                <Image
                  src="/icon/right.png"
                  width={40}
                  height={40}
                  alt="right"
                />
              </div>
              <p className="text-black text-[12px] font-[500] leading-4">
                Ziprecruiter Automation
              </p>
            </div>
            <div className="flex justify-start gap-2">
              <div className="w-4 h-4">
                <Image
                  src="/icon/right.png"
                  width={40}
                  height={40}
                  alt="right"
                />
              </div>
              <p className="text-black text-[12px] font-[500] leading-4">
                Career Builder Automation
              </p>
            </div>
            <div className="flex justify-start gap-2">
              <div className="w-4 h-4">
                <Image
                  src="/icon/right.png"
                  width={40}
                  height={40}
                  alt="right"
                />
              </div>
              <p className="text-black text-[12px] font-[500] leading-4">
                Seek Automation
              </p>
            </div>
            <div className="flex justify-start gap-2">
              <div className="w-4 h-4">
                <Image
                  src="/icon/right.png"
                  width={40}
                  height={40}
                  alt="right"
                />
              </div>
              <p className="text-black text-[12px] font-[500] leading-4">
                Dice Automation
              </p>
            </div>
            <div className="flex justify-start gap-2">
              <div className="w-4 h-4">
                <Image
                  src="/icon/right.png"
                  width={40}
                  height={40}
                  alt="right"
                />
              </div>
              <p className="text-black text-[12px] font-[500] leading-4">
                Simply Hired Automation
              </p>
            </div>
            <div className="flex justify-start gap-2">
              <div className="w-4 h-4">
                <Image
                  src="/icon/right.png"
                  width={40}
                  height={40}
                  alt="right"
                />
              </div>
              <p className="text-black text-[12px] font-[500] leading-4">
                Up to - 1 Resumes / CV&apos;s
              </p>
            </div>
            <div className="flex justify-start gap-2">
              <div className="w-4 h-4">
                <Image
                  src="/icon/right.png"
                  width={40}
                  height={40}
                  alt="right"
                />
              </div>
              <p className="text-black text-[12px] font-[500] leading-4">
                Day Wise Analytics
              </p>
            </div>
            <div className="flex justify-start gap-2">
              <div className="w-4 h-4">
                <Image
                  src="/icon/right.png"
                  width={40}
                  height={40}
                  alt="right"
                />
              </div>
              <p className="text-black text-[12px] font-[500] leading-4">
                CV Improvement Tips
              </p>
            </div>
            <div className="flex justify-start gap-2">
              <div className="w-4 h-4">
                <Image
                  src="/icon/right.png"
                  width={40}
                  height={40}
                  alt="right"
                />
              </div>
              <p className="text-black text-[12px] font-[500] leading-4">
                Single User
              </p>
            </div>
          </div>
          <Link href="/pricing" className="mt-3">
            <PrimaryButton>Purchase Now</PrimaryButton>
          </Link>
        </div>
        <div className="hover-box 2xl:max-w-[438px] max-w-[348px] pt-8 2xl:pb-8 pb-6 2xl:px-6 px-4">
          <div className="flex flex-col justify-between">
            <p className="font-bold text-[12px] text-black mb-3">
              UNLIMITED PLAN
            </p>
            <div className="flex items-end">
              <p className="font-gilory font-normal 2xl:text-[52px] text-[35px] 2xl:leading-[56px] leading-[38px] text-black">
                $225.50
              </p>
              <p className="font-normal text-[14px] leading-[24px] text-secondary">
                / month
              </p>
            </div>
            <p className="mt-4 font-normal leading-4 text-[14px] text-secondary">
              All the basic features to boost your business activities
            </p>
            <div className="bg-[#0000001F] w-full h-[1px] rounded-full mt-4"></div>
          </div>
          <div className="flex flex-col gap-4 my-4">
            <div className="flex justify-start gap-2">
              <div className="w-4 h-4">
                <Image
                  src="/icon/right.png"
                  width={40}
                  height={40}
                  alt="right"
                />
              </div>
              <p className="text-black text-[12px] font-[500] leading-4">
                Lifetime Access
              </p>
            </div>
            <div className="flex justify-start gap-2">
              <div className="w-4 h-4">
                <Image
                  src="/icon/right.png"
                  width={40}
                  height={40}
                  alt="right"
                />
              </div>
              <p className="text-black text-[12px] font-[500] leading-4">
                Daily limit - 150 Job Applications
              </p>
            </div>
            <div className="flex justify-start gap-2">
              <div className="w-4 h-4">
                <Image
                  src="/icon/right.png"
                  width={40}
                  height={40}
                  alt="right"
                />
              </div>
              <p className="text-black text-[12px] font-[500] leading-4">
                Indeed Automation
              </p>
            </div>
            <div className="flex justify-start gap-2">
              <div className="w-4 h-4">
                <Image
                  src="/icon/right.png"
                  width={40}
                  height={40}
                  alt="right"
                />
              </div>
              <p className="text-black text-[12px] font-[500] leading-4">
                LinkedIn Automation
              </p>
            </div>
            <div className="flex justify-start gap-2">
              <div className="w-4 h-4">
                <Image
                  src="/icon/right.png"
                  width={40}
                  height={40}
                  alt="right"
                />
              </div>
              <p className="text-black text-[12px] font-[500] leading-4">
                Glassdor Automation
              </p>
            </div>
            <div className="flex justify-start gap-2">
              <div className="w-4 h-4">
                <Image
                  src="/icon/right.png"
                  width={40}
                  height={40}
                  alt="right"
                />
              </div>
              <p className="text-black text-[12px] font-[500] leading-4">
                Ziprecruiter Automation
              </p>
            </div>
            <div className="flex justify-start gap-2">
              <div className="w-4 h-4">
                <Image
                  src="/icon/right.png"
                  width={40}
                  height={40}
                  alt="right"
                />
              </div>
              <p className="text-black text-[12px] font-[500] leading-4">
                Career Builder Automation
              </p>
            </div>
            <div className="flex justify-start gap-2">
              <div className="w-4 h-4">
                <Image
                  src="/icon/right.png"
                  width={40}
                  height={40}
                  alt="right"
                />
              </div>
              <p className="text-black text-[12px] font-[500] leading-4">
                Seek Automation
              </p>
            </div>
            <div className="flex justify-start gap-2">
              <div className="w-4 h-4">
                <Image
                  src="/icon/right.png"
                  width={40}
                  height={40}
                  alt="right"
                />
              </div>
              <p className="text-black text-[12px] font-[500] leading-4">
                Dice Automation
              </p>
            </div>
            <div className="flex justify-start gap-2">
              <div className="w-4 h-4">
                <Image
                  src="/icon/right.png"
                  width={40}
                  height={40}
                  alt="right"
                />
              </div>
              <p className="text-black text-[12px] font-[500] leading-4">
                Simply Hired Automation
              </p>
            </div>
            <div className="flex justify-start gap-2">
              <div className="w-4 h-4">
                <Image
                  src="/icon/right.png"
                  width={40}
                  height={40}
                  alt="right"
                />
              </div>
              <p className="text-black text-[12px] font-[500] leading-4">
                Up to - 1 Resumes / CV&apos;s
              </p>
            </div>
            <div className="flex justify-start gap-2">
              <div className="w-4 h-4">
                <Image
                  src="/icon/right.png"
                  width={40}
                  height={40}
                  alt="right"
                />
              </div>
              <p className="text-black text-[12px] font-[500] leading-4">
                Day Wise Analytics
              </p>
            </div>
            <div className="flex justify-start gap-2">
              <div className="w-4 h-4">
                <Image
                  src="/icon/right.png"
                  width={40}
                  height={40}
                  alt="right"
                />
              </div>
              <p className="text-black text-[12px] font-[500] leading-4">
                CV Improvement Tips
              </p>
            </div>
            <div className="flex justify-start gap-2">
              <div className="w-4 h-4">
                <Image
                  src="/icon/right.png"
                  width={40}
                  height={40}
                  alt="right"
                />
              </div>
              <p className="text-black text-[12px] font-[500] leading-4">
                Single User
              </p>
            </div>
          </div>
          <Link href="/pricing" className="mt-3">
            <PrimaryButton backgroundColor="black">Purchase Now</PrimaryButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
