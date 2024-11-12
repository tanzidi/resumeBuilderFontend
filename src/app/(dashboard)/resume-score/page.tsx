'use client';
import { Info } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';
import ResumeScoreForm from '@/app/component/ResumeForm/ResumeScoreForm';
import PdfUplodForm from '@/app/component/ResumeForm/PdfUploadForm';

const ResumeScore = () => {
    const resumeData = {
        resume_score: 54.3,
        details: [
          {
            title: "Keyword Score",
            description: "How well your resume matches with industry-specific keywords."
          },
          {
            title: "Length Score",
            description: "The length of your resume, ensuring it is both detailed and concise."
          },
          {
            title: "Readability Score",
            description: "How easy it is for hiring managers to read through your resume."
          }
        ]
    };

  const [isPdfUploaded, setIsPdfUploaded] = useState(false);
  const [formData, setFormData] = useState({
    jobIndustry: "",
    jobTitle: ""
  });
  const [resumeScore, setResumeScore] = useState("");

  const handlePdfUploadSuccess = () => {
    setIsPdfUploaded(true);
  };
  
  const handleReupload = () => {
    console.log("reupload clicked")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:5000/api/v1/resume/get-resume-score",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();
      if (result?.statusCode === 200) {
        
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
    setResumeScore("Resume analysis result here"); // Add actual response data here
  };

  const isFormValid = formData.jobIndustry && formData.jobTitle && isPdfUploaded;

  const handleReAnalyze = () => {
    setResumeScore(""); // Reset resume score
    setFormData({ jobIndustry: "", jobTitle: "" }); // Clear form data
    setIsPdfUploaded(false); // Reset the PDF upload status
  };

  return (
    <div>
      <p className="text-2xl sm:text-3xl font-bold">Resume Score</p>
      <div className="grid sm:grid-cols-2">
        {resumeScore === "" && (
          <>
            <p className="text-lg sm:text-xl mt-3 justify-self-start">
              Please upload your resume to get a summary of your resume with our AI-powered bot.
            </p>
            <div className="flex flex-row items-center justify-self-end">
              <Info className="w-5 h-5" />
              <p className="text-xs sm:text-s mt-2 marker:sm:mt-0 ml-2 text-gray-400">
                The file should be in PDF formate. (Other versions are coming)
              </p>
            </div>
          </>
        )}
      </div>

      <div className="grid sm:grid-cols-2 gap-10 mt-3 sm:mt-7">
        {resumeScore === "" && (
          <>
            <ResumeScoreForm formData={formData} setFormData={setFormData} />
            <PdfUplodForm onUploadSuccess={handlePdfUploadSuccess} onReupload={handleReupload}/>
          </>
        )}
      </div>

      {resumeScore === "" && (
        <div className="flex justify-end">
          <button
            onClick={isFormValid ? handleSubmit : undefined}
            disabled={!isFormValid}
            className={`sm:col-span-2 w-[200px] 2xl:w-[250px] mt-4 py-[13px] 2xl:py-[15px] rounded-full transition-transform duration-700 ease-in-out 
              ${isFormValid ? "hover:scale-105 bg-[#4929ff] text-white cursor-pointer" : "bg-gray-400 text-gray-200 cursor-not-allowed"} 
              font-dmSans sm:text-[14px] 2xl:text-[20px] text-[16px] 2xl:leading-[32px] sm:leading-[21px] leading-[26px] font-semibold`}
          >
            Start Analyzing
          </button>
        </div>
      )}

      {resumeScore !== "" ? (
        <>
        <div className="mt-4 border-2 text-sm rounded-lg px-4 py-5" style={{ borderColor: "#DDDFF0" }}>
          <p className="text-lg font-semibold text-[#ED5D31]">
            Your resume score is {resumeData.resume_score}
          </p>
          <p className="mt-1">
            Congratulations on generating your Resume Score! But what does this score really mean? Its not just a random number;
            its a comprehensive assessment built on a robust set of metrics tailored to the demands of todays job market.
          </p>
          <p className="mt-4 font-semibold">
            Heres what weve analyzed to arrive at your score:
          </p>
          <div className="mt-2">
            <ul className="">
              {resumeData.details.map((item, index) => (
                <li key={index} className="relative pl-4 flex">
                  <span className="mr-2 text-[#ED5D31]">•</span>
                  <span className="mr-2 font-semibold text-[#ED5D31]">{item.title}: </span>
                  {item.description}
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-2">
            Your Resume Score is designed to be a holistic measure of your resumes effectiveness, providing you with actionable insights
            to make you a more competitive applicant. So go ahead and refine your resume based on these insights to stand a better chance at
            landing your dream job!
          </p>
        </div>
        
          {/* Re-analyze Button placed below the Resume Score */}
          <div className="mt-4 flex flex-col items-center justify-center">
            <button
              onClick={handleReAnalyze}
              className="w-[200px] 2xl:w-[250px] py-[13px] 2xl:py-[15px] rounded-full bg-[#000000] text-white font-semibold"
            >
              Re-analyze
            </button>
          </div>
        </>
      ) : (
        <div className="mt-4 border-2 rounded-lg p-5 flex flex-col items-center py-10" style={{ borderColor: "#DDDFF0" }}>
          <Image className="w-[70px] h-[70px]" src="/icon/pdf-not-uploaded-yet.png" alt="Pdf Upload" height={100} width={100} />
          <p className="text-lg font-semibold mt-2" style={{ color: '#8C8CB8' }}>
            You haven’t uploaded any resume yet
          </p>
        </div>
      )}
    </div>
  );
};

export default ResumeScore;
