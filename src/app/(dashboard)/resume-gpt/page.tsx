'use client'
import { Info } from 'lucide-react'
import React, { useState } from 'react'
import Image from "next/image";
import PdfUploadForm from '@/app/component/ResumeForm/PdfUploadForm';
import ChatInterface from '@/app/component/ResumeForm/ChatInterface';

const ResumeGpt = () => {

    const [isPdfUploaded, setIsPdfUploaded] = useState(false);
    const [isReupload, setIsReupload] = useState(false);
    const handlePdfUploadSuccess = () => {
        setIsPdfUploaded(true);
    };
    const handleReupload = () => {
        setIsReupload(true);
    };

    return (
        <div>
            <p className='text-2xl sm:text-3xl font-bold'>Resume Gpt</p>
            <div className="grid sm:grid-cols-2 sm:mb-5">
                <p className="text-lg sm:text-xl mt-3 justify-self-start">
                    Please upload your resume to get started with our AI-powered job assistance.
                </p>
                <div className="flex flex-row items-center justify-self-end">
                    <Info className="w-5 h-5" />
                    <p className="text-xs sm:text-s mt-3 sm:mt-0 mb-1 sm:mb-0 ml-2 text-gray-400">
                        The file should be in PDF format. (Other versions are coming)
                    </p>
                </div>
            </div>
            <PdfUploadForm onUploadSuccess={handlePdfUploadSuccess} onReupload={handleReupload}/>
            {isPdfUploaded && !isReupload &&  <ChatInterface />}
        </div>
    )
}

export default ResumeGpt;
