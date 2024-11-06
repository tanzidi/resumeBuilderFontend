import { ChevronDown, CircleUser } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="my-4 mt-[20px] px-5 lg:px-[94px] 2xl:px-[140px] flex justify-between items-center">
      <Link className="" href="/">
        <Image
          className="w-[102px]  2xl:w-[154px]"
          src="/icon/logo_black.png"
          alt="dummy"
          height={200}
          width={200}
        />
      </Link>
      <div
        className="justify-center items-center font-dmSans hidden sm:flex text-[10.66px] 2xl:text-[16px]"
        style={{
          fontWeight: 500,
          lineHeight: "16px",
          textAlign: "left",
        }}
      >
        <Link className="lg:px-5 px-3 py-1" href="/#how_to_use">
          How to use Placed
        </Link>
        <Link className="lg:px-5 px-3 py-1" href="/#features">
          <span
            style={{
              background:
                "linear-gradient(270deg, #FF9733 0%, #FF69AA 24.29%, #9348CE 45.62%, #4B7EFF 70.85%, #00B0FF 100%)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            AI Tools
          </span>

          <ChevronDown size={17} className="inline-block" />
        </Link>
        <Link className="lg:px-5 px-3 py-1" href="/#features">
          AI Cover Letter Generator
        </Link>
        <Link className="lg:px-5 px-3 py-1" href="/#pricing">
          Pricing
        </Link>
      </div>
      <Link
        href="/login"
        className="hidden sm:flex justify-evenly items-center text-white rounded-[26px] bg-black cursor-pointer 2xl:px-5 px-3 2xl:py-3 py-2 gap-1 2xl:gap-[6px]"
      >
        <CircleUser size={16} className="inline-block size-4 2xl:size-6" />
        <p
          style={{
            fontSize: "10px",
            fontWeight: 500,
            lineHeight: "16px",
            textAlign: "center",
          }}
        >
          Login
        </p>
      </Link>
      <Image
        className="sm:hidden block cursor-pointer"
        src="/icon/menu.png"
        alt="dummy"
        height={20}
        width={20}
      />
    </nav>
  );
};

export default Header;
