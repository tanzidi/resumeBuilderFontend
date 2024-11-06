import React from "react";

interface DropdownProps {
  index: number;
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  index,
  title,
  content,
  isOpen,
  onClick,
}) => (
  <div
    onClick={onClick}
    style={{
      marginBottom: "10px",
      padding: "20px 16px",
      background: "#ffffff",
      cursor: "pointer",
      borderRadius: "16px",
      boxShadow: "0px 0px 6px 0px #07041514",
    }}
    className={`min-h-16 px-7 sm:py-3 py-4 ${
      isOpen && "border-t-2 border-[#4929FF]"
    }`}
  >
    <button
      style={{
        marginTop: "10px",
        marginBottom: "10px",
        border: "none",
        cursor: "pointer",
      }}
      className="text-sm 2xl:text-lg font-normal"
    >
      <div
        className={`inline-flex items-center justify-center rounded-full border border-[#0000001A] me-2
    ${isOpen ? "bg-black text-white" : "bg-white text-black"}`}
        style={{ width: "26.6px", height: "26.6px" }}
      >
        {index}
      </div>
      <div
        style={{
          fontWeight: "bolder",
          textAlign: "left",
        }}
        className="inline"
      >
        {title}
      </div>
    </button>
    {isOpen && (
      <div>
        <p
          className="font-dmSans text-justify sm:text-[10.66px] text-[8px] sm:leading-[17.33px] leading-[14px] text-secondary"
          style={{
            fontWeight: 400,
            textAlign: "left",
          }}
        >
          {content}
        </p>
      </div>
    )}
  </div>
);

export default Dropdown;
