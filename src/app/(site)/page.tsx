import Description from "../component/Description/Description";
import FAQ from "../component/FAQ/FAQ";
import Features from "../component/Features/Features";
import Partners from "../component/Partners/Partners";
import Pricing from "../component/Pricing/Pricing";
import Process from "../component/Process/Process";
import Review from "../component/Review/Review";
import StartNow from "../component/StartNow/StartNow";
import Tutorial from "../component/Tutorial/Tutorial";

export default function Home() {
  return (
    <div>
      <Description />
      <Tutorial />
      <Partners />
      <Features />
      <Process />
      <Review />
      <Pricing />
      <FAQ />
      <StartNow />
    </div>
  );
}
