import Image from "next/image";
import TagLine from "../button/TagLine";

const Features = () => {
  return (
    <div
      className="flex flex-col py-8 md:py-20 px-5 lg:px-[94px] 2xl:px-[140px]"
      id="features"
    >
      <TagLine tag="Our Features" />
      <h1 className="text-header text-center">
        High End Features Help
        <br />
        You to Get Hired
      </h1>

      <div className="px-0 lg:px-[94px] 2xl:px-[140px] mt-5 grid md:grid-cols-2 grid-cols-1 gap-4 justify-center items-center">
        <Image
          src="/frame_1.png"
          className="ms-auto"
          alt="dummy"
          height={400}
          width={700}
        />
        <Image
          src="/frame_2.png"
          className="me-auto"
          alt="dummy"
          height={400}
          width={700}
        />
      </div>
      <div className="mt-5 grid md:grid-cols-3 grid-cols-1 gap-4 justify-center items-center px-0 lg:px-[94px] 2xl:px-[140px]">
        <Image src="/frame_3.png" alt="dummy" height={400} width={700} />
        <Image src="/frame_4.png" alt="dummy" height={400} width={700} />
        <Image src="/frame_5.png" alt="dummy" height={400} width={700} />
      </div>
      <div className="px-0 lg:px-[94px] mt-5 flex md:flex-row flex-col justify-center items-center ">
        <Image
          src="/frame_6.png"
          alt="dummy"
          height={350}
          width={650}
          className="px-0 lg:px-[94px]"
        />
      </div>
    </div>
  );
};

export default Features;
