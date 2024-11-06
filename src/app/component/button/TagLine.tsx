const TagLine = ({ tag }: { tag: string }) => {
  return (
    <div
      className="font-dmSans mx-auto text-[15px] leading-[24px] rounded-full 2xl:mb-5 sm::mb-[13px] mb-4"
      style={{
        padding: "6px 16px",
        fontWeight: 600,
        textAlign: "center",
        background: "#EBEFF5",
      }}
    >
      <p className="text-[#202939]">{tag}</p>
    </div>
  );
};

export default TagLine;
