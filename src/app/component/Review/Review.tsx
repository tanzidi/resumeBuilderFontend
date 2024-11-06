import TagLine from "../button/TagLine";
import SingleReview from "./SingleReview";

const Review = () => {
  return (
    <div className="flex flex-col py-8 md:py-20">
      <TagLine tag="Reviews" />
      <h1 className="text-header text-center">
        Our Happy Clients Say
        <br />
        About Us
      </h1>
      <div
        style={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            animation: "scroll-right-to-left 30s linear infinite",
          }}
          className="2xl:gap-[24px] gap-[16px] 2xl:mb-[24px] mb-[16px]"
        >
          {[...Array(8)].map((_, index) => (
            <SingleReview key={index} />
          ))}
        </div>
      </div>
      <div
        style={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            left: "calc(-532px * 7)",
            position: "relative",
            flexDirection: "row",
            animation: "scroll-left-to-right 80s linear infinite",
          }}
          className="2xl:gap-[24px] gap-[16px] 2xl:mb-[24px] mb-[16px]"
        >
          {[...Array(8)].map((_, index) => (
            <SingleReview key={index} />
          ))}
          {[...Array(8)].map((_, index) => (
            <SingleReview key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
