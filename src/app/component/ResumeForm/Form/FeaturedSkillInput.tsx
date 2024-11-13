import { useState } from "react";

export const FeaturedSkillInput = ({
  skill,
  rating,
  setSkillRating,
  placeholder,
  className,
  circleColor,
}: {
  skill: string;
  rating: number;
  setSkillRating: (skill: string, rating: number) => void;
  placeholder: string;
  className?: string;
  circleColor?: string;
}) => {
  return (
    <div className={`flex ${className}`}>
      <input
        type="text"
        value={skill}
        placeholder={placeholder}
        onChange={(e) => setSkillRating(e.target.value, rating)}
        className="border border-[#E1E4F5] 2xl:px-[20px] sm:px-[13px] px-3 2xl:py-[21px] py-[14px] rounded-xl focus:outline-none focus:ring-1 focus:ring-[#b5b7c5] font-normal w-full"
      />
      <CircleRating
        rating={rating}
        setRating={(newRating) => setSkillRating(skill, newRating)}
        circleColor={circleColor}
      />
    </div>
  );
};

const CircleRating = ({
  rating,
  setRating,
  circleColor = "#781D54",
}: {
  rating: number;
  setRating: (rating: number) => void;
  circleColor?: string;
}) => {
  const numCircles = 5;
  const [hoverRating, setHoverRating] = useState<number | null>(null);

  return (
    <div className="flex items-center p-2">
      {[...Array(numCircles)].map((_, idx) => (
        <div
          className={`cursor-pointer p-0.5`}
          key={idx}
          onClick={() => setRating(idx)}
          onMouseEnter={() => setHoverRating(idx)}
          onMouseLeave={() => setHoverRating(null)}
        >
          <div
            className="h-5 w-5 rounded-full transition-transform duration-200 hover:scale-[120%]"
            style={{
              backgroundColor:
                (hoverRating !== null && hoverRating >= idx) ||
                (hoverRating === null && rating >= idx)
                  ? circleColor
                  : "#d1d5db",
            }}
          />
        </div>
      ))}
    </div>
  );
};
