import ContentEditable from "react-contenteditable";

interface InputProps<K extends string, V extends string | string[]> {
  label?: string;
  labelClassName?: string;

  name: K;
  value?: V;
  placeholder: string;
  onChange: (name: K, value: V) => void;
}

export const InputGroupWrapper = ({
  label,
  className,
  children,
}: {
  label?: string;
  className?: string;
  children?: React.ReactNode;
}) => (
  <div className={`${className} flex flex-col w-full font-dmSans`}>
    {label && (
      <label className="ms-1 mb-2 2xl:text-[20px] text-[13px] 2xl:leading-[26px] leading-[13px] text-secondary font-normal">
        {label}
      </label>
    )}
    {children}
  </div>
);

export const INPUT_CLASS_NAME =
  "border border-[#E1E4F5] 2xl:px-[20px] sm:px-[13px] px-3 2xl:py-[21px] py-[14px] rounded-xl focus:outline-none focus:ring-1 focus:ring-[#b5b7c5] font-normal";

export const Input = <K extends string>({
  name,
  value = "",
  placeholder,
  onChange,
  label,
  labelClassName,
}: InputProps<K, string>) => (
  <InputGroupWrapper label={label} className={labelClassName}>
    <input
      type="text"
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(name, e.target.value)}
      className={INPUT_CLASS_NAME}
    />
  </InputGroupWrapper>
);

export const BulletListTextArea = <T extends string>({
  label,
  labelClassName: wrapperClassName,
  name,
  value: bulletListStrings = [],
  onChange,
  showBulletPoints = true,
}: InputProps<T, string[]> & {
  showBulletPoints?: boolean;
}) => {
  const html = getHTMLFromBulletListStrings(bulletListStrings);

  return (
    <InputGroupWrapper label={label} className={wrapperClassName}>
      <ContentEditable
        contentEditable={true}
        className={`${INPUT_CLASS_NAME} cursor-text [&>div]:list-item ${
          showBulletPoints ? "!pl-7" : "[&>div]:list-['']"
        }`}
        onChange={(e) => {
          if (e.type === "input") {
            const { innerText } = e.currentTarget as HTMLDivElement;
            const newBulletListStrings =
              getBulletListStringsFromInnerText(innerText);
            onChange(name, newBulletListStrings);
          }
        }}
        html={html}
      />
    </InputGroupWrapper>
  );
};

const NORMALIZED_LINE_BREAK = "\n";
const normalizeLineBreak = (str: string) =>
  str.replace(/\r?\n/g, NORMALIZED_LINE_BREAK);
const dedupeLineBreak = (str: string) =>
  str.replace(/\n\n/g, NORMALIZED_LINE_BREAK);
const getStringsByLineBreak = (str: string) => str.split(NORMALIZED_LINE_BREAK);

const getBulletListStringsFromInnerText = (innerText: string) => {
  const innerTextWithNormalizedLineBreak = normalizeLineBreak(innerText);

  let newInnerText = dedupeLineBreak(innerTextWithNormalizedLineBreak);

  if (newInnerText === NORMALIZED_LINE_BREAK) {
    newInnerText = "";
  }
  return getStringsByLineBreak(newInnerText);
};

const getHTMLFromBulletListStrings = (bulletListStrings: string[]) => {
  if (bulletListStrings.length === 0) {
    return "<div></div>";
  }

  return bulletListStrings.map((text) => `<div>${text}</div>`).join("");
};
