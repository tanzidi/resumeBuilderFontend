import CoverLetterGeneratorDescription from "../../component/Description/CoverLetterGeneratorDescription";
import Pricing from "../../component/Pricing/Pricing";
import FAQ from "../../component/FAQ/FAQ";
import StartNow from "../../component/StartNow/StartNow";
import CoverLetterGeneratorForm from "../../component/GeneratorForm/CoverLetterGeneratorForm";

const CoverLetterGenerator = () => {
  return (
    <>
      <CoverLetterGeneratorDescription />
      <CoverLetterGeneratorForm />
      <Pricing />
      <FAQ />
      <StartNow />
    </>
  );
};

export default CoverLetterGenerator;
