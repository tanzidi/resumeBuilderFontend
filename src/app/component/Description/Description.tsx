import { MoveRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import PrimaryButton from "../button/PrimaryButton";

const Description = () => {
  return (
    <div className="py-8 md:py-0 flex flex-col px-5">
      <h1 className="text-header text-center">
        Automate Your Job
        <br className="sm:block hidden" /> Application Process
      </h1>
      <p className="sm:text-[16px] 2xl:text-[24px] text-[14px] 2xl:leading-[36px] sm:leading-[24px] leading-[20px] font-dmSans text-secondary font-normal mb-5 text-center">
        Our AI Job Search tool automatically apply to all the jobs on platforms
        <br className="sm:block hidden" />
        like Linkedin, Indeed and Zipercruiter using Job GPT.
      </p>
      <div
        className="flex sm:flex-row flex-col justify-center items-center gap-3 font-dmSans"
        style={{
          fontSize: "12px",
          fontWeight: 400,
          lineHeight: "16px",
          marginBottom: "20px",
        }}
      >
        <div className="flex-row flex">
          <div className="flex me-4">
            <Star fill="rgb(245 131 0)" strokeWidth={0} size={16} />
            <Star fill="rgb(245 131 0)" strokeWidth={0} size={16} />
            <Star fill="rgb(245 131 0)" strokeWidth={0} size={16} />
            <Star fill="rgb(245 131 0)" strokeWidth={0} size={16} />
            <Star fill="rgb(245 131 0)" strokeWidth={0} size={16} />
          </div>
          <p>4900+ 5 Stars</p>
        </div>
        <div className="flex justify-center items-center sm:ms-8">
          <div className="w-9 h-9 rounded-full -mr-4">
            <Image
              className="h-full"
              src="/icon/user_1.png"
              alt="dummy"
              height={200}
              width={200}
            />
          </div>
          <div className="w-9 h-9 rounded-full -mr-4">
            <Image
              className="h-full"
              src="/icon/user_2.png"
              alt="dummy"
              height={200}
              width={200}
            />
          </div>
          <div className="w-9 h-9 rounded-full -mr-4">
            <Image
              className="h-full"
              src="/icon/user_3.png"
              alt="dummy"
              height={200}
              width={200}
            />
          </div>
          <div className="w-9 h-9 rounded-full -mr-4">
            <Image
              className="h-full"
              src="/icon/user_4.png"
              alt="dummy"
              height={200}
              width={200}
            />
          </div>
          <div className="w-9 h-9 rounded-full -mr-4">
            <Image
              className="h-full"
              src="/icon/user_5.png"
              alt="dummy"
              height={200}
              width={200}
            />
          </div>
          <p className="ms-7">200+ Users</p>
        </div>
      </div>
      <Link href="/login" className="mx-auto w-[180px] 2xl:w-[218px]">
        <PrimaryButton>
          Get Started <MoveRight className="inline-block" />
        </PrimaryButton>
      </Link>
      <div>
        <Image
          src="/dummybg.png"
          alt="dummy"
          height={500}
          width={500}
          className="mx-auto 2xl:border-[12px] sm:border-[8px] border-[6px] border-[#170C3D] md:aspect-video sm:aspect-[5/3] aspect-[5/4] 2xl:w-[1062px] sm:w-[708px] rounded-2xl sm:mt-20 mt-8 sm:mb-20 mb-0"
        />
      </div>
    </div>
  );
};

export default Description;
