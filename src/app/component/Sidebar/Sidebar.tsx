"use client";

import {
  BadgeCheck,
  Component,
  FileSearch2,
  FileText,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathName = usePathname();

  const links = [
    // { name: "Dashboard", href: "/dashboard", icon: <Component className="xl:w-7 xl:h-7 md:w-5 md:h-5 md:mr-1 xl:mr-2" /> },
    {
      name: "Landing Page",
      href: "/",
      icon: (
        <FileText className="xl:w-7 xl:h-7 md:w-5 md:h-5 md:mr-1 xl:mr-2" />
      ),
    },
    {
      name: "Resume Gpt",
      href: "/resume-gpt",
      icon: (
        <Sparkles className="xl:w-7 xl:h-7 md:w-5 md:h-5 md:mr-1 xl:mr-2" />
      ),
    },
    {
      name: "Resume Score",
      href: "/resume-score",
      icon: (
        <BadgeCheck className="xl:w-7 xl:h-7 md:w-5 md:h-5 md:mr-1 xl:mr-2" />
      ),
    },
    {
      name: "Resume Summary",
      href: "/resume-summary",
      icon: (
        <FileSearch2 className="xl:w-7 xl:h-7 md:w-5 md:h-5 md:mr-1 xl:mr-2" />
      ),
    },
  ];

  return (
    <nav className="fixed sm:h-full md:w-[250px] xl:w-[400px] bg-black text-white flex flex-col items-left sm:p-6 sm:gap-y-10 sm:static">
      {/* Mobile Top Navbar */}
      <div className="sm:hidden fixed top-0 left-0 right-0 bg-black flex justify-between items-center p-4 border-b border-white/20">
        <Link href="/">
          <Image
            src="/icon/logo.png"
            alt="dummy"
            height={50}
            width={50}
            className="w-20"
          />
        </Link>
        <Link href="/login" className="bg-white" legacyBehavior>
          <a className="text-white text-sm font-medium">Login</a>
        </Link>
      </div>

      <Link href="/" className="hidden sm:block mt-10">
        <Image
          className="w-[150px] 2xl:w-[250px] px-4"
          src="/icon/logo.png"
          alt="dummy"
          height={200}
          width={200}
        />
      </Link>

      <ul className="hidden sm:flex flex-col space-y-4 w-full">
        {links.map((link) => (
          <li key={link.href} className="w-full">
            <Link href={link.href} legacyBehavior>
              <a
                className={`font-dmSans xl:text-xl md:text-md flex flex-row items-center gap-x-1 px-4 py-2 rounded-lg w-full ${
                  pathName === link.href
                    ? "text-white bg-white/20 border border-white"
                    : "text-white/60"
                }`}
              >
                {link.icon}
                {link.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>

      <div className="hidden sm:block mt-auto">
        <Link href="/login" legacyBehavior>
          <a className="text-white bg-white/15 hover:bg-white/20 font-semibold md:text-md xl:text-lg text-center py-2 border-2 rounded-lg block mx-4">
            Login
          </a>
        </Link>
      </div>

      <div className="fixed bottom-0 w-full sm:hidden bg-black flex justify-around items-center p-4 border-t border-white/20">
        {links.map((link) => (
          <Link href={link.href} key={link.href} legacyBehavior>
            <a
              className={`text-center flex flex-col items-center flex-1 ${
                pathName === link.href ? "text-white" : "text-white/60"
              }`}
            >
              <div className="flex justify-center items-center mb-1">
                {link.icon}
              </div>

              <span className="text-xs">{link.name}</span>
            </a>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Sidebar;
