import Pricing from "../../component/Pricing/Pricing";
import FAQ from "../../component/FAQ/FAQ";
import StartNow from "../../component/StartNow/StartNow";
import LinkedInRecommendationDescription from "@/app/component/Description/LinkedInRecommendationDescription";
import LinkedInRecommendationGeneratorForm from "@/app/component/GeneratorForm/LinkedInRecommendationGeneratorForm";

const LinkedInGenerator = () => {
  return (
    <>
      <LinkedInRecommendationDescription />
      <LinkedInRecommendationGeneratorForm />
      <Pricing />
      <FAQ />
      <StartNow />
    </>
  );
};

export default LinkedInGenerator;
