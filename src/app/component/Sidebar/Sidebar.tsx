'use client'
import { BadgeCheck, Component, FileSearch2, FileText, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
    const pathName = usePathname();

    const links = [
        { name: "Dashboard", href: "/dashboard", icon: <Component className="w-5 h-5 mr-2" /> },
        { name: "Resume Builder", href: "/resume-builder", icon: <FileText className="w-5 h-5 mr-2" /> },
        { name: "Resume Gpt", href: "/resume-gpt", icon: <Sparkles className="w-5 h-5 mr-2" /> },
        { name: "Resume Score", href: "/resume-score", icon: <BadgeCheck className="w-5 h-5 mr-2" />},
        { name: "Resume Summary", href: "/resume-summary", icon: <FileSearch2 className="w-5 h-5 mr-2" />},
    ];
  return (
    <nav className="h-full w-[400px] bg-black text-white flex flex-col items-left p-6 gap-y-10">
      <Link className="mt-10" href="/">
        <Image
          className="w-[150px] 2xl:w-[250px] px-4"
          src="/icon/logo.png"
          alt="dummy"
          height={200}
          width={200}
        />
      </Link>
      <ul className="flex flex-col space-y-4 w-full">
        {links.map((link) => (
            <li key={link.href} className="w-full">
            <Link href={link.href} legacyBehavior>
                <a
                className={`font-dmSans text-xl flex flex-row items-center gap-x-1 px-4 py-2 rounded-lg w-full ${
                    pathName === link.href
                    ? "text-white text-l bg-white/20 border border-white rounded-lg"
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

    </nav>
  );
};

export default Sidebar;
