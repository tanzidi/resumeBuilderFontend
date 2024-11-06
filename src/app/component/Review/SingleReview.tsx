import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";

const SingleReview = () => {
  return (
    <div
      style={{
        borderRadius: "16px",
        backgroundColor: "#FFFFFF",
        boxShadow: "0px 0px 6px 0px #0704151A",
        flexShrink: 0,
      }}
      className="2xl:px-8 sm:px-[22px] px-4 2xl:py-8 sm:py-[22px] py-5 font-dmSans"
    >
      <div className="flex gap-2 justify-start items-center">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            fill="#F59E0B"
            strokeWidth={0}
            size={13}
            className="size-4 sm:size-[22px]"
          />
        ))}
      </div>
      <p className="text-wrap 2xl:text-[18px] text-[14px] 2xl:leading-[28px] leading-[18.66px] font-normal text-justify 2xl:w-[468px] sm:w-[312px] w-[296px] 2xl:mt-8 sm:mt-[22px] mt-5">
        “You made it so simple. My new site is so much faster and easier to work
        with than my old site. I just choose the page, make the change.”
      </p>
      <div className="flex justify-start items-start 2xl:mt-[42px] sm:mt-[28px] mt-[24px]">
        <Image
          src="/profile.png"
          alt="dummy"
          height={56}
          width={56}
          className="rounded-full 2xl:size-14 size-10"
        />
        <div className="flex-col flex ms-4">
          <p className="font-bold 2xl:text-[16px] text-[14px] 2xl:leading-[28px] leading-[18px]">
            Leslie Alexander
          </p>
          <p
            style={{
              fontSize: "12px",
              fontWeight: 400,
              lineHeight: "14.66px",
              color: "#52525B",
            }}
            className="text-secondary font-normal 2xl:text-[14px] text-[12px] leading-[22px]"
          >
            Freelance React Developer
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleReview;
