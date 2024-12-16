"use client";
import { Resume } from "@/app/component/Resume";
import { ResumeForm } from "@/app/component/ResumeForm";
import MyResume from "@/app/component/MyResume/MyResume";

const ResumeBuilder = () => {
  const handleDownload = async () => {
    try {
      const response = await fetch(
        "http://localhost:5001/api/v1/resume/create",
        {
          method: "GET",
        }
      );

      if (response.ok) {
        // Convert the response to a Blob (binary data)
        const blob = await response.blob();
        // Create a link element to trigger the download
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "resume.pdf"; // The name of the file to download
        link.click(); // Trigger the download
      } else {
        console.error("Failed to download the resume");
      }
    } catch (error) {
      console.error("Error downloading resume:", error);
    }
  };

  return (
    <div className="grid grid-cols-3 md:grid-cols-6">
      <div className="col-span-3 md:py-5 py-0 md:h-[92vh] overflow-y-scroll">
        <ResumeForm />
        {/* <Resume /> */}
      </div>
      <div className="col-span-3 resume-preview-container">
        <button onClick={handleDownload}>Download</button>
        <MyResume />
      </div>
    </div>
  );
};

export default ResumeBuilder;
