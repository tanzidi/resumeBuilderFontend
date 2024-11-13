"use client";
import { Resume } from "@/app/component/Resume";
import { ResumeForm } from "@/app/component/ResumeForm";

const ResumeBuilder = () => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-6">
      <div className="col-span-3 md:py-5 py-0 md:h-[92vh] overflow-y-scroll">
        <ResumeForm />
      </div>
      <div className="col-span-3">
        <Resume />
      </div>
    </div>
  );
};

export default ResumeBuilder;
