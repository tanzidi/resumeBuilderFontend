import Pricing from "../../component/Pricing/Pricing";
import FAQ from "../../component/FAQ/FAQ";
import StartNow from "../../component/StartNow/StartNow";
import LinkedInGeneratorDescription from "@/app/component/Description/LinkedInGeneratorDescription";
import LinkedInPostGeneratorForm from "@/app/component/GeneratorForm/LinkedInPostGeneratorForm";
import LinkedInHeadlineGeneratorForm from "@/app/component/GeneratorForm/LinkedInHeadlineGeneratorForm";
import LinkedInHashtagGeneratorForm from "@/app/component/GeneratorForm/LinkedInHashtagGeneratorForm";

const LinkedInGenerator = () => {
  return (
    <>
      <LinkedInGeneratorDescription />
      <LinkedInPostGeneratorForm />
      <LinkedInHashtagGeneratorForm />
      <LinkedInHeadlineGeneratorForm />
      <Pricing />
      <FAQ />
      <StartNow />
    </>
  );
};

export default LinkedInGenerator;
