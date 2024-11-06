interface InputWithLabelProps {
  name: string;
  label?: string;
  errorMassage?: string;
  placeholder?: string;
  required?: boolean;
  max?: number;
  min?: number;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputWithLabelProps> = ({
  name,
  label,
  placeholder = "Enter text",
  required = false,
  value,
  max,
  min,
  errorMassage,
  onChange,
}) => {
  return (
    <div className="flex flex-col w-full font-dmSans">
      {label && (
        <label className="ms-1 mb-2 2xl:text-[20px] text-[13px] 2xl:leading-[26px] leading-[13px] text-secondary font-normal">
          {label}
          {required ? <span className="_text-red-600">*</span> : " (Optional)"}
        </label>
      )}
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        maxLength={max}
        minLength={min}
        className="border border-[#E1E4F5] 2xl:px-[20px] sm:px-[13px] px-3 2xl:py-[21px] py-[14px] rounded-xl focus:outline-none focus:ring-1 focus:ring-[#b5b7c5] font-normal"
      />
      {errorMassage && (
        <label className="my-[2px] ms-2 text-[10px] text-red-500">
          {errorMassage}
        </label>
      )}
    </div>
  );
};

export default Input;
