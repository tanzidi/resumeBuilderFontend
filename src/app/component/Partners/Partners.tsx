import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import PrimaryButton from "../button/PrimaryButton";

const Partners = () => {
  return (
    <div className="w-full py-8 md:py-20 px-5 lg:px-[94px] 2xl:px-[140px] mt-10 sm:mt-16">
      <div className="overflow-x-auto whitespace-nowrap">
        <div className="flex justify-between">
          <Image
            className="h-8 md:h-10 w-fit inline-block me-8 sm:me-12 md:me-20"
            src="/partner/partner1.png"
            alt="dummy"
            height={200}
            width={200}
          />
          <Image
            className="h-8 md:h-10 w-fit inline-block me-8 sm:me-12 md:me-20"
            src="/partner/partner2.png"
            alt="dummy"
            height={200}
            width={200}
          />
          <Image
            className="h-8 md:h-10 w-fit inline-block me-8 sm:me-12 md:me-20"
            src="/partner/partner3.png"
            alt="dummy"
            height={200}
            width={200}
          />
          <Image
            className="h-8 md:h-10 w-fit inline-block me-8 sm:me-12 md:me-20"
            src="/partner/partner4.png"
            alt="dummy"
            height={200}
            width={200}
          />
          <Image
            className="h-8 md:h-10 w-fit inline-block"
            src="/partner/partner5.png"
            alt="dummy"
            height={200}
            width={200}
          />
        </div>
      </div>
      <div
        className="mt-16 sm:mt-28 w-full min-h-[93px] rounded-3xl  font-semibold"
        style={{
          background: `linear-gradient(0deg, #080815 0%, #151533 100%), url('/bgImage/shadow_started.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="flex flex-col md:flex-row justify-between items-center overflow-hidden gap-4 sm:px-10 px-4 py-8"
          style={{
            background: `url('/bgImage/shadow_started.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <p className="text-white 2xl:text-[38px] sm:text-[25.33px] text-[24px] 2xl:leading-[44px] sm:leading-[29.33px] leading-[30px] text-center">
            Take Your Career One Step Ahead With Us
          </p>

          <Link
            href="/login"
            className="ms-auto me-auto md:me-0 w-[180px] 2xl:w-[218px]"
          >
            <PrimaryButton backgroundColor="#FFFFFF" color="#000000">
              Get Started <MoveRight className="inline-block" />
            </PrimaryButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Partners;
