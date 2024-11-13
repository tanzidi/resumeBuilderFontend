import Link from "next/link";

const Header = () => {
  return (
    <nav className="my-4 mt-[20px] px-5 lg:px-[94px] 2xl:px-[140px] flex justify-between items-center">
      <Link href="/">Header</Link>
    </nav>
  );
};

export default Header;
