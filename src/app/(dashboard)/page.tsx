import Link from "next/link";

const LandingPage = () => {
  return (
    <div>
      <h1>Landing Page</h1>
      <Link href="/resume-builder">
        <button className="my-20 mx-auto bg-black text-white px-8 py-2 rounded-full">
          resume-builder
        </button>
      </Link>
    </div>
  );
};

export default LandingPage;
