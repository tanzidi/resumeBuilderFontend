'use client';
import { Info } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';
import PdfUplodForm from '@/app/component/ResumeForm/PdfUploadForm';

const ResumeSummary = () => {
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

  const [resumeSummary, setResumeSummary] = useState("");

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
        // {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify(formData),
        // }
      );

      const result = await response.json();
      if (result?.statusCode === 200) {
        
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
    setResumeSummary("Resume analysis result here");
  };

  const isFormValid = isPdfUploaded;

  const handleReAnalyze = () => {
    setResumeSummary("");
    setIsPdfUploaded(false);
  };

  return (
    <div>
      <p className="text-2xl sm:text-3xl font-bold">Resume Summary</p>
      <div className="grid sm:grid-cols-2">
        {resumeSummary === "" && (
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

      <div className="grid gap-5 mt-3 sm:mt-7">
        {resumeSummary === "" && (
          <>
            <PdfUplodForm onUploadSuccess={handlePdfUploadSuccess} onReupload={handleReupload}/>
          </>
        )}
      </div>

      {resumeSummary === "" && (
        <div className="flex justify-end">
          <button
            onClick={isFormValid ? handleSubmit : undefined}
            disabled={!isFormValid}
            className={`text-xs sm:col-span-2 w-[150px] sm:w-[200px] 2xl:w-[250px] mt-4 py-[13px] 2xl:py-[15px] rounded-full transition-transform duration-700 ease-in-out 
              ${isFormValid ? "hover:scale-105 bg-[#4929ff] text-white cursor-pointer" : "bg-gray-400 text-gray-200 cursor-not-allowed"} 
              font-dmSans sm:text-[14px] 2xl:text-[20px] 2xl:leading-[32px] sm:leading-[21px] font-semibold`}
          >
            Start Analyzing
          </button>
        </div>
      )}

      {resumeSummary !== "" ? (
        <>
        <div className="mt-4 border-2 text-sm rounded-lg px-4 py-5" style={{ borderColor: "#DDDFF0" }}>
        <p><b>Statistical Report for OT Monitoring Dashboard UX Case Study</b></p>
        <ol className="list-decimal list-inside">
            <li>
                Information Overload and User Efficiency
                <ul className="list-disc list-inside pl-5">
                <li>75% of HR managers indicated that they would prefer to see trends or historical data instead of current daily and monthly target duplications.</li>
                <li>65% of users found the use of two 120% gauges for daily and monthly targets redundant and confusing, as it did not clearly convey actionable insights or priorities.</li>
                </ul>
            </li>
            <li>
                Redundancy and Data Representation
                <ul className="list-disc list-inside pl-5">
                <li>75% of HR managers indicated that they would prefer to see trends or historical data instead of current daily and monthly target duplications.</li>
                <li>65% of users found the use of two 120% gauges for daily and monthly targets redundant and confusing, as it did not clearly convey actionable insights or priorities.</li>
                </ul>
            </li>
            </ol>

                    
        </div>
        
          <div className="mt-4 flex flex-col items-center justify-center">
            <button
              onClick={handleReAnalyze}
              className="w-[150px] sm:w-[200px] 2xl:w-[250px] py-[10px] sm:py-[13px] 2xl:py-[15px] rounded-full bg-[#000000] text-white font-semibold"
            >
              Re-analyze
            </button>
          </div>
        </>
      ) : (
        <div className="mt-4 border-2 rounded-lg p-5 flex flex-col items-center py-4 sm:mb-0 mb-7 sm:py-10" style={{ borderColor: "#DDDFF0" }}>
          <Image className="w-[40px] sm:w-[70px] h-[40px] sm:h-[70px]" src="/icon/pdf-not-uploaded-yet.png" alt="Pdf Upload" height={100} width={100} />
          <p className="text-md sm:text-lg font-semibold mt-2" style={{ color: '#8C8CB8' }}>
            You haven’t uploaded any resume yet
          </p>
        </div>
      )}
    </div>
  );
};

export default ResumeSummary;
