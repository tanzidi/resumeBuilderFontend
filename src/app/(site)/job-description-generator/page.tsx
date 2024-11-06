import Pricing from "../../component/Pricing/Pricing";
import FAQ from "../../component/FAQ/FAQ";
import StartNow from "../../component/StartNow/StartNow";
import JobDescriptionGeneratorDescription from "@/app/component/Description/JobDescriptionGeneratorDescription";
import JobDescriptionGeneratorForm from "@/app/component/GeneratorForm/JobDescriptionGeneratorForm";

const JobDescriptionGenerator = () => {
  return (
    <>
      <JobDescriptionGeneratorDescription />
      <JobDescriptionGeneratorForm />
      <Pricing />
      <FAQ />
      <StartNow />
    </>
  );
};

export default JobDescriptionGenerator;
