import TagLine from "../button/TagLine";
import Image from "next/image";

const Process = () => {
  return (
    <div className="flex flex-col py-4 px-5 lg:px-[94px] 2xl:px-[140px]">
      <TagLine tag="Our Process" />

      <h1 className="text-header text-center">
        How Placed Works in
        <br />3 Simple Steps
      </h1>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-16 mt-8">
        <div className="flex justify-center items-center flex-col">
          <div className="p-6 bg-[#FFF0E5] rounded-full mb-4">
            <Image
              className="h-full"
              src="/icon/clock.png"
              alt="dummy"
              height={32}
              width={32}
            />
          </div>
          <h3
            style={{
              fontWeight: 700,
              textAlign: "center",
            }}
            className="2xl:text-[24px] text-[16px] font-gilory mb-2"
          >
            Save Your Time
          </h3>
          <p
            className="text-secondary w-full font-dmSans 2xl:text-[16px] sm:text-[10.66px] text-[14px] 2xl:leading-[24px] sm:leading-[16px] leading-[20px]"
            style={{
              fontWeight: 400,
              textAlign: "center",
            }}
          >
            Automate your job applications, saving hours of manual work. Let
            technology streamline your search, freeing up valuable time.
          </p>
        </div>
        <div className="flex justify-center items-center flex-col">
          <div className="p-6 bg-[#FFF0FA] rounded-full mb-4">
            <Image
              className="h-full"
              src="/icon/ai.png"
              alt="dummy"
              height={32}
              width={32}
            />
          </div>
          <h3
            style={{
              fontWeight: 700,
              textAlign: "center",
            }}
            className="2xl:text-[24px] text-[16px] font-gilory mb-2"
          >
            Artificial Intelligence
          </h3>
          <p
            className="text-secondary w-full font-dmSans 2xl:text-[16px] sm:text-[10.66px] text-[14px] 2xl:leading-[24px] sm:leading-[16px] leading-[20px]"
            style={{
              fontWeight: 400,
              textAlign: "center",
            }}
          >
            Our Job GPT simplifies the application process by automatically
            completing job forms for you, using the information you&apos;ve
            provided.
          </p>
        </div>
        <div className="flex justify-center items-center flex-col">
          <div className="p-6 bg-[#E0FAFF] rounded-full mb-4">
            <Image
              className="h-full"
              src="/icon/algorithm.png"
              alt="dummy"
              height={32}
              width={32}
            />
          </div>
          <h3
            style={{
              fontWeight: 700,
              textAlign: "center",
            }}
            className="2xl:text-[24px] text-[16px] font-gilory mb-2"
          >
            Advanced Algorithm
          </h3>
          <p
            className="text-secondary w-full font-dmSans 2xl:text-[16px] sm:text-[10.66px] text-[14px] 2xl:leading-[24px] sm:leading-[16px] leading-[20px]"
            style={{
              fontWeight: 400,
              textAlign: "center",
            }}
          >
            Our scripts leverage advanced AI job search algorithms, ensuring
            your profiles remain safe and never get blocked by platforms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Process;
