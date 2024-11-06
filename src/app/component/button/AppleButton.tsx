import Image from "next/image";
import React from "react";

const AppleButton = ({ text }: { text: string }) => {
  return (
    <div className="flex justify-center items-center px-4 py-2 border-[#E1E4F5] border rounded-3xl">
      <Image
        alt="apple"
        src="/icon/appleLogo.png"
        width={18}
        height={21}
        className="me-4"
      />
      <p className="inline font-dmSans font-medium 2xl:text-l text-base">
        {text}
      </p>
    </div>
  );
};

export default AppleButton;
