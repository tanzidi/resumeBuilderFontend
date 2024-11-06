import { Info } from 'lucide-react'
import React from 'react'
import Image from "next/image";
import ResumeScoreForm from '@/app/component/ResumeForm/ResumeScoreForm';
import PdfUplodForm from '@/app/component/ResumeForm/PdfUploadForm';

const ResumeScore = () => {
    
  return (
    <div>
        <p className='text-3xl font-bold'>Resume Score</p>
        <div className="grid grid-cols-2">
            <p className="text-xl mt-3 justify-self-start">
                Please upload your resume to get a summary of your resume with our AI-powered bot.
            </p>
            <div className="flex flex-row items-center justify-self-end">
                <Info className="w-5 h-5" />
                <p className="text-s mt-0 ml-2 text-gray-400">
                    The file should be in PDF formate. (Other versions are coming)
                </p>
            </div>
            
        </div>

        <div className='grid grid-cols-2 gap-10 mt-7'>
            
            <ResumeScoreForm/>
            <PdfUplodForm />

        </div>



    </div>
  )
}

export default ResumeScore;