interface SelectInputProps {
  label: string;
  options: string[];
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
}

const SelectInput: React.FC<SelectInputProps> = ({
  label,
  options,
  required = false,
  value,
  onChange,
}) => {
  return (
    <div className="flex flex-col w-full font-dmSans">
      <label className="ms-1 mb-2 2xl:text-[20px] text-[13px] 2xl:leading-[26px] leading-[13px] text-secondary font-normal">
        {label}
        {required ? <span className="_text-red-600">*</span> : " (Optional)"}
      </label>
      <select
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        className="border border-[#E1E4F5] 2xl:px-[20px] sm:px-[13px] px-3 2xl:py-[21px] py-[14px] rounded-xl focus:outline-none focus:ring-1 focus:ring-[#b5b7c5] font-normal"
      >
        <option value="" disabled>
          Select One
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
