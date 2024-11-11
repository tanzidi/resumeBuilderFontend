'use client'
import { useState, useRef } from 'react';
import Image from 'next/image';
interface PdfUploadFormProps {
    onUploadSuccess: () => void;
}
const PdfUploadForm: React.FC<PdfUploadFormProps> = ({ onUploadSuccess }) => {
    const [isUploaded, setIsUploaded] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [isFileNotPdf, setIsFileNotPdf] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [file, setFile] = useState<File | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            if (file.type === "application/pdf") {
                setIsFileNotPdf(false);
                setFile(file);
                setTimeout(() => {
                    setIsUploaded(true);
                    onUploadSuccess();
                }, 1000);
                
                
            } else {
                setIsFileNotPdf(true);
                setTimeout(() => 1000);
            }
        }
    };
    

    const handleReupload = () => {
        setIsUploaded(false);
        setIsFileNotPdf(false);
        setFile(null);
    };
    
    const handleTextClick = () => {
        fileInputRef.current?.click();
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);

        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            const file = e.dataTransfer.files[0];
            if (file.type === "application/pdf") {
                setIsFileNotPdf(false);
                handleFileChange({ target: { files: e.dataTransfer.files } } as React.ChangeEvent<HTMLInputElement>);
            } else {
                setIsFileNotPdf(true);
            }
            e.dataTransfer.clearData();
        }
    };

    return (
        <div
            className={`border-2 rounded-lg p-5 flex flex-col items-center justify-center h-full
                ${isDragging ? "border-blue-500 shadow-md" : "border-dashed"}
            `}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            style={{
                backgroundColor: isDragging ? "#E3F2FD" : "#FAFAFF", 
            }}
        >
            {isFileNotPdf ? (
                <>
                    <Image
                        className="w-[70px] h-[70px]"
                        src="/icon/failed-to-upload.png"
                        alt="Upload Success"
                        height={100}
                        width={100}
                    />
                    <p className="text-lg mt-3 mb-1">Failed to upload resume.</p>
                    <button
                        onClick={handleReupload}
                        className="mt-3 px-4 py-2 bg-[#EEEBFF] text-black rounded-3xl flex flex-row"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 12C4 9.87827 4.84285 7.84344 6.34315 6.34315C7.84344 4.84285 9.87827 4 12 4C14.1217 4 16.1566 4.84285 17.6569 6.34315C19.1571 7.84344 20 9.87827 20 12C20 14.1217 19.1571 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20C9.87827 20 7.84344 19.1571 6.34315 17.6569C4.84285 16.1566 4 14.1217 4 12ZM11.7817 8.04343C11.7135 8.07162 11.6514 8.11276 11.5989 8.16457L11.5954 8.168L8.73829 11.0251C8.68523 11.0783 8.64316 11.1413 8.61448 11.2107C8.58579 11.2801 8.57106 11.3545 8.57111 11.4295C8.57116 11.5046 8.58601 11.579 8.61479 11.6483C8.64357 11.7177 8.68573 11.7807 8.73886 11.8337C8.79199 11.8868 8.85504 11.9288 8.92443 11.9575C8.99382 11.9862 9.06818 12.0009 9.14326 12.0009C9.21834 12.0008 9.29268 11.986 9.36203 11.9572C9.43138 11.9284 9.49437 11.8863 9.54743 11.8331L11.4286 9.95086V15.4286C11.4286 15.5801 11.4888 15.7255 11.5959 15.8326C11.7031 15.9398 11.8484 16 12 16C12.1516 16 12.2969 15.9398 12.4041 15.8326C12.5112 15.7255 12.5714 15.5801 12.5714 15.4286V9.95086L14.4526 11.8331C14.5599 11.9404 14.7054 12.0007 14.8571 12.0007C15.0089 12.0007 15.1544 11.9404 15.2617 11.8331C15.369 11.7258 15.4293 11.5803 15.4293 11.4286C15.4293 11.2768 15.369 11.1313 15.2617 11.024L12.4046 8.16686L12.4011 8.16457C12.3212 8.08577 12.2198 8.03226 12.1097 8.01072C11.9995 7.98918 11.8854 8.00055 11.7817 8.04343Z" fill="black"/>
                        </svg>
                        <p className='ml-1'>Re-upload</p>
                    </button>
                </>
            ) : !isUploaded ? (
                <>
                    <Image
                        className="w-[70px] h-[70px]"
                        src="/icon/pdf-upload.png"
                        alt="Pdf Upload"
                        height={100}
                        width={100}
                    />
                    <p
                        className="text-xl mt-3 font-bold cursor-pointer"
                        style={{ color: '#4929FF' }}
                        onClick={handleTextClick}
                    >
                        Select a resume to upload
                    </p>
                    <p className="text-sm text-gray-400 mt-1">or drag and drop it here</p>
                    <input
                        type="file"
                        accept="application/pdf"
                        onChange={handleFileChange}
                        ref={fileInputRef}
                        className="hidden"
                    />
                </>
            ) : (
                <>
                    <Image
                        className="w-[70px] h-[70px]"
                        src="/icon/upload-success.png"
                        alt="Upload Success"
                        height={100}
                        width={100}
                    />
                    <p className="text-lg mt-3 mb-1">Resume uploaded successfully</p>
                    <button
                        onClick={handleReupload}
                        className="mt-3 px-4 py-2 bg-[#EEEBFF] text-black rounded-3xl flex flex-row"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 12C4 9.87827 4.84285 7.84344 6.34315 6.34315C7.84344 4.84285 9.87827 4 12 4C14.1217 4 16.1566 4.84285 17.6569 6.34315C19.1571 7.84344 20 9.87827 20 12C20 14.1217 19.1571 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20C9.87827 20 7.84344 19.1571 6.34315 17.6569C4.84285 16.1566 4 14.1217 4 12ZM11.7817 8.04343C11.7135 8.07162 11.6514 8.11276 11.5989 8.16457L11.5954 8.168L8.73829 11.0251C8.68523 11.0783 8.64316 11.1413 8.61448 11.2107C8.58579 11.2801 8.57106 11.3545 8.57111 11.4295C8.57116 11.5046 8.58601 11.579 8.61479 11.6483C8.64357 11.7177 8.68573 11.7807 8.73886 11.8337C8.79199 11.8868 8.85504 11.9288 8.92443 11.9575C8.99382 11.9862 9.06818 12.0009 9.14326 12.0009C9.21834 12.0008 9.29268 11.986 9.36203 11.9572C9.43138 11.9284 9.49437 11.8863 9.54743 11.8331L11.4286 9.95086V15.4286C11.4286 15.5801 11.4888 15.7255 11.5959 15.8326C11.7031 15.9398 11.8484 16 12 16C12.1516 16 12.2969 15.9398 12.4041 15.8326C12.5112 15.7255 12.5714 15.5801 12.5714 15.4286V9.95086L14.4526 11.8331C14.5599 11.9404 14.7054 12.0007 14.8571 12.0007C15.0089 12.0007 15.1544 11.9404 15.2617 11.8331C15.369 11.7258 15.4293 11.5803 15.4293 11.4286C15.4293 11.2768 15.369 11.1313 15.2617 11.024L12.4046 8.16686L12.4011 8.16457C12.3212 8.08577 12.2198 8.03226 12.1097 8.01072C11.9995 7.98918 11.8854 8.00055 11.7817 8.04343Z" fill="black"/>
                        </svg>
                        <p className='ml-1'>Re-upload</p>
                    </button>
                </>
            )}
        </div>
    );
};

export default PdfUploadForm;
