import Pricing from "../../component/Pricing/Pricing";
import FAQ from "../../component/FAQ/FAQ";
import StartNow from "../../component/StartNow/StartNow";
import LinkedInBioDescription from "@/app/component/Description/LinkedInBioDescription";
import LinkedInBioGeneratorForm from "@/app/component/GeneratorForm/LinkedInBioGeneratorForm";

const LinkedInGenerator = () => {
  return (
    <>
      <LinkedInBioDescription />
      <LinkedInBioGeneratorForm />
      <Pricing />
      <FAQ />
      <StartNow />
    </>
  );
};

export default LinkedInGenerator;
