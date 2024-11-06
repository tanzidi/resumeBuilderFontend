import React from "react";

const PrimaryButton = ({
  children,
  backgroundColor = "#4929ff",
  color = "white",
}: {
  children: React.ReactNode;
  backgroundColor?: string;
  color?: string;
}) => {
  return (
    <button
      style={{
        fontWeight: 600,
        backgroundColor,
        color,
      }}
      className="flex justify-center items-center gap-2 py-[13px] w-full 2xl:py-[20px] rounded-full transition-transform duration-700 ease-in-out hover:scale-105 font-dmSans sm:text-[14px] 2xl:text-[20px] text-[16px] 2xl:leading-[32px] sm:leading-[21px] leading-[26px]"
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
