import React from "react";

interface TextareaWithLabelProps {
  name: string;
  label?: string;
  errorMessage?: string | null;
  placeholder?: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
}

const Textarea: React.FC<TextareaWithLabelProps> = ({
  name,
  label,
  placeholder = "Enter text",
  required = false,
  value,
  errorMessage,
  onChange,
  rows = 4,
}) => {
  return (
    <div className="flex flex-col w-full font-dmSans">
      {label && (
        <label className="ms-1 mb-2 text-[13px] leading-[13px] text-secondary font-normal">
          {label}
          {required ? <span className="text-red-600">*</span> : " (Optional)"}
        </label>
      )}
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        rows={rows}
        className="border border-[#E1E4F5] px-3 py-2 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#b5b7c5] font-normal"
      />
      {errorMessage && (
        <label className="my-[2px] ms-2 text-[10px] text-red-500">
          {errorMessage}
        </label>
      )}
    </div>
  );
};

export default Textarea;
