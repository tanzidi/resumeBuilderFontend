import { ChevronDown, ChevronUp } from "lucide-react";
import React from "react";

interface DropdownProps {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}

const Dropdown2: React.FC<DropdownProps> = ({
  title,
  content,
  isOpen,
  onClick,
}) => (
  <div
    onClick={onClick}
    className={`min-h-[13.33] 2xl:py-7 2xl:px-6 sm:py-6 sm:px-5 px-4 py-4 mb-4 cursor-pointer rounded-2xl font-dmSans transition-transform duration-700 ease-in-out hover:scale-[1.01] ${
      isOpen
        ? "bg-white border border-gray-100 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]"
        : "bg-[#F6F5FF]"
    }`}
  >
    <button
      style={{
        margin: "6.66px 0 0 0",
        border: "none",
        cursor: "pointer",
      }}
      className="flex justify-between w-full"
    >
      <div
        style={{
          fontSize: "13.33px",
          fontWeight: "bolder",
          lineHeight: "18.66px",
          textAlign: "left",
        }}
        className="inline"
      >
        {title}
      </div>
      {isOpen ? <ChevronUp /> : <ChevronDown />}
    </button>
    {isOpen && (
      <div>
        <p
          style={{
            fontSize: "10.66px",
            fontWeight: 400,
            lineHeight: "17.33px",
            textAlign: "left",
            marginTop: "6.66px",
          }}
        >
          {content}
        </p>
      </div>
    )}
  </div>
);

export default Dropdown2;
